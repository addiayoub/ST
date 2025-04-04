
// Routes - routes/userRoutes.js
const express = require('express');
const { 
  getUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router
  .route('/')
  .get(protect, authorize('Super Admin', 'Admin'), getUsers);

router
  .route('/:id')
  .get(protect, authorize('Super Admin', 'Admin'), getUserById)
  .put(protect, authorize('Super Admin', 'Admin'), updateUser)
  .delete(protect, authorize('Super Admin', 'Admin'), deleteUser);

module.exports = router;//