const Transfer = require('../models/Transfer');
const Magasin = require('../models/Magasin');
const moment = require('moment');
const { validationResult } = require('express-validator');

// Helper functions
const formatDateToKey = (date) => moment(date).format('YYYY-MM-DD');

const formatTransferResponse = (transfer) => ({
  _id: transfer._id,
  Date: moment(transfer.Date).format('YYYY-MM-DD'),
  Document_Number: transfer.Document_Number, 
  Id_Store: transfer.Id_Store,
  Id_Department_Type: transfer.Id_Department_Type,
  Destination_Id_Store: transfer.Destination_Id_Store,
  Destination_Id_Departament_Type: transfer.Destination_Id_Departament_Type,
  Id_Product: transfer.Id_Product,
  Id_Movement_Type: transfer.Id_Movement_Type,
  Id_Movement_Subtype: transfer.Id_Movement_Subtype,
  Document_Date: moment(transfer.Document_Date).format('YYYY-MM-DD'),
  Sequence: transfer.Sequence,
  Void_Sequence: transfer.Void_Sequence,
  MOVEMENTS: transfer.MOVEMENTS,
  from: transfer.from, // On garde le format original (ID seulement)
  to: transfer.to,    // On garde le format original (ID seulement)
  status: transfer.status,
  type: transfer.type,
  showBoxIcon: transfer.showBoxIcon,
  quantity: transfer.quantity,
  description: transfer.description,
  Flag: transfer.Flag,
  createdAt: moment(transfer.createdAt).format('YYYY-MM-DD HH:mm'),
  updatedAt: moment(transfer.updatedAt).format('YYYY-MM-DD HH:mm')
});

const handleErrors = (res, error, status = 500) => {
  console.error(error);
  res.status(status).json({ 
    success: false,
    error: error.message || 'Une erreur est survenue'
  });
};

// Contrôleurs
exports.getAllTransfers = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, storeId } = req.query;
    const query = {};
    
    if (status) query.status = status;
    if (storeId) {
      query.$or = [
        { 'from': storeId },
        { 'to': storeId }
      ];
    }
    
    const transfers = await Transfer.find(query)
      .sort({ Date: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .exec();

    const count = await Transfer.countDocuments(query);
    res.status(200).json({
      success: true,
      data: transfers.map(formatTransferResponse),
      pagination: {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: +page,
        itemsPerPage: +limit
      }
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

exports.getTransfersByPeriod = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    const { startDate, endDate, status, storeId } = req.query;
    const query = {
      Date: { 
        $gte: new Date(startDate), 
        $lte: new Date(endDate) 
      }
    };
    
    if (status) query.status = status;
    if (storeId) {
      query.$or = [
        { 'from': storeId },
        { 'to': storeId }
      ];
    }

    const transfers = await Transfer.find(query).sort({ Date: -1 });

    res.status(200).json({
      success: true,
      data: transfers.map(formatTransferResponse),
      count: transfers.length
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

exports.getTransferById = async (req, res) => {
  try {
    const transfer = await Transfer.findById(req.params.id);
      
    if (!transfer) {
      return res.status(404).json({ 
        success: false,
        error: 'Transfert non trouvé' 
      });
    }
    res.status(200).json({
      success: true,
      data: formatTransferResponse(transfer)
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

exports.createTransfer = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    // Vérifier que le magasin destination existe
    if (req.body.to) {
      const toStore = await Magasin.findById(req.body.to);
      if (!toStore) {
        return res.status(400).json({
          success: false,
          error: 'Magasin destination non trouvé'
        });
      }
    }

    // Calculer la quantité totale à partir des MOVEMENTS
    const quantity = req.body.MOVEMENTS 
      ? req.body.MOVEMENTS.reduce((sum, movement) => sum + (movement.Units || 0), 0)
      : 0;

    const newTransfer = new Transfer({
      ...req.body,
      quantity,
      createdBy: req.user.id
    });
    
    const savedTransfer = await newTransfer.save();
    
    res.status(201).json({
      success: true,
      data: formatTransferResponse(savedTransfer)
    });
  } catch (error) {
    handleErrors(res, error, 400);
  }
};

exports.updateTransfer = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    // Vérifier que le magasin destination existe si modifié
    if (req.body.to) {
      const toStore = await Magasin.findById(req.body.to);
      if (!toStore) {
        return res.status(400).json({
          success: false,
          error: 'Magasin destination non trouvé'
        });
      }
    }

    // Si MOVEMENTS est modifié, recalculer la quantité
    if (req.body.MOVEMENTS) {
      req.body.quantity = req.body.MOVEMENTS.reduce((sum, movement) => sum + (movement.Units || 0), 0);
    }

    const updatedTransfer = await Transfer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedTransfer) {
      return res.status(404).json({ 
        success: false,
        error: 'Transfert non trouvé' 
      });
    }
    
    res.status(200).json({
      success: true,
      data: formatTransferResponse(updatedTransfer)
    });
  } catch (error) {
    handleErrors(res, error, 400);
  }
};

exports.deleteTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.findByIdAndDelete(req.params.id);
    
    if (!transfer) {
      return res.status(404).json({ 
        success: false,
        error: 'Transfert non trouvé' 
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Transfert supprimé avec succès',
      data: formatTransferResponse(transfer)
    });
  } catch (error) {
    handleErrors(res, error);
  }
};