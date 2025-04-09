const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');
const { protect } = require('../middleware/authMiddleware');
const { check, query } = require('express-validator');

// Validation rules as array
const transferValidationRules = [
  check('to').notEmpty().withMessage('La destination est obligatoire'),
  check('date').isISO8601().withMessage('Format de date invalide'),
  check('quantity').isInt({ min: 0 }).withMessage('La quantité doit être un nombre positif'),
  check('status').isIn(['En cours', 'Confirmé', 'En attente', 'Annulé', 'Inventaire'])
    .withMessage('Statut invalide')
];

const periodValidationRules = [
  query('startDate').isISO8601().withMessage('Format de date de début invalide'),
  query('endDate').isISO8601().withMessage('Format de date de fin invalide'),
  query('endDate').custom((value, { req }) => {
    if (new Date(value) < new Date(req.query.startDate)) {
      throw new Error('La date de fin doit être après la date de début');
    }
    return true;
  })
];

// Routes
router.get('/', protect, transferController.getAllTransfers);

// Use the validation rules array for the period route
router.get('/period', protect, periodValidationRules, transferController.getTransfersByPeriod);

router.get('/:id', protect, transferController.getTransferById);

// Use the validation rules array for POST and PUT routes
router.post('/', protect, transferValidationRules, transferController.createTransfer);

router.put('/:id', protect, transferValidationRules, transferController.updateTransfer);

router.delete('/:id', protect, transferController.deleteTransfer);

module.exports = router;//