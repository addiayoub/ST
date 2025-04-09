const Transfer = require('../models/Transfer');
const moment = require('moment');
const { validationResult } = require('express-validator');

// Helper functions
const formatDateToKey = (date) => moment(date).format('YYYY-MM-DD');

const formatTransferResponse = (transfer) => ({
    from: transfer.from || '',
    to: transfer.to,
    status: transfer.status,
    type: transfer.type,
    showBoxIcon: transfer.showBoxIcon,
    quantity: transfer.quantity,
    description: transfer.description,
    date: moment(transfer.date).format('DD/MM/YYYY'),
    _id: transfer._id,
    documentNumber: transfer.documentNumber || '', // Ajoutez    cette ligne
    createdAt: moment(transfer.createdAt).format('DD/MM/YYYY HH:mm'),
    updatedAt: moment(transfer.updatedAt).format('DD/MM/YYYY HH:mm')
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
    const { page = 1, limit = 10, status } = req.query;
    const query = {};
    
    if (status) query.status = status;
    
    const transfers = await Transfer.find(query).sort({ date: 1 }).exec();

    const transfersData = {};
    transfers.forEach(transfer => {
      const dateKey = formatDateToKey(transfer.date);
      if (!transfersData[dateKey]) {
        transfersData[dateKey] = {
          date: moment(transfer.date).format('D'),
          transfers: []
        };
      }
      transfersData[dateKey].transfers.push(formatTransferResponse(transfer));
    });

    const count = await Transfer.countDocuments(query);
    res.status(200).json({
      success: true,
      data: transfersData,
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

    const { startDate, endDate, status } = req.query;
    const query = {
      date: { 
        $gte: new Date(startDate), 
        $lte: new Date(endDate) 
      }
    };
    
    if (status) query.status = status;

    const transfers = await Transfer.find(query).sort({ date: -1 });

    const transfersData = {};
    transfers.forEach(transfer => {
      const dateKey = formatDateToKey(transfer.date);
      if (!transfersData[dateKey]) {
        transfersData[dateKey] = {
          date: moment(transfer.date).format('D'),
          transfers: []
        };
      }
      transfersData[dateKey].transfers.push(formatTransferResponse(transfer));
    });

    res.status(200).json({
      success: true,
      data: transfersData,
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
  
      console.log('Données reçues:', req.body); // Debug
  
      const newTransfer = new Transfer({
        ...req.body,
        createdBy: req.user.id
      });
      
      const savedTransfer = await newTransfer.save();
      console.log('Transfert sauvegardé:', savedTransfer); // Debug
      
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
};//