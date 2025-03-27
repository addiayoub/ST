  // data.js - Fichier contenant les données pour le calendrier des transferts

  // Jours de la semaine
  export const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Options pour les selects
  export const transferOptions = {
    fromOptions: [' Casablanca', ' Marrakech', ' Morrocomoll', ' Online'],
    toOptions: ['Casablanca', 'Marrakech', 'Morrocomoll', 'Online'],
    statusOptions: ['En cours', 'Confirmer', 'En attente', 'Annulé', 'Inventaire']
  };
export const destinations = [
  'Casablanca', 
  'Marrakech', 
  'Morrocomoll', 
  'Online'
];
  // Données des transferts - organisées par date complète (YYYY-MM-DD)
  export const transfersData = {
    '2021-02-22': { 
      transfers: [
        {
          id: 1,
          type: 'yellow', // Changed from blue to yellow for inventory
          to: 'Marrakech',
          status: 'Inventaire',
           date: '22/02/2021',
          showBoxIcon: true,
        }
      ] 
    },
    '2025-03-25': { 
      transfers: [
        {
          id: 2,
          type: 'green',
          from: ' Morrocomoll',
          to: 'Marrakech',
          status: 'Confirmer',
          documentNumber: '456789',
          quantity: 30,
          comment: 'Pantalon',
          date: '25/02/2021'
        },
        {
          id: 3,
          type: 'green',
          from: ' Morrocomoll',
          to: 'Casablanca',
          status: 'Confirmer',
          documentNumber: '567890',
          quantity: 10,
          comment: 'Chaussures',
          date: '25/02/2021'
        }
      ] 
    },
    '2025-03-26': { 
      transfers: [
        {
          id: 5,
          type: 'blue',
          from: ' Morrocomoll',
          to: 'Marrakech',
          status: 'En cours',
          documentNumber: '456789',
          quantity: 30,
          comment: 'Pantalon',
          date: '26/02/2025'
        },
        {
          id: 6,
          type: 'orange',
          from: ' Online',
          to: 'Casablanca',
          status: 'En attente',
          documentNumber: '567890',
          quantity: 10,
          comment: 'Chaussures',
          date: '26/02/2025'
        },
        {
          id: 7,
          type: 'yellow',
          to: 'Casablanca',
          status: 'Inventaire',
          date: '16/02/2025',
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
        case 'yellow': return 'bg-yellow-50'; // Corrected from border-yellow-50 to bg-yellow-50
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