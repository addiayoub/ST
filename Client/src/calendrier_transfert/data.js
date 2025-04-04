// data.js - Fichier contenant les données pour le calendrier des transferts
export const utilisateursList = [
  {
    id: 1,
    nom: 'Elaqqari',
    prenom: 'Fouad',
    matricule: 'EMP001',
    role: 'Admin',

  },
  {
    id: 2,
    nom: 'Benallai',
    prenom: 'Imad',
    matricule: 'EMP002',
    role: 'Super Admin',
  
  },
  {
    id: 3,
    nom: 'test',
    prenom: 'test',
    matricule: 'EMP003',
    role: 'Admin',
 
  },
  {
    id: 4,
    nom: 'Williams',
    prenom: 'Emily',
    matricule: 'EMP004',
    role: 'Admin',
 
  }
];

// Options pour les rôles utilisateurs
export const userRoles = ['Admin', 'Super Admin'];

// Statuts utilisateurs
export const userStatuses = ['active', 'inactive'];
// Jours de la semaine
export const daysOfWeek = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];

// Liste des magasins existants
export const magasinsList = [
  {
    id: 1,
    codeInditex: 'IND001',
    nomMagasin: 'stradi Casablanca',
    codeFutura: 'FUT001',
    statut: 'active'
  },
  {
    id: 2,
    codeInditex: 'IND002',
    nomMagasin: 'stradi Marrakech',
    codeFutura: 'FUT002',
    statut: 'active'
  },
  {
    id: 3,
    codeInditex: 'IND003',
    nomMagasin: 'stradi Morrocomoll',
    codeFutura: 'FUT003',
    statut: 'active'
  },
  {
    id: 4,
    codeInditex: 'IND004',
    nomMagasin: 'stradi Online',
    codeFutura: 'FUT004',
    statut: 'active'
  },
  {
    id: 5,
    codeInditex: 'IND005',
    nomMagasin: 'stradi Rabat',
    codeFutura: 'FUT005',
    statut: 'inactive'
  }
];

// Options pour les selects
export const transferOptions = {
  fromOptions: ['stradi Casablanca', 'stradi Marrakech', 'stradi Morrocomoll', 'stradi Online'],
  toOptions: ['stradi Casablanca', 'stradi Marrakech', 'stradi Morrocomoll', 'stradi Online'],
  statusOptions: ['En cours', 'Confirmer', 'En attente', 'Annulé', 'Inventaire']
};

export const destinations = [
  'stradi Casablanca', 
  'stradi Marrakech', 
  'stradi Morrocomoll', 
  'stradi Online'
];

// Données des transferts - organisées par date complète (YYYY-MM-DD)
export const transfersData = {
  '2021-02-22': { 
    transfers: [
      {
        id: 1,
        type: 'yellow', // Changed from blue to yellow for inventory
        to: 'stradi Marrakech',
        status: 'Inventaire',
        date: '22/03/2021',
        showBoxIcon: true,
      }
    ] 
  },
  '2025-03-25': { 
    transfers: [
      {
        id: 2,
        type: 'green',
        from: 'stradi Morrocomoll',
        to: 'stradi Marrakech',
        status: 'Confirmer',
        documentNumber: '456789',
        quantity: 30,
        comment: 'Pantalon',
        date: '25/03/2021'
      },
      {
        id: 3,
        type: 'green',
        from: 'stradi Morrocomoll',
        to: 'stradi Casablanca',
        status: 'Confirmer',
        documentNumber: '567890',
        quantity: 10,
        comment: 'Chaussures',
        date: '25/03/2021'
      }
    ] 
  },
  '2025-03-26': { 
    transfers: [
      {
        id: 5,
        type: 'blue',
        from: 'stradi Morrocomoll',
        to: 'stradi Marrakech',
        status: 'En cours',
        documentNumber: '456789',
        quantity: 30,
        comment: 'Pantalon',
        date: '26/03/2025'
      },
      {
        id: 6,
        type: 'orange',
        from: 'stradi Online',
        to: 'stradi Casablanca',
        status: 'En attente',
        documentNumber: '567890',
        quantity: 10,
        comment: 'Chaussures',
        date: '26/03/2025'
      },
      {
        id: 7,
        type: 'yellow',
        to: 'stradi Casablanca',
        status: 'Inventaire',
        date: '16/03/2025',
        showBoxIcon: true
      }
    ] 
  },
};

// Date par défaut
export const defaultDate = new Date(2021, 1, 25); // 25 février 2021

// Fonctions utilitaires pour les couleurs
export const colorUtils = {
  getDotColor: (type) => {
    switch (type) {
      case 'blue': return 'bg-blue-500';
      case 'green': return 'bg-green-500';
      case 'orange': return 'bg-orange-500';
      case 'red': return 'bg-red-500';
      case 'yellow': return 'bg-yellow-500';
      default: return '';
    }
  },
  
  getBorderColor: (type) => {
    switch (type) {
      case 'blue': return 'border-blue-500';
      case 'green': return 'border-green-500';
      case 'orange': return 'border-orange-500';
      case 'red': return 'border-red-500';
      case 'yellow': return 'border-yellow-500';
      default: return '';
    }
  },
  
  getBgColor: (type) => {
    switch (type) {
      case 'red': return 'bg-red-50';
      case 'blue': return 'bg-blue-50';
      case 'orange': return 'bg-orange-50';
      case 'green': return 'bg-green-50';
      case 'yellow': return 'bg-yellow-50';
      default: return '';
    }
  }
};

// Légende des types de transferts
export const transferLegend = [
  { type: 'blue', label: 'En cours' },
  { type: 'green', label: 'Confirmer' },
  { type: 'orange', label: 'En attente' },
  { type: 'red', label: 'Annuler' },
  { type: 'yellow', label: 'Inventaire' }
];