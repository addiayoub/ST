const express = require('express');
const {
  createMagasin,
  getMagasins,
  updateMagasin,
  deleteMagasin
} = require('../controllers/magasinController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Protection de toutes les routes
router.use(protect);

router.route('/')
  .get(getMagasins)
  .post(authorize('Super Admin', 'Admin'), createMagasin);

router.route('/:id')
  .put(authorize('Super Admin', 'Admin'), updateMagasin)
  .delete(authorize('Super Admin', 'Admin'), deleteMagasin);

module.exports = router;