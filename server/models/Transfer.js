const mongoose = require('mongoose');

const TransferSchema = new mongoose.Schema({
  from: {
    type: String,
    required: function() { 
      return !this.showBoxIcon && this.status !== 'Inventaire' && this.status !== 'Inventaire planifié'; 
    },
    default: ''
  },
  to: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  documentNumber: {
    type: String,  // Changé de Number à String
    required: function() { return this.status !== 'Inventaire' && this.status !== 'Inventaire planifié'; },
    unique: true,
    trim: true,
    maxlength: 50
  },
  status: {
    type: String,
    enum: ['En cours', 'Confirmé', 'En attente', 'Annulé', 'Inventaire', 'Inventaire z'],
    default: 'En attente'
  },
  type: {
    type: String,
    enum: ['blue', 'green', 'orange', 'red', 'yellow'],
    default: 'orange'
  },
  showBoxIcon: {
    type: Boolean,
    default: false
  },
  quantity: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Middleware pour le type selon le statut (modifié)
TransferSchema.pre('save', function(next) {
  if (this.isModified('status') || this.isNew) {
    switch (this.status) {
        case 'En cours':
          this.type = 'blue';
          break;
        case 'Confirmé':
          this.type = 'green';
          break;
        case 'En attente':
          this.type = 'orange';
          break;
        case 'Annulé':
          this.type = 'red';
          break;
    }
  }
  next();
});
  
module.exports = mongoose.model('Transfer', TransferSchema);