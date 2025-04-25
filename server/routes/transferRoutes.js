const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');
const { protect } = require('../middleware/authMiddleware');
const { check, query } = require('express-validator');

// Validation rules
const transferValidationRules = [
  check('to').notEmpty().withMessage('La destination est obligatoire'),
  check('Date').isISO8601().withMessage('Format de date invalide'),
  check('Document_Number').isNumeric().withMessage('Le numéro de document doit être un nombre'),
  check('MOVEMENTS').isArray().withMessage('MOVEMENTS doit être un tableau'),
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
// Ajouter ces lignes dans transferRoutes.js

// Validation rules pour updateTransferGroup
const groupUpdateValidationRules = [
  check('fromId').isMongoId().withMessage('ID du magasin d\'origine invalide'),
  check('toId').isMongoId().withMessage('ID du magasin de destination invalide'),
  check('date').isISO8601().withMessage('Format de date invalide'),
  check('updates').isObject().withMessage('Les mises à jour doivent être un objet')
];

// Ajouter cette route après les autres routes
router.put('/group', protect, groupUpdateValidationRules, transferController.updateTransferGroup);

// Routes
router.get('/', protect, transferController.getAllTransfers);
router.get('/flagged', protect, transferController.getFlaggedTransfers); // New route for flagged transfers
router.get('/period', protect, periodValidationRules, transferController.getTransfersByPeriod);
router.get('/:id', protect, transferController.getTransferById);
router.post('/', protect, transferValidationRules, transferController.createTransfer);
router.put('/:id', protect, transferValidationRules, transferController.updateTransfer);
router.delete('/:id', protect, transferController.deleteTransfer);

module.exports = router;