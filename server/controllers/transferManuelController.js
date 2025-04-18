// controllers/transferManuelController.js
const asyncHandler = require('express-async-handler');
const TransferManuel = require('../models/transferManuelModel');
const Magasin = require('../models/Magasin');

// @desc    Créer un nouveau transfert manuel
// @route   POST /api/transfers-manuel
// @access  Private
const createTransferManuel = asyncHandler(async (req, res) => {
  const { 
    fromLocation, 
    toLocation, 
    transferDate, 
    status, 
    totalQuantity,
    barcodes 
  } = req.body;

  // Valider que les magasins existent
  const fromMagasin = await Magasin.findById(fromLocation);
  const toMagasin = await Magasin.findById(toLocation);

  if (!fromMagasin || !toMagasin) {
    res.status(400);
    throw new Error('Un ou plusieurs magasins spécifiés sont introuvables');
  }

  // Convertir l'objet de codes-barres en tableau d'items
  const items = Object.entries(barcodes).map(([barcode, quantity]) => ({
    barcode,
    quantity: parseInt(quantity)
  }));

  const transferManuel = await TransferManuel.create({
    fromLocation,
    toLocation,
    transferDate: transferDate || Date.now(),
    status: status || 'pending',
    totalQuantity: parseInt(totalQuantity),
    items,
    createdBy: req.user ? req.user._id : null,
    importMethod: 'file'
  });

  if (transferManuel) {
    res.status(201).json({
      success: true,
      data: transferManuel
    });
  } else {
    res.status(400);
    throw new Error('Données de transfert manuel invalides');
  }
});

// @desc    Obtenir tous les transferts manuels
// @route   GET /api/transfers-manuel
// @access  Private
const getTransfersManuels = asyncHandler(async (req, res) => {
  const transfersManuels = await TransferManuel.find({})
    .populate('fromLocation', 'nomMagasin')
    .populate('toLocation', 'nomMagasin')
    .populate('createdBy', 'name')
    .sort('-createdAt');

  res.json({
    success: true,
    count: transfersManuels.length,
    data: transfersManuels
  });
});

// @desc    Obtenir un transfert manuel par ID
// @route   GET /api/transfers-manuel/:id
// @access  Private
const getTransferManuelById = asyncHandler(async (req, res) => {
  const transferManuel = await TransferManuel.findById(req.params.id)
    .populate('fromLocation', 'nomMagasin')
    .populate('toLocation', 'nomMagasin')
    .populate('createdBy', 'name');

  if (transferManuel) {
    res.json({
      success: true,
      data: transferManuel
    });
  } else {
    res.status(404);
    throw new Error('Transfert manuel non trouvé');
  }
});

// @desc    Mettre à jour un transfert manuel
// @route   PUT /api/transfers-manuel/:id
// @access  Private
const updateTransferManuel = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const transferManuel = await TransferManuel.findById(req.params.id);

  if (!transferManuel) {
    res.status(404);
    throw new Error('Transfert manuel non trouvé');
  }

  // Vérifier si le transfert peut être mis à jour
  if (transferManuel.status === 'confirmed' && status !== 'confirmed') {
    res.status(400);
    throw new Error('Un transfert manuel confirmé ne peut pas être modifié');
  }

  // Mettre à jour uniquement le statut
  transferManuel.status = status || transferManuel.status;
  
  const updatedTransferManuel = await transferManuel.save();

  res.json({
    success: true,
    data: updatedTransferManuel
  });
});

// @desc    Supprimer un transfert manuel
// @route   DELETE /api/transfers-manuel/:id
// @access  Private
const deleteTransferManuel = asyncHandler(async (req, res) => {
  const transferManuel = await TransferManuel.findById(req.params.id);

  if (!transferManuel) {
    res.status(404);
    throw new Error('Transfert manuel non trouvé');
  }

  // Vérifier que le transfert n'est pas déjà confirmé
  if (transferManuel.status === 'confirmed') {
    res.status(400);
    throw new Error('Un transfert manuel confirmé ne peut pas être supprimé');
  }

  await transferManuel.deleteOne();

  res.json({
    success: true,
    message: 'Transfert manuel supprimé avec succès'
  });
});

// @desc    Obtenir les statistiques des transferts manuels
// @route   GET /api/transfers-manuel/stats
// @access  Private
const getTransferManuelStats = asyncHandler(async (req, res) => {
  const stats = await TransferManuel.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        totalItems: { $sum: '$totalQuantity' }
      }
    }
  ]);

  res.json({
    success: true,
    data: stats
  });
});

module.exports = {
  createTransferManuel,
  getTransfersManuels,
  getTransferManuelById,
  updateTransferManuel,
  deleteTransferManuel,
  getTransferManuelStats
};