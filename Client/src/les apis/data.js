

// Options pour les rôles utilisateurs

// Jours de la semaine
export const daysOfWeek = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];

// Liste des magasins existants


// Options pour les selects
export const transferOptions = {
  fromOptions: ['stradi Casablanca', 'stradi Marrakech', 'stradi Morocco-mall', 'stradi Rabat','stradi Agadir','stradi Tanger'],
  toOptions: ['stradi Casablanca', 'stradi Marrakech', 'stradi Morocco-mall', 'stradi Rabat','stradi Agadir','stradi Tanger'],
  statusOptions: ['En cours', 'Confirmé', 'En attente', 'Annulé']
};

export const destinations = [
  'stradi Casablanca', 
  'stradi Marrakech', 
  'stradi Morocco-mall', 
  'stradi Rabat'
  ,'stradi Agadir',
  'stradi Tanger'
];

// Données des transferts - organisées par date complète (YYYY-MM-DD)
export const transfersData = {
  "2025-01-01": {
    "transfers": [
      {
        "id": 37,
        "type": "blue",
        "date": "01/01/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100037",
        "quantity": 12,
        "comment": "Sacs"
      },
      {
        "id": 38,
        "type": "orange",
        "date": "01/01/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100038",
        "quantity": 29,
        "comment": "Shorts"
      },
      {
        "id": 39,
        "type": "orange",
        "date": "01/01/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100039",
        "quantity": 17,
        "comment": "Chemises"
      },
      {
        "id": 40,
        "type": "blue",
        "date": "01/01/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100040",
        "quantity": 11,
        "comment": "Shorts"
      },
      {
        "id": 41,
        "type": "blue",
        "date": "01/01/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100041",
        "quantity": 9,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-01-02": {
    "transfers": [
      {
        "id": 42,
        "type": "green",
        "date": "02/01/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100042",
        "quantity": 25,
        "comment": "Shorts"
      },
      {
        "id": 43,
        "type": "orange",
        "date": "02/01/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100043",
        "quantity": 14,
        "comment": "Tops"
      },
      {
        "id": 44,
        "type": "blue",
        "date": "02/01/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100044",
        "quantity": 17,
        "comment": "Tops"
      }
    ]
  },
  "2025-01-03": {
    "transfers": [
      {
        "id": 45,
        "type": "green",
        "date": "03/01/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100045",
        "quantity": 18,
        "comment": "Jeans"
      },
      {
        "id": 46,
        "type": "orange",
        "date": "03/01/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 47,
        "type": "green",
        "date": "03/01/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100046",
        "quantity": 7,
        "comment": "Chaussures"
      },
      {
        "id": 48,
        "type": "yellow",
        "date": "03/01/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-01-04": {
    "transfers": [
      {
        "id": 49,
        "type": "green",
        "date": "04/01/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 50,
        "type": "yellow",
        "date": "04/01/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 51,
        "type": "orange",
        "date": "04/01/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 52,
        "type": "blue",
        "date": "04/01/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100047",
        "quantity": 21,
        "comment": "Vestes"
      }
    ]
  },
  "2025-01-05": {
    "transfers": [
      {
        "id": 53,
        "type": "orange",
        "date": "05/01/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 54,
        "type": "blue",
        "date": "05/01/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100048",
        "quantity": 28,
        "comment": "Sacs"
      },
      {
        "id": 55,
        "type": "blue",
        "date": "05/01/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100049",
        "quantity": 22,
        "comment": "Accessoires"
      },
      {
        "id": 56,
        "type": "green",
        "date": "05/01/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100050",
        "quantity": 26,
        "comment": "Robes"
      },
      {
        "id": 57,
        "type": "yellow",
        "date": "05/01/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-01-06": {
    "transfers": [
      {
        "id": 58,
        "type": "blue",
        "date": "06/01/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100051",
        "quantity": 26,
        "comment": "Vestes"
      },
      {
        "id": 59,
        "type": "yellow",
        "date": "06/01/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-01-07": {
    "transfers": [
      {
        "id": 60,
        "type": "blue",
        "date": "07/01/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 61,
        "type": "green",
        "date": "07/01/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100052",
        "quantity": 10,
        "comment": "Chemises"
      },
      {
        "id": 62,
        "type": "blue",
        "date": "07/01/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100053",
        "quantity": 26,
        "comment": "Tops"
      }
    ]
  },
  "2025-01-08": {
    "transfers": [
      {
        "id": 63,
        "type": "orange",
        "date": "08/01/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100054",
        "quantity": 9,
        "comment": "T-shirts"
      },
      {
        "id": 64,
        "type": "green",
        "date": "08/01/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 65,
        "type": "yellow",
        "date": "08/01/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-01-09": {
    "transfers": [
      {
        "id": 66,
        "type": "blue",
        "date": "09/01/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100055",
        "quantity": 13,
        "comment": "Pantalons"
      },
      {
        "id": 67,
        "type": "orange",
        "date": "09/01/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100056",
        "quantity": 24,
        "comment": "Jeans"
      },
      {
        "id": 68,
        "type": "blue",
        "date": "09/01/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100057",
        "quantity": 17,
        "comment": "Sacs"
      },
      {
        "id": 69,
        "type": "blue",
        "date": "09/01/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100058",
        "quantity": 17,
        "comment": "T-shirts"
      },
      {
        "id": 70,
        "type": "green",
        "date": "09/01/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100059",
        "quantity": 26,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-01-10": {
    "transfers": [
      {
        "id": 71,
        "type": "green",
        "date": "10/01/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100060",
        "quantity": 13,
        "comment": "Pantalons"
      },
      {
        "id": 72,
        "type": "orange",
        "date": "10/01/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100061",
        "quantity": 28,
        "comment": "Jeans"
      },
      {
        "id": 73,
        "type": "green",
        "date": "10/01/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100062",
        "quantity": 6,
        "comment": "Pantalons"
      },
      {
        "id": 74,
        "type": "green",
        "date": "10/01/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-01-11": {
    "transfers": [
      {
        "id": 75,
        "type": "blue",
        "date": "11/01/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 76,
        "type": "yellow",
        "date": "11/01/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 77,
        "type": "orange",
        "date": "11/01/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100063",
        "quantity": 22,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-01-12": {
    "transfers": [
      {
        "id": 78,
        "type": "yellow",
        "date": "12/01/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 79,
        "type": "green",
        "date": "12/01/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100064",
        "quantity": 12,
        "comment": "Pulls"
      },
      {
        "id": 80,
        "type": "green",
        "date": "12/01/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100065",
        "quantity": 12,
        "comment": "Jeans"
      }
    ]
  },
  "2025-01-13": {
    "transfers": [
      {
        "id": 81,
        "type": "green",
        "date": "13/01/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100066",
        "quantity": 19,
        "comment": "Sacs"
      },
      {
        "id": 82,
        "type": "orange",
        "date": "13/01/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100067",
        "quantity": 23,
        "comment": "Chaussures"
      },
      {
        "id": 83,
        "type": "blue",
        "date": "13/01/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100068",
        "quantity": 12,
        "comment": "Pantalons"
      },
      {
        "id": 84,
        "type": "green",
        "date": "13/01/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100069",
        "quantity": 28,
        "comment": "Chemises"
      }
    ]
  },
  "2025-01-14": {
    "transfers": [
      {
        "id": 85,
        "type": "yellow",
        "date": "14/01/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 86,
        "type": "green",
        "date": "14/01/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100070",
        "quantity": 16,
        "comment": "T-shirts"
      },
      {
        "id": 87,
        "type": "green",
        "date": "14/01/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100071",
        "quantity": 7,
        "comment": "Shorts"
      },
      {
        "id": 88,
        "type": "blue",
        "date": "14/01/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100072",
        "quantity": 16,
        "comment": "Tops"
      }
    ]
  },
  "2025-01-15": {
    "transfers": [
      {
        "id": 89,
        "type": "orange",
        "date": "15/01/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100073",
        "quantity": 29,
        "comment": "Robes"
      }
    ]
  },
  "2025-01-16": {
    "transfers": [
      {
        "id": 90,
        "type": "blue",
        "date": "16/01/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100074",
        "quantity": 24,
        "comment": "Jeans"
      }
    ]
  },
  "2025-01-17": {
    "transfers": [
      {
        "id": 91,
        "type": "green",
        "date": "17/01/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100075",
        "quantity": 20,
        "comment": "Pulls"
      }
    ]
  },
  "2025-01-18": {
    "transfers": [
      {
        "id": 92,
        "type": "yellow",
        "date": "18/01/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 93,
        "type": "green",
        "date": "18/01/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100076",
        "quantity": 16,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-01-19": {
    "transfers": [
      {
        "id": 94,
        "type": "orange",
        "date": "19/01/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 95,
        "type": "blue",
        "date": "19/01/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100077",
        "quantity": 27,
        "comment": "Pantalons"
      },
      {
        "id": 96,
        "type": "blue",
        "date": "19/01/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      }
    ]
  },
  "2025-01-20": {
    "transfers": [
      {
        "id": 97,
        "type": "blue",
        "date": "20/01/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100078",
        "quantity": 11,
        "comment": "Jeans"
      }
    ]
  },
  "2025-01-21": {
    "transfers": [
      {
        "id": 98,
        "type": "orange",
        "date": "21/01/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100079",
        "quantity": 14,
        "comment": "Shorts"
      },
      {
        "id": 99,
        "type": "orange",
        "date": "21/01/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100080",
        "quantity": 28,
        "comment": "Tops"
      },
      {
        "id": 100,
        "type": "orange",
        "date": "21/01/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100081",
        "quantity": 9,
        "comment": "Accessoires"
      },
      {
        "id": 101,
        "type": "orange",
        "date": "21/01/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100082",
        "quantity": 21,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-01-22": {
    "transfers": [
      {
        "id": 102,
        "type": "orange",
        "date": "22/01/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100083",
        "quantity": 12,
        "comment": "Chemises"
      },
      {
        "id": 103,
        "type": "blue",
        "date": "22/01/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100084",
        "quantity": 8,
        "comment": "Pulls"
      },
      {
        "id": 104,
        "type": "blue",
        "date": "22/01/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100085",
        "quantity": 29,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-01-23": {
    "transfers": [
      {
        "id": 105,
        "type": "orange",
        "date": "23/01/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 106,
        "type": "green",
        "date": "23/01/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100086",
        "quantity": 24,
        "comment": "Robes"
      },
      {
        "id": 107,
        "type": "green",
        "date": "23/01/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100087",
        "quantity": 27,
        "comment": "Vestes"
      }
    ]
  },
  "2025-01-24": {
    "transfers": [
      {
        "id": 108,
        "type": "blue",
        "date": "24/01/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 109,
        "type": "green",
        "date": "24/01/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100088",
        "quantity": 20,
        "comment": "T-shirts"
      },
      {
        "id": 110,
        "type": "orange",
        "date": "24/01/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100089",
        "quantity": 8,
        "comment": "Sacs"
      },
      {
        "id": 111,
        "type": "orange",
        "date": "24/01/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100090",
        "quantity": 7,
        "comment": "Chaussures"
      },
      {
        "id": 112,
        "type": "green",
        "date": "24/01/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100091",
        "quantity": 11,
        "comment": "Pulls"
      }
    ]
  },
  "2025-01-25": {
    "transfers": [
      {
        "id": 113,
        "type": "green",
        "date": "25/01/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100092",
        "quantity": 13,
        "comment": "Vestes"
      }
    ]
  },
  "2025-01-26": {
    "transfers": [
      {
        "id": 114,
        "type": "orange",
        "date": "26/01/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100093",
        "quantity": 17,
        "comment": "Tops"
      },
      {
        "id": 115,
        "type": "green",
        "date": "26/01/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100094",
        "quantity": 6,
        "comment": "Robes"
      },
      {
        "id": 116,
        "type": "blue",
        "date": "26/01/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 117,
        "type": "blue",
        "date": "26/01/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-01-27": {
    "transfers": [
      {
        "id": 118,
        "type": "yellow",
        "date": "27/01/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 119,
        "type": "blue",
        "date": "27/01/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 120,
        "type": "blue",
        "date": "27/01/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100095",
        "quantity": 9,
        "comment": "Robes"
      },
      {
        "id": 121,
        "type": "orange",
        "date": "27/01/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      }
    ]
  },
  "2025-01-28": {
    "transfers": [
      {
        "id": 122,
        "type": "blue",
        "date": "28/01/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100096",
        "quantity": 21,
        "comment": "Shorts"
      },
      {
        "id": 123,
        "type": "green",
        "date": "28/01/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 124,
        "type": "blue",
        "date": "28/01/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100097",
        "quantity": 9,
        "comment": "Shorts"
      },
      {
        "id": 125,
        "type": "yellow",
        "date": "28/01/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      }
    ]
  },
  "2025-01-29": {
    "transfers": [
      {
        "id": 126,
        "type": "orange",
        "date": "29/01/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100098",
        "quantity": 8,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-01-30": {
    "transfers": [
      {
        "id": 127,
        "type": "green",
        "date": "30/01/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100099",
        "quantity": 22,
        "comment": "Shorts"
      },
      {
        "id": 128,
        "type": "blue",
        "date": "30/01/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100100",
        "quantity": 16,
        "comment": "Chemises"
      }
    ]
  },
  "2025-01-31": {
    "transfers": [
      {
        "id": 129,
        "type": "blue",
        "date": "31/01/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100101",
        "quantity": 5,
        "comment": "Vestes"
      },
      {
        "id": 130,
        "type": "blue",
        "date": "31/01/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100102",
        "quantity": 17,
        "comment": "Vestes"
      },
      {
        "id": 131,
        "type": "green",
        "date": "31/01/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-02-01": {
    "transfers": [
      {
        "id": 132,
        "type": "yellow",
        "date": "01/02/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 133,
        "type": "green",
        "date": "01/02/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100103",
        "quantity": 8,
        "comment": "Accessoires"
      },
      {
        "id": 134,
        "type": "blue",
        "date": "01/02/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100104",
        "quantity": 25,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-02-02": {
    "transfers": [
      {
        "id": 135,
        "type": "blue",
        "date": "02/02/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100105",
        "quantity": 15,
        "comment": "Chemises"
      },
      {
        "id": 136,
        "type": "orange",
        "date": "02/02/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100106",
        "quantity": 30,
        "comment": "Chemises"
      }
    ]
  },
  "2025-02-03": {
    "transfers": [
      {
        "id": 137,
        "type": "green",
        "date": "03/02/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100107",
        "quantity": 15,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-02-04": {
    "transfers": [
      {
        "id": 138,
        "type": "orange",
        "date": "04/02/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100108",
        "quantity": 8,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-02-05": {
    "transfers": [
      {
        "id": 139,
        "type": "orange",
        "date": "05/02/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100109",
        "quantity": 10,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-02-06": {
    "transfers": [
      {
        "id": 140,
        "type": "blue",
        "date": "06/02/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100110",
        "quantity": 15,
        "comment": "Accessoires"
      },
      {
        "id": 141,
        "type": "orange",
        "date": "06/02/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100111",
        "quantity": 6,
        "comment": "Pulls"
      },
      {
        "id": 142,
        "type": "green",
        "date": "06/02/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100112",
        "quantity": 22,
        "comment": "Pantalons"
      },
      {
        "id": 143,
        "type": "blue",
        "date": "06/02/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100113",
        "quantity": 8,
        "comment": "Chaussures"
      },
      {
        "id": 144,
        "type": "orange",
        "date": "06/02/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100114",
        "quantity": 30,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-02-07": {
    "transfers": [
      {
        "id": 145,
        "type": "blue",
        "date": "07/02/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100115",
        "quantity": 26,
        "comment": "Vestes"
      },
      {
        "id": 146,
        "type": "blue",
        "date": "07/02/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100116",
        "quantity": 8,
        "comment": "Vestes"
      },
      {
        "id": 147,
        "type": "blue",
        "date": "07/02/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100117",
        "quantity": 11,
        "comment": "Shorts"
      }
    ]
  },
  "2025-02-08": {
    "transfers": [
      {
        "id": 148,
        "type": "orange",
        "date": "08/02/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100118",
        "quantity": 30,
        "comment": "Sacs"
      },
      {
        "id": 149,
        "type": "green",
        "date": "08/02/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 150,
        "type": "orange",
        "date": "08/02/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100119",
        "quantity": 16,
        "comment": "Jeans"
      }
    ]
  },
  "2025-02-09": {
    "transfers": [
      {
        "id": 151,
        "type": "blue",
        "date": "09/02/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 152,
        "type": "green",
        "date": "09/02/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100120",
        "quantity": 22,
        "comment": "Ceintures"
      },
      {
        "id": 153,
        "type": "green",
        "date": "09/02/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Agadir",
        "documentNumber": "100121",
        "quantity": 16,
        "comment": "Chemises"
      },
      {
        "id": 154,
        "type": "orange",
        "date": "09/02/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 155,
        "type": "green",
        "date": "09/02/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100122",
        "quantity": 7,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-02-10": {
    "transfers": [
      {
        "id": 156,
        "type": "green",
        "date": "10/02/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100123",
        "quantity": 28,
        "comment": "Tops"
      },
      {
        "id": 157,
        "type": "blue",
        "date": "10/02/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100124",
        "quantity": 27,
        "comment": "Pulls"
      },
      {
        "id": 158,
        "type": "blue",
        "date": "10/02/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 159,
        "type": "green",
        "date": "10/02/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100125",
        "quantity": 17,
        "comment": "Pantalons"
      },
      {
        "id": 160,
        "type": "yellow",
        "date": "10/02/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-02-11": {
    "transfers": [
      {
        "id": 161,
        "type": "green",
        "date": "11/02/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100126",
        "quantity": 13,
        "comment": "Chemises"
      },
      {
        "id": 162,
        "type": "green",
        "date": "11/02/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100127",
        "quantity": 10,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-02-12": {
    "transfers": [
      {
        "id": 163,
        "type": "blue",
        "date": "12/02/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100128",
        "quantity": 8,
        "comment": "Sacs"
      }
    ]
  },
  "2025-02-13": {
    "transfers": [
      {
        "id": 164,
        "type": "green",
        "date": "13/02/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100129",
        "quantity": 10,
        "comment": "Chemises"
      },
      {
        "id": 165,
        "type": "orange",
        "date": "13/02/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100130",
        "quantity": 5,
        "comment": "Tops"
      },
      {
        "id": 166,
        "type": "orange",
        "date": "13/02/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-02-14": {
    "transfers": [
      {
        "id": 167,
        "type": "orange",
        "date": "14/02/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100131",
        "quantity": 22,
        "comment": "Robes"
      },
      {
        "id": 168,
        "type": "green",
        "date": "14/02/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 169,
        "type": "blue",
        "date": "14/02/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 170,
        "type": "green",
        "date": "14/02/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100132",
        "quantity": 6,
        "comment": "Vestes"
      }
    ]
  },
  "2025-02-15": {
    "transfers": [
      {
        "id": 171,
        "type": "blue",
        "date": "15/02/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100133",
        "quantity": 29,
        "comment": "Chemises"
      }
    ]
  },
  "2025-02-16": {
    "transfers": [
      {
        "id": 172,
        "type": "green",
        "date": "16/02/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100134",
        "quantity": 26,
        "comment": "Ceintures"
      },
      {
        "id": 173,
        "type": "green",
        "date": "16/02/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100135",
        "quantity": 8,
        "comment": "Ceintures"
      },
      {
        "id": 174,
        "type": "orange",
        "date": "16/02/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100136",
        "quantity": 17,
        "comment": "Robes"
      }
    ]
  },
  "2025-02-17": {
    "transfers": [
      {
        "id": 175,
        "type": "green",
        "date": "17/02/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100137",
        "quantity": 20,
        "comment": "Shorts"
      },
      {
        "id": 176,
        "type": "orange",
        "date": "17/02/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100138",
        "quantity": 8,
        "comment": "Pulls"
      },
      {
        "id": 177,
        "type": "blue",
        "date": "17/02/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 178,
        "type": "blue",
        "date": "17/02/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 179,
        "type": "blue",
        "date": "17/02/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-02-18": {
    "transfers": [
      {
        "id": 180,
        "type": "orange",
        "date": "18/02/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100139",
        "quantity": 13,
        "comment": "Robes"
      },
      {
        "id": 181,
        "type": "blue",
        "date": "18/02/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100140",
        "quantity": 29,
        "comment": "Pulls"
      },
      {
        "id": 182,
        "type": "blue",
        "date": "18/02/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100141",
        "quantity": 17,
        "comment": "Chemises"
      }
    ]
  },
  "2025-02-19": {
    "transfers": [
      {
        "id": 183,
        "type": "green",
        "date": "19/02/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100142",
        "quantity": 5,
        "comment": "Pantalons"
      },
      {
        "id": 184,
        "type": "green",
        "date": "19/02/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 185,
        "type": "blue",
        "date": "19/02/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 186,
        "type": "orange",
        "date": "19/02/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100143",
        "quantity": 16,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-02-20": {
    "transfers": [
      {
        "id": 187,
        "type": "blue",
        "date": "20/02/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 188,
        "type": "green",
        "date": "20/02/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100144",
        "quantity": 6,
        "comment": "Pantalons"
      },
      {
        "id": 189,
        "type": "yellow",
        "date": "20/02/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-02-21": {
    "transfers": [
      {
        "id": 190,
        "type": "blue",
        "date": "21/02/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100145",
        "quantity": 15,
        "comment": "Tops"
      },
      {
        "id": 191,
        "type": "green",
        "date": "21/02/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-02-22": {
    "transfers": [
      {
        "id": 192,
        "type": "green",
        "date": "22/02/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100146",
        "quantity": 7,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-02-23": {
    "transfers": [
      {
        "id": 193,
        "type": "orange",
        "date": "23/02/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      }
    ]
  },
  "2025-02-24": {
    "transfers": [
      {
        "id": 194,
        "type": "blue",
        "date": "24/02/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100147",
        "quantity": 21,
        "comment": "Sacs"
      },
      {
        "id": 195,
        "type": "orange",
        "date": "24/02/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100148",
        "quantity": 12,
        "comment": "Jeans"
      }
    ]
  },
  "2025-02-25": {
    "transfers": [
      {
        "id": 196,
        "type": "yellow",
        "date": "25/02/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 197,
        "type": "yellow",
        "date": "25/02/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-02-26": {
    "transfers": [
      {
        "id": 198,
        "type": "blue",
        "date": "26/02/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100149",
        "quantity": 23,
        "comment": "Jeans"
      },
      {
        "id": 199,
        "type": "green",
        "date": "26/02/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100150",
        "quantity": 5,
        "comment": "Sacs"
      }
    ]
  },
  "2025-02-27": {
    "transfers": [
      {
        "id": 200,
        "type": "orange",
        "date": "27/02/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 201,
        "type": "blue",
        "date": "27/02/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100151",
        "quantity": 27,
        "comment": "Accessoires"
      },
      {
        "id": 202,
        "type": "orange",
        "date": "27/02/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100152",
        "quantity": 23,
        "comment": "Accessoires"
      },
      {
        "id": 203,
        "type": "blue",
        "date": "27/02/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100153",
        "quantity": 15,
        "comment": "Vestes"
      }
    ]
  },
  "2025-02-28": {
    "transfers": [
      {
        "id": 204,
        "type": "green",
        "date": "28/02/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 205,
        "type": "green",
        "date": "28/02/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100154",
        "quantity": 14,
        "comment": "Sacs"
      },
      {
        "id": 206,
        "type": "green",
        "date": "28/02/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 207,
        "type": "green",
        "date": "28/02/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      }
    ]
  },
  "2025-03-01": {
    "transfers": [
      {
        "id": 208,
        "type": "green",
        "date": "01/03/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100155",
        "quantity": 23,
        "comment": "Chemises"
      },
      {
        "id": 209,
        "type": "blue",
        "date": "01/03/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100156",
        "quantity": 15,
        "comment": "Robes"
      },
      {
        "id": 210,
        "type": "green",
        "date": "01/03/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100157",
        "quantity": 16,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-03-02": {
    "transfers": [
      {
        "id": 211,
        "type": "blue",
        "date": "02/03/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100158",
        "quantity": 19,
        "comment": "Shorts"
      },
      {
        "id": 212,
        "type": "green",
        "date": "02/03/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 213,
        "type": "orange",
        "date": "02/03/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100159",
        "quantity": 6,
        "comment": "Jeans"
      },
      {
        "id": 214,
        "type": "orange",
        "date": "02/03/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-03-03": {
    "transfers": [
      {
        "id": 215,
        "type": "green",
        "date": "03/03/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100160",
        "quantity": 8,
        "comment": "Shorts"
      }
    ]
  },
  "2025-03-04": {
    "transfers": [
      {
        "id": 216,
        "type": "blue",
        "date": "04/03/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100161",
        "quantity": 18,
        "comment": "Chaussures"
      },
      {
        "id": 217,
        "type": "orange",
        "date": "04/03/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100162",
        "quantity": 16,
        "comment": "Pantalons"
      },
      {
        "id": 218,
        "type": "blue",
        "date": "04/03/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100163",
        "quantity": 29,
        "comment": "Robes"
      }
    ]
  },
  "2025-03-05": {
    "transfers": [
      {
        "id": 219,
        "type": "green",
        "date": "05/03/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100164",
        "quantity": 9,
        "comment": "Ceintures"
      },
      {
        "id": 220,
        "type": "green",
        "date": "05/03/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100165",
        "quantity": 26,
        "comment": "Chemises"
      },
      {
        "id": 221,
        "type": "orange",
        "date": "05/03/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100166",
        "quantity": 26,
        "comment": "Tops"
      }
    ]
  },
  "2025-03-06": {
    "transfers": [
      {
        "id": 222,
        "type": "blue",
        "date": "06/03/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100167",
        "quantity": 17,
        "comment": "Ceintures"
      },
      {
        "id": 223,
        "type": "yellow",
        "date": "06/03/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 224,
        "type": "green",
        "date": "06/03/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100168",
        "quantity": 9,
        "comment": "Vestes"
      },
      {
        "id": 225,
        "type": "green",
        "date": "06/03/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 226,
        "type": "green",
        "date": "06/03/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100169",
        "quantity": 8,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-03-07": {
    "transfers": [
      {
        "id": 227,
        "type": "green",
        "date": "07/03/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100170",
        "quantity": 30,
        "comment": "Pulls"
      }
    ]
  },
  "2025-03-08": {
    "transfers": [
      {
        "id": 228,
        "type": "blue",
        "date": "08/03/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100171",
        "quantity": 30,
        "comment": "Jeans"
      },
      {
        "id": 229,
        "type": "green",
        "date": "08/03/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100172",
        "quantity": 10,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-03-09": {
    "transfers": [
      {
        "id": 230,
        "type": "orange",
        "date": "09/03/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100173",
        "quantity": 20,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-03-10": {
    "transfers": [
      {
        "id": 231,
        "type": "green",
        "date": "10/03/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-03-11": {
    "transfers": [
      {
        "id": 232,
        "type": "blue",
        "date": "11/03/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100174",
        "quantity": 28,
        "comment": "Robes"
      },
      {
        "id": 233,
        "type": "blue",
        "date": "11/03/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100175",
        "quantity": 19,
        "comment": "Pulls"
      },
      {
        "id": 234,
        "type": "blue",
        "date": "11/03/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100176",
        "quantity": 11,
        "comment": "Pulls"
      },
      {
        "id": 235,
        "type": "green",
        "date": "11/03/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      }
    ]
  },
  "2025-03-12": {
    "transfers": [
      {
        "id": 236,
        "type": "orange",
        "date": "12/03/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100177",
        "quantity": 29,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-03-13": {
    "transfers": [
      {
        "id": 237,
        "type": "green",
        "date": "13/03/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100178",
        "quantity": 23,
        "comment": "Jeans"
      },
      {
        "id": 238,
        "type": "orange",
        "date": "13/03/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100179",
        "quantity": 12,
        "comment": "Jeans"
      }
    ]
  },
  "2025-03-14": {
    "transfers": [
      {
        "id": 239,
        "type": "orange",
        "date": "14/03/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 240,
        "type": "yellow",
        "date": "14/03/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 241,
        "type": "green",
        "date": "14/03/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-03-15": {
    "transfers": [
      {
        "id": 242,
        "type": "orange",
        "date": "15/03/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 243,
        "type": "green",
        "date": "15/03/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100180",
        "quantity": 25,
        "comment": "Jeans"
      },
      {
        "id": 244,
        "type": "orange",
        "date": "15/03/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100181",
        "quantity": 29,
        "comment": "Chemises"
      },
      {
        "id": 245,
        "type": "blue",
        "date": "15/03/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100182",
        "quantity": 15,
        "comment": "Chemises"
      }
    ]
  },
  "2025-03-16": {
    "transfers": [
      {
        "id": 246,
        "type": "orange",
        "date": "16/03/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100183",
        "quantity": 20,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-03-17": {
    "transfers": [
      {
        "id": 247,
        "type": "yellow",
        "date": "17/03/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 248,
        "type": "green",
        "date": "17/03/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100184",
        "quantity": 22,
        "comment": "Jeans"
      },
      {
        "id": 249,
        "type": "orange",
        "date": "17/03/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100185",
        "quantity": 17,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-03-18": {
    "transfers": [
      {
        "id": 250,
        "type": "green",
        "date": "18/03/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100186",
        "quantity": 25,
        "comment": "Jeans"
      }
    ]
  },
  "2025-03-19": {
    "transfers": [
      {
        "id": 251,
        "type": "blue",
        "date": "19/03/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100187",
        "quantity": 15,
        "comment": "Shorts"
      },
      {
        "id": 252,
        "type": "orange",
        "date": "19/03/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100188",
        "quantity": 15,
        "comment": "Shorts"
      },
      {
        "id": 253,
        "type": "green",
        "date": "19/03/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100189",
        "quantity": 14,
        "comment": "Pantalons"
      },
      {
        "id": 254,
        "type": "blue",
        "date": "19/03/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100190",
        "quantity": 13,
        "comment": "Pulls"
      },
      {
        "id": 255,
        "type": "orange",
        "date": "19/03/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100191",
        "quantity": 10,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-03-20": {
    "transfers": [
      {
        "id": 256,
        "type": "orange",
        "date": "20/03/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100192",
        "quantity": 16,
        "comment": "Shorts"
      },
      {
        "id": 257,
        "type": "green",
        "date": "20/03/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100193",
        "quantity": 9,
        "comment": "Vestes"
      },
      {
        "id": 258,
        "type": "yellow",
        "date": "20/03/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 259,
        "type": "orange",
        "date": "20/03/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100194",
        "quantity": 29,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-03-21": {
    "transfers": [
      {
        "id": 260,
        "type": "blue",
        "date": "21/03/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100195",
        "quantity": 28,
        "comment": "Tops"
      },
      {
        "id": 261,
        "type": "green",
        "date": "21/03/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100196",
        "quantity": 12,
        "comment": "T-shirts"
      },
      {
        "id": 262,
        "type": "blue",
        "date": "21/03/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100197",
        "quantity": 19,
        "comment": "Vestes"
      }
    ]
  },
  "2025-03-22": {
    "transfers": [
      {
        "id": 263,
        "type": "green",
        "date": "22/03/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100198",
        "quantity": 16,
        "comment": "Jeans"
      },
      {
        "id": 264,
        "type": "blue",
        "date": "22/03/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100199",
        "quantity": 27,
        "comment": "Chaussures"
      },
      {
        "id": 265,
        "type": "orange",
        "date": "22/03/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100200",
        "quantity": 18,
        "comment": "Robes"
      },
      {
        "id": 266,
        "type": "orange",
        "date": "22/03/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100201",
        "quantity": 9,
        "comment": "Tops"
      },
      {
        "id": 267,
        "type": "green",
        "date": "22/03/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100202",
        "quantity": 7,
        "comment": "Shorts"
      }
    ]
  },
  "2025-03-23": {
    "transfers": [
      {
        "id": 268,
        "type": "green",
        "date": "23/03/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100203",
        "quantity": 11,
        "comment": "Vestes"
      },
      {
        "id": 269,
        "type": "green",
        "date": "23/03/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100204",
        "quantity": 23,
        "comment": "Robes"
      },
      {
        "id": 270,
        "type": "green",
        "date": "23/03/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100205",
        "quantity": 5,
        "comment": "Chaussures"
      },
      {
        "id": 271,
        "type": "green",
        "date": "23/03/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100206",
        "quantity": 27,
        "comment": "Tops"
      },
      {
        "id": 272,
        "type": "orange",
        "date": "23/03/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-03-24": {
    "transfers": [
      {
        "id": 273,
        "type": "blue",
        "date": "24/03/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100207",
        "quantity": 11,
        "comment": "Shorts"
      },
      {
        "id": 274,
        "type": "blue",
        "date": "24/03/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100208",
        "quantity": 20,
        "comment": "Jeans"
      }
    ]
  },
  "2025-03-25": {
    "transfers": [
      {
        "id": 275,
        "type": "blue",
        "date": "25/03/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100209",
        "quantity": 11,
        "comment": "Pulls"
      }
    ]
  },
  "2025-03-26": {
    "transfers": [
      {
        "id": 276,
        "type": "blue",
        "date": "26/03/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 277,
        "type": "orange",
        "date": "26/03/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Agadir",
        "documentNumber": "100210",
        "quantity": 6,
        "comment": "Sacs"
      },
      {
        "id": 278,
        "type": "orange",
        "date": "26/03/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100211",
        "quantity": 16,
        "comment": "Shorts"
      },
      {
        "id": 279,
        "type": "green",
        "date": "26/03/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100212",
        "quantity": 9,
        "comment": "Vestes"
      },
      {
        "id": 280,
        "type": "yellow",
        "date": "26/03/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-03-27": {
    "transfers": [
      {
        "id": 281,
        "type": "orange",
        "date": "27/03/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 282,
        "type": "blue",
        "date": "27/03/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100213",
        "quantity": 24,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-03-28": {
    "transfers": [
      {
        "id": 283,
        "type": "green",
        "date": "28/03/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 284,
        "type": "orange",
        "date": "28/03/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100214",
        "quantity": 21,
        "comment": "Shorts"
      },
      {
        "id": 285,
        "type": "green",
        "date": "28/03/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100215",
        "quantity": 23,
        "comment": "Tops"
      }
    ]
  },
  "2025-03-29": {
    "transfers": [
      {
        "id": 286,
        "type": "green",
        "date": "29/03/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100216",
        "quantity": 22,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-03-30": {
    "transfers": [
      {
        "id": 287,
        "type": "green",
        "date": "30/03/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100217",
        "quantity": 6,
        "comment": "Pulls"
      },
      {
        "id": 288,
        "type": "blue",
        "date": "30/03/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100218",
        "quantity": 13,
        "comment": "Robes"
      },
      {
        "id": 289,
        "type": "green",
        "date": "30/03/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100219",
        "quantity": 6,
        "comment": "T-shirts"
      },
      {
        "id": 290,
        "type": "blue",
        "date": "30/03/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100220",
        "quantity": 13,
        "comment": "Shorts"
      },
      {
        "id": 291,
        "type": "orange",
        "date": "30/03/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100221",
        "quantity": 26,
        "comment": "Shorts"
      }
    ]
  },
  "2025-03-31": {
    "transfers": [
      {
        "id": 292,
        "type": "orange",
        "date": "31/03/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 293,
        "type": "green",
        "date": "31/03/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100222",
        "quantity": 26,
        "comment": "Pulls"
      },
      {
        "id": 294,
        "type": "orange",
        "date": "31/03/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100223",
        "quantity": 25,
        "comment": "Accessoires"
      },
      {
        "id": 295,
        "type": "green",
        "date": "31/03/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 296,
        "type": "blue",
        "date": "31/03/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-04-01": {
    "transfers": [
      {
        "id": 297,
        "type": "blue",
        "date": "01/04/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 298,
        "type": "blue",
        "date": "01/04/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100224",
        "quantity": 30,
        "comment": "Pantalons"
      },
      {
        "id": 299,
        "type": "orange",
        "date": "01/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100225",
        "quantity": 10,
        "comment": "Ceintures"
      },
      {
        "id": 300,
        "type": "blue",
        "date": "01/04/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100226",
        "quantity": 28,
        "comment": "Shorts"
      },
      {
        "id": 301,
        "type": "orange",
        "date": "01/04/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100227",
        "quantity": 18,
        "comment": "Shorts"
      }
    ]
  },
  "2025-04-02": {
    "transfers": [
      {
        "id": 302,
        "type": "orange",
        "date": "02/04/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100228",
        "quantity": 27,
        "comment": "Jeans"
      }
    ]
  },
  "2025-04-03": {
    "transfers": [
      {
        "id": 303,
        "type": "green",
        "date": "03/04/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 304,
        "type": "green",
        "date": "03/04/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100229",
        "quantity": 9,
        "comment": "Vestes"
      },
      {
        "id": 305,
        "type": "orange",
        "date": "03/04/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100230",
        "quantity": 8,
        "comment": "Sacs"
      }
    ]
  },
  "2025-04-04": {
    "transfers": [
      {
        "id": 306,
        "type": "blue",
        "date": "04/04/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100231",
        "quantity": 18,
        "comment": "Robes"
      }
    ]
  },
  "2025-04-05": {
    "transfers": [
      {
        "id": 307,
        "type": "blue",
        "date": "05/04/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100232",
        "quantity": 29,
        "comment": "Sacs"
      }
    ]
  },
  "2025-04-06": {
    "transfers": [
      {
        "id": 308,
        "type": "blue",
        "date": "06/04/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100233",
        "quantity": 15,
        "comment": "Vestes"
      },
      {
        "id": 309,
        "type": "orange",
        "date": "06/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100234",
        "quantity": 12,
        "comment": "Jeans"
      },
      {
        "id": 310,
        "type": "green",
        "date": "06/04/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100235",
        "quantity": 24,
        "comment": "Robes"
      },
      {
        "id": 311,
        "type": "blue",
        "date": "06/04/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100236",
        "quantity": 22,
        "comment": "Robes"
      }
    ]
  },
  "2025-04-07": {
    "transfers": [
      {
        "id": 312,
        "type": "blue",
        "date": "07/04/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100237",
        "quantity": 9,
        "comment": "Chemises"
      }
    ]
  },
  "2025-04-08": {
    "transfers": [
      {
        "id": 313,
        "type": "blue",
        "date": "08/04/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100238",
        "quantity": 11,
        "comment": "Chemises"
      },
      {
        "id": 314,
        "type": "orange",
        "date": "08/04/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100239",
        "quantity": 18,
        "comment": "Vestes"
      },
      {
        "id": 315,
        "type": "green",
        "date": "08/04/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100240",
        "quantity": 26,
        "comment": "Chaussures"
      },
      {
        "id": 316,
        "type": "orange",
        "date": "08/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100241",
        "quantity": 6,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-04-09": {
    "transfers": [
      {
        "id": 317,
        "type": "orange",
        "date": "09/04/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100242",
        "quantity": 29,
        "comment": "Tops"
      }
    ]
  },
  "2025-04-10": {
    "transfers": [
      {
        "id": 318,
        "type": "green",
        "date": "10/04/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100243",
        "quantity": 5,
        "comment": "Accessoires"
      },
      {
        "id": 319,
        "type": "orange",
        "date": "10/04/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100244",
        "quantity": 19,
        "comment": "Shorts"
      },
      {
        "id": 320,
        "type": "blue",
        "date": "10/04/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      }
    ]
  },
  "2025-04-11": {
    "transfers": [
      {
        "id": 321,
        "type": "orange",
        "date": "11/04/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100245",
        "quantity": 8,
        "comment": "Chemises"
      },
      {
        "id": 322,
        "type": "orange",
        "date": "11/04/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      }
    ]
  },
  "2025-04-12": {
    "transfers": [
      {
        "id": 323,
        "type": "blue",
        "date": "12/04/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100246",
        "quantity": 16,
        "comment": "Chemises"
      },
      {
        "id": 324,
        "type": "green",
        "date": "12/04/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100247",
        "quantity": 18,
        "comment": "Pulls"
      },
      {
        "id": 325,
        "type": "orange",
        "date": "12/04/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100248",
        "quantity": 22,
        "comment": "Robes"
      },
      {
        "id": 326,
        "type": "blue",
        "date": "12/04/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-04-13": {
    "transfers": [
      {
        "id": 327,
        "type": "orange",
        "date": "13/04/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 328,
        "type": "green",
        "date": "13/04/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100249",
        "quantity": 6,
        "comment": "Shorts"
      }
    ]
  },
  "2025-04-14": {
    "transfers": [
      {
        "id": 329,
        "type": "blue",
        "date": "14/04/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100250",
        "quantity": 23,
        "comment": "Accessoires"
      },
      {
        "id": 330,
        "type": "orange",
        "date": "14/04/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100251",
        "quantity": 30,
        "comment": "Tops"
      },
      {
        "id": 331,
        "type": "orange",
        "date": "14/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100252",
        "quantity": 19,
        "comment": "Robes"
      },
      {
        "id": 332,
        "type": "orange",
        "date": "14/04/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100253",
        "quantity": 18,
        "comment": "Sacs"
      }
    ]
  },
  "2025-04-15": {
    "transfers": [
      {
        "id": 333,
        "type": "orange",
        "date": "15/04/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 334,
        "type": "green",
        "date": "15/04/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-04-16": {
    "transfers": [
      {
        "id": 335,
        "type": "orange",
        "date": "16/04/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100254",
        "quantity": 30,
        "comment": "Robes"
      },
      {
        "id": 336,
        "type": "green",
        "date": "16/04/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100255",
        "quantity": 10,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-04-17": {
    "transfers": [
      {
        "id": 337,
        "type": "orange",
        "date": "17/04/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100256",
        "quantity": 23,
        "comment": "Jeans"
      },
      {
        "id": 338,
        "type": "blue",
        "date": "17/04/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100257",
        "quantity": 10,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-04-18": {
    "transfers": [
      {
        "id": 339,
        "type": "orange",
        "date": "18/04/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100258",
        "quantity": 21,
        "comment": "Sacs"
      },
      {
        "id": 340,
        "type": "orange",
        "date": "18/04/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100259",
        "quantity": 6,
        "comment": "Robes"
      },
      {
        "id": 341,
        "type": "blue",
        "date": "18/04/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100260",
        "quantity": 14,
        "comment": "Chemises"
      },
      {
        "id": 342,
        "type": "blue",
        "date": "18/04/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-04-19": {
    "transfers": [
      {
        "id": 343,
        "type": "yellow",
        "date": "19/04/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 344,
        "type": "orange",
        "date": "19/04/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100261",
        "quantity": 8,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-04-20": {
    "transfers": [
      {
        "id": 345,
        "type": "blue",
        "date": "20/04/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100262",
        "quantity": 5,
        "comment": "Tops"
      },
      {
        "id": 346,
        "type": "blue",
        "date": "20/04/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100263",
        "quantity": 11,
        "comment": "Sacs"
      },
      {
        "id": 347,
        "type": "green",
        "date": "20/04/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100264",
        "quantity": 23,
        "comment": "Ceintures"
      },
      {
        "id": 348,
        "type": "green",
        "date": "20/04/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100265",
        "quantity": 29,
        "comment": "Vestes"
      },
      {
        "id": 349,
        "type": "green",
        "date": "20/04/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100266",
        "quantity": 25,
        "comment": "Shorts"
      }
    ]
  },
  "2025-04-21": {
    "transfers": [
      {
        "id": 350,
        "type": "orange",
        "date": "21/04/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Tanger",
        "documentNumber": "100267",
        "quantity": 29,
        "comment": "Accessoires"
      },
      {
        "id": 351,
        "type": "orange",
        "date": "21/04/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 352,
        "type": "green",
        "date": "21/04/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100268",
        "quantity": 19,
        "comment": "Ceintures"
      },
      {
        "id": 353,
        "type": "orange",
        "date": "21/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100269",
        "quantity": 22,
        "comment": "Chemises"
      }
    ]
  },
  "2025-04-22": {
    "transfers": [
      {
        "id": 354,
        "type": "orange",
        "date": "22/04/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 355,
        "type": "orange",
        "date": "22/04/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100270",
        "quantity": 15,
        "comment": "Accessoires"
      },
      {
        "id": 356,
        "type": "green",
        "date": "22/04/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100271",
        "quantity": 17,
        "comment": "Vestes"
      },
      {
        "id": 357,
        "type": "green",
        "date": "22/04/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      }
    ]
  },
  "2025-04-23": {
    "transfers": [
      {
        "id": 358,
        "type": "blue",
        "date": "23/04/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 359,
        "type": "blue",
        "date": "23/04/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 360,
        "type": "orange",
        "date": "23/04/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Agadir",
        "documentNumber": "100272",
        "quantity": 18,
        "comment": "Chemises"
      },
      {
        "id": 361,
        "type": "blue",
        "date": "23/04/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 362,
        "type": "green",
        "date": "23/04/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-04-24": {
    "transfers": [
      {
        "id": 363,
        "type": "orange",
        "date": "24/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100273",
        "quantity": 23,
        "comment": "Pulls"
      },
      {
        "id": 364,
        "type": "orange",
        "date": "24/04/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100274",
        "quantity": 30,
        "comment": "Accessoires"
      },
      {
        "id": 365,
        "type": "orange",
        "date": "24/04/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100275",
        "quantity": 10,
        "comment": "Shorts"
      },
      {
        "id": 366,
        "type": "blue",
        "date": "24/04/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 367,
        "type": "green",
        "date": "24/04/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-04-25": {
    "transfers": [
      {
        "id": 368,
        "type": "green",
        "date": "25/04/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100276",
        "quantity": 24,
        "comment": "T-shirts"
      },
      {
        "id": 369,
        "type": "blue",
        "date": "25/04/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100277",
        "quantity": 25,
        "comment": "Robes"
      },
      {
        "id": 370,
        "type": "orange",
        "date": "25/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100278",
        "quantity": 19,
        "comment": "Jeans"
      },
      {
        "id": 371,
        "type": "blue",
        "date": "25/04/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100279",
        "quantity": 27,
        "comment": "Robes"
      },
      {
        "id": 372,
        "type": "green",
        "date": "25/04/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100280",
        "quantity": 23,
        "comment": "Robes"
      }
    ]
  },
  "2025-04-26": {
    "transfers": [
      {
        "id": 373,
        "type": "blue",
        "date": "26/04/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100281",
        "quantity": 24,
        "comment": "Sacs"
      },
      {
        "id": 374,
        "type": "orange",
        "date": "26/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100282",
        "quantity": 30,
        "comment": "Shorts"
      },
      {
        "id": 375,
        "type": "green",
        "date": "26/04/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100283",
        "quantity": 25,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-04-27": {
    "transfers": [
      {
        "id": 376,
        "type": "blue",
        "date": "27/04/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100284",
        "quantity": 20,
        "comment": "T-shirts"
      },
      {
        "id": 377,
        "type": "orange",
        "date": "27/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100285",
        "quantity": 26,
        "comment": "Chemises"
      },
      {
        "id": 378,
        "type": "blue",
        "date": "27/04/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100286",
        "quantity": 9,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-04-28": {
    "transfers": [
      {
        "id": 379,
        "type": "orange",
        "date": "28/04/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100287",
        "quantity": 12,
        "comment": "Pulls"
      },
      {
        "id": 380,
        "type": "orange",
        "date": "28/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100288",
        "quantity": 27,
        "comment": "Chemises"
      },
      {
        "id": 381,
        "type": "orange",
        "date": "28/04/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100289",
        "quantity": 18,
        "comment": "Accessoires"
      },
      {
        "id": 382,
        "type": "yellow",
        "date": "28/04/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 383,
        "type": "green",
        "date": "28/04/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Tanger",
        "documentNumber": "100290",
        "quantity": 19,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-04-29": {
    "transfers": [
      {
        "id": 384,
        "type": "orange",
        "date": "29/04/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100291",
        "quantity": 27,
        "comment": "Tops"
      },
      {
        "id": 385,
        "type": "orange",
        "date": "29/04/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100292",
        "quantity": 21,
        "comment": "Pulls"
      },
      {
        "id": 386,
        "type": "blue",
        "date": "29/04/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100293",
        "quantity": 15,
        "comment": "Tops"
      }
    ]
  },
  "2025-04-30": {
    "transfers": [
      {
        "id": 387,
        "type": "orange",
        "date": "30/04/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100294",
        "quantity": 5,
        "comment": "Sacs"
      },
      {
        "id": 388,
        "type": "green",
        "date": "30/04/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100295",
        "quantity": 24,
        "comment": "Vestes"
      }
    ]
  },
  "2025-05-01": {
    "transfers": [
      {
        "id": 389,
        "type": "orange",
        "date": "01/05/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100296",
        "quantity": 11,
        "comment": "Robes"
      },
      {
        "id": 390,
        "type": "blue",
        "date": "01/05/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100297",
        "quantity": 27,
        "comment": "Pulls"
      },
      {
        "id": 391,
        "type": "green",
        "date": "01/05/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100298",
        "quantity": 20,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-05-02": {
    "transfers": [
      {
        "id": 392,
        "type": "blue",
        "date": "02/05/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100299",
        "quantity": 23,
        "comment": "Robes"
      }
    ]
  },
  "2025-05-03": {
    "transfers": [
      {
        "id": 393,
        "type": "blue",
        "date": "03/05/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      }
    ]
  },
  "2025-05-04": {
    "transfers": [
      {
        "id": 394,
        "type": "blue",
        "date": "04/05/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100300",
        "quantity": 16,
        "comment": "Tops"
      },
      {
        "id": 395,
        "type": "blue",
        "date": "04/05/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 396,
        "type": "blue",
        "date": "04/05/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100301",
        "quantity": 14,
        "comment": "Pantalons"
      },
      {
        "id": 397,
        "type": "orange",
        "date": "04/05/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100302",
        "quantity": 12,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-05-05": {
    "transfers": [
      {
        "id": 398,
        "type": "blue",
        "date": "05/05/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 399,
        "type": "blue",
        "date": "05/05/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100303",
        "quantity": 5,
        "comment": "Chaussures"
      },
      {
        "id": 400,
        "type": "blue",
        "date": "05/05/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100304",
        "quantity": 6,
        "comment": "Accessoires"
      },
      {
        "id": 401,
        "type": "blue",
        "date": "05/05/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-05-06": {
    "transfers": [
      {
        "id": 402,
        "type": "blue",
        "date": "06/05/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100305",
        "quantity": 30,
        "comment": "T-shirts"
      },
      {
        "id": 403,
        "type": "green",
        "date": "06/05/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100306",
        "quantity": 10,
        "comment": "Robes"
      },
      {
        "id": 404,
        "type": "orange",
        "date": "06/05/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100307",
        "quantity": 21,
        "comment": "Chemises"
      }
    ]
  },
  "2025-05-07": {
    "transfers": [
      {
        "id": 405,
        "type": "orange",
        "date": "07/05/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100308",
        "quantity": 10,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-05-08": {
    "transfers": [
      {
        "id": 406,
        "type": "orange",
        "date": "08/05/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Agadir",
        "documentNumber": "100309",
        "quantity": 19,
        "comment": "Robes"
      },
      {
        "id": 407,
        "type": "green",
        "date": "08/05/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100310",
        "quantity": 8,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-05-09": {
    "transfers": [
      {
        "id": 408,
        "type": "green",
        "date": "09/05/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100311",
        "quantity": 12,
        "comment": "Chemises"
      }
    ]
  },
  "2025-05-10": {
    "transfers": [
      {
        "id": 409,
        "type": "blue",
        "date": "10/05/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100312",
        "quantity": 29,
        "comment": "Vestes"
      },
      {
        "id": 410,
        "type": "green",
        "date": "10/05/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100313",
        "quantity": 30,
        "comment": "Pantalons"
      },
      {
        "id": 411,
        "type": "orange",
        "date": "10/05/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100314",
        "quantity": 15,
        "comment": "Tops"
      }
    ]
  },
  "2025-05-11": {
    "transfers": [
      {
        "id": 412,
        "type": "orange",
        "date": "11/05/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100315",
        "quantity": 17,
        "comment": "Pantalons"
      },
      {
        "id": 413,
        "type": "orange",
        "date": "11/05/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 414,
        "type": "green",
        "date": "11/05/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100316",
        "quantity": 20,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-05-12": {
    "transfers": [
      {
        "id": 415,
        "type": "orange",
        "date": "12/05/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 416,
        "type": "blue",
        "date": "12/05/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100317",
        "quantity": 10,
        "comment": "Accessoires"
      },
      {
        "id": 417,
        "type": "yellow",
        "date": "12/05/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-05-13": {
    "transfers": [
      {
        "id": 418,
        "type": "yellow",
        "date": "13/05/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 419,
        "type": "blue",
        "date": "13/05/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 420,
        "type": "orange",
        "date": "13/05/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100318",
        "quantity": 14,
        "comment": "T-shirts"
      },
      {
        "id": 421,
        "type": "green",
        "date": "13/05/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100319",
        "quantity": 10,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-05-14": {
    "transfers": [
      {
        "id": 422,
        "type": "green",
        "date": "14/05/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100320",
        "quantity": 16,
        "comment": "Shorts"
      }
    ]
  },
  "2025-05-15": {
    "transfers": [
      {
        "id": 423,
        "type": "orange",
        "date": "15/05/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-05-16": {
    "transfers": [
      {
        "id": 424,
        "type": "orange",
        "date": "16/05/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100321",
        "quantity": 25,
        "comment": "Pantalons"
      },
      {
        "id": 425,
        "type": "orange",
        "date": "16/05/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100322",
        "quantity": 10,
        "comment": "Sacs"
      },
      {
        "id": 426,
        "type": "green",
        "date": "16/05/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100323",
        "quantity": 26,
        "comment": "Chemises"
      }
    ]
  },
  "2025-05-17": {
    "transfers": [
      {
        "id": 427,
        "type": "orange",
        "date": "17/05/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100324",
        "quantity": 7,
        "comment": "Accessoires"
      },
      {
        "id": 428,
        "type": "green",
        "date": "17/05/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100325",
        "quantity": 22,
        "comment": "Pulls"
      },
      {
        "id": 429,
        "type": "orange",
        "date": "17/05/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100326",
        "quantity": 14,
        "comment": "Chemises"
      }
    ]
  },
  "2025-05-18": {
    "transfers": [
      {
        "id": 430,
        "type": "orange",
        "date": "18/05/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100327",
        "quantity": 26,
        "comment": "T-shirts"
      },
      {
        "id": 431,
        "type": "green",
        "date": "18/05/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 432,
        "type": "blue",
        "date": "18/05/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100328",
        "quantity": 21,
        "comment": "Chemises"
      }
    ]
  },
  "2025-05-19": {
    "transfers": [
      {
        "id": 433,
        "type": "orange",
        "date": "19/05/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      }
    ]
  },
  "2025-05-20": {
    "transfers": [
      {
        "id": 434,
        "type": "green",
        "date": "20/05/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100329",
        "quantity": 19,
        "comment": "Pulls"
      }
    ]
  },
  "2025-05-21": {
    "transfers": [
      {
        "id": 435,
        "type": "green",
        "date": "21/05/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100330",
        "quantity": 10,
        "comment": "Pantalons"
      },
      {
        "id": 436,
        "type": "yellow",
        "date": "21/05/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-05-22": {
    "transfers": [
      {
        "id": 437,
        "type": "green",
        "date": "22/05/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100331",
        "quantity": 19,
        "comment": "Pulls"
      },
      {
        "id": 438,
        "type": "blue",
        "date": "22/05/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100332",
        "quantity": 15,
        "comment": "Robes"
      },
      {
        "id": 439,
        "type": "green",
        "date": "22/05/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-05-23": {
    "transfers": [
      {
        "id": 440,
        "type": "orange",
        "date": "23/05/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100333",
        "quantity": 23,
        "comment": "Accessoires"
      },
      {
        "id": 441,
        "type": "orange",
        "date": "23/05/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100334",
        "quantity": 10,
        "comment": "Ceintures"
      },
      {
        "id": 442,
        "type": "green",
        "date": "23/05/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100335",
        "quantity": 6,
        "comment": "Pantalons"
      },
      {
        "id": 443,
        "type": "green",
        "date": "23/05/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100336",
        "quantity": 15,
        "comment": "Shorts"
      }
    ]
  },
  "2025-05-24": {
    "transfers": [
      {
        "id": 444,
        "type": "orange",
        "date": "24/05/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100337",
        "quantity": 23,
        "comment": "Robes"
      }
    ]
  },
  "2025-05-25": {
    "transfers": [
      {
        "id": 445,
        "type": "orange",
        "date": "25/05/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 446,
        "type": "orange",
        "date": "25/05/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100338",
        "quantity": 16,
        "comment": "Chaussures"
      },
      {
        "id": 447,
        "type": "green",
        "date": "25/05/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 448,
        "type": "orange",
        "date": "25/05/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100339",
        "quantity": 23,
        "comment": "Vestes"
      }
    ]
  },
  "2025-05-26": {
    "transfers": [
      {
        "id": 449,
        "type": "green",
        "date": "26/05/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100340",
        "quantity": 18,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-05-27": {
    "transfers": [
      {
        "id": 450,
        "type": "blue",
        "date": "27/05/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100341",
        "quantity": 20,
        "comment": "Robes"
      },
      {
        "id": 451,
        "type": "blue",
        "date": "27/05/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100342",
        "quantity": 26,
        "comment": "Chemises"
      }
    ]
  },
  "2025-05-28": {
    "transfers": [
      {
        "id": 452,
        "type": "green",
        "date": "28/05/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100343",
        "quantity": 30,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-05-29": {
    "transfers": [
      {
        "id": 453,
        "type": "blue",
        "date": "29/05/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100344",
        "quantity": 5,
        "comment": "Tops"
      },
      {
        "id": 454,
        "type": "orange",
        "date": "29/05/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 455,
        "type": "orange",
        "date": "29/05/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100345",
        "quantity": 21,
        "comment": "T-shirts"
      },
      {
        "id": 456,
        "type": "blue",
        "date": "29/05/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100346",
        "quantity": 24,
        "comment": "Sacs"
      }
    ]
  },
  "2025-05-30": {
    "transfers": [
      {
        "id": 457,
        "type": "orange",
        "date": "30/05/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 458,
        "type": "blue",
        "date": "30/05/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100347",
        "quantity": 13,
        "comment": "T-shirts"
      },
      {
        "id": 459,
        "type": "blue",
        "date": "30/05/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 460,
        "type": "green",
        "date": "30/05/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100348",
        "quantity": 18,
        "comment": "Tops"
      },
      {
        "id": 461,
        "type": "blue",
        "date": "30/05/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100349",
        "quantity": 15,
        "comment": "Jeans"
      }
    ]
  },
  "2025-05-31": {
    "transfers": [
      {
        "id": 462,
        "type": "green",
        "date": "31/05/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100350",
        "quantity": 16,
        "comment": "Robes"
      },
      {
        "id": 463,
        "type": "green",
        "date": "31/05/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100351",
        "quantity": 15,
        "comment": "Tops"
      },
      {
        "id": 464,
        "type": "orange",
        "date": "31/05/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100352",
        "quantity": 23,
        "comment": "Robes"
      }
    ]
  },
  "2025-06-01": {
    "transfers": [
      {
        "id": 465,
        "type": "green",
        "date": "01/06/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100353",
        "quantity": 8,
        "comment": "Jeans"
      },
      {
        "id": 466,
        "type": "green",
        "date": "01/06/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-06-02": {
    "transfers": [
      {
        "id": 467,
        "type": "orange",
        "date": "02/06/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100354",
        "quantity": 30,
        "comment": "T-shirts"
      },
      {
        "id": 468,
        "type": "blue",
        "date": "02/06/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 469,
        "type": "blue",
        "date": "02/06/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100355",
        "quantity": 30,
        "comment": "Tops"
      },
      {
        "id": 470,
        "type": "blue",
        "date": "02/06/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100356",
        "quantity": 19,
        "comment": "Chaussures"
      },
      {
        "id": 471,
        "type": "blue",
        "date": "02/06/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100357",
        "quantity": 11,
        "comment": "Pulls"
      }
    ]
  },
  "2025-06-03": {
    "transfers": [
      {
        "id": 472,
        "type": "blue",
        "date": "03/06/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 473,
        "type": "orange",
        "date": "03/06/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 474,
        "type": "blue",
        "date": "03/06/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100358",
        "quantity": 16,
        "comment": "Chemises"
      },
      {
        "id": 475,
        "type": "orange",
        "date": "03/06/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100359",
        "quantity": 8,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-06-04": {
    "transfers": [
      {
        "id": 476,
        "type": "blue",
        "date": "04/06/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100360",
        "quantity": 21,
        "comment": "Jeans"
      }
    ]
  },
  "2025-06-05": {
    "transfers": [
      {
        "id": 477,
        "type": "orange",
        "date": "05/06/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100361",
        "quantity": 9,
        "comment": "Vestes"
      },
      {
        "id": 478,
        "type": "green",
        "date": "05/06/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100362",
        "quantity": 6,
        "comment": "T-shirts"
      },
      {
        "id": 479,
        "type": "green",
        "date": "05/06/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 480,
        "type": "orange",
        "date": "05/06/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100363",
        "quantity": 18,
        "comment": "T-shirts"
      },
      {
        "id": 481,
        "type": "blue",
        "date": "05/06/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100364",
        "quantity": 28,
        "comment": "Tops"
      }
    ]
  },
  "2025-06-06": {
    "transfers": [
      {
        "id": 482,
        "type": "yellow",
        "date": "06/06/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-06-07": {
    "transfers": [
      {
        "id": 483,
        "type": "green",
        "date": "07/06/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 484,
        "type": "yellow",
        "date": "07/06/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 485,
        "type": "green",
        "date": "07/06/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100365",
        "quantity": 20,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-06-08": {
    "transfers": [
      {
        "id": 486,
        "type": "blue",
        "date": "08/06/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100366",
        "quantity": 6,
        "comment": "Pulls"
      },
      {
        "id": 487,
        "type": "orange",
        "date": "08/06/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100367",
        "quantity": 28,
        "comment": "Sacs"
      },
      {
        "id": 488,
        "type": "green",
        "date": "08/06/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 489,
        "type": "green",
        "date": "08/06/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100368",
        "quantity": 27,
        "comment": "Vestes"
      }
    ]
  },
  "2025-06-09": {
    "transfers": [
      {
        "id": 490,
        "type": "orange",
        "date": "09/06/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100369",
        "quantity": 7,
        "comment": "Shorts"
      },
      {
        "id": 491,
        "type": "green",
        "date": "09/06/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 492,
        "type": "blue",
        "date": "09/06/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100370",
        "quantity": 19,
        "comment": "Vestes"
      },
      {
        "id": 493,
        "type": "green",
        "date": "09/06/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100371",
        "quantity": 29,
        "comment": "Vestes"
      }
    ]
  },
  "2025-06-10": {
    "transfers": [
      {
        "id": 494,
        "type": "green",
        "date": "10/06/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100372",
        "quantity": 26,
        "comment": "Vestes"
      },
      {
        "id": 495,
        "type": "yellow",
        "date": "10/06/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-06-11": {
    "transfers": [
      {
        "id": 496,
        "type": "blue",
        "date": "11/06/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100373",
        "quantity": 11,
        "comment": "Chemises"
      },
      {
        "id": 497,
        "type": "blue",
        "date": "11/06/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 498,
        "type": "blue",
        "date": "11/06/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100374",
        "quantity": 18,
        "comment": "Robes"
      }
    ]
  },
  "2025-06-12": {
    "transfers": [
      {
        "id": 499,
        "type": "orange",
        "date": "12/06/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100375",
        "quantity": 19,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-06-13": {
    "transfers": [
      {
        "id": 500,
        "type": "green",
        "date": "13/06/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100376",
        "quantity": 9,
        "comment": "Vestes"
      },
      {
        "id": 501,
        "type": "green",
        "date": "13/06/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100377",
        "quantity": 7,
        "comment": "Jeans"
      },
      {
        "id": 502,
        "type": "orange",
        "date": "13/06/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100378",
        "quantity": 10,
        "comment": "Pantalons"
      },
      {
        "id": 503,
        "type": "orange",
        "date": "13/06/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100379",
        "quantity": 17,
        "comment": "Vestes"
      },
      {
        "id": 504,
        "type": "orange",
        "date": "13/06/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100380",
        "quantity": 18,
        "comment": "Robes"
      }
    ]
  },
  "2025-06-14": {
    "transfers": [
      {
        "id": 505,
        "type": "orange",
        "date": "14/06/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100381",
        "quantity": 27,
        "comment": "Vestes"
      },
      {
        "id": 506,
        "type": "green",
        "date": "14/06/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100382",
        "quantity": 25,
        "comment": "Pulls"
      },
      {
        "id": 507,
        "type": "blue",
        "date": "14/06/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 508,
        "type": "orange",
        "date": "14/06/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100383",
        "quantity": 29,
        "comment": "Sacs"
      }
    ]
  },
  "2025-06-15": {
    "transfers": [
      {
        "id": 509,
        "type": "green",
        "date": "15/06/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100384",
        "quantity": 19,
        "comment": "Ceintures"
      },
      {
        "id": 510,
        "type": "green",
        "date": "15/06/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100385",
        "quantity": 27,
        "comment": "Tops"
      },
      {
        "id": 511,
        "type": "green",
        "date": "15/06/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100386",
        "quantity": 24,
        "comment": "Sacs"
      },
      {
        "id": 512,
        "type": "orange",
        "date": "15/06/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 513,
        "type": "blue",
        "date": "15/06/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100387",
        "quantity": 16,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-06-16": {
    "transfers": [
      {
        "id": 514,
        "type": "yellow",
        "date": "16/06/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-06-17": {
    "transfers": [
      {
        "id": 515,
        "type": "green",
        "date": "17/06/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100388",
        "quantity": 13,
        "comment": "Chemises"
      },
      {
        "id": 516,
        "type": "orange",
        "date": "17/06/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100389",
        "quantity": 16,
        "comment": "Shorts"
      },
      {
        "id": 517,
        "type": "orange",
        "date": "17/06/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100390",
        "quantity": 16,
        "comment": "Accessoires"
      },
      {
        "id": 518,
        "type": "blue",
        "date": "17/06/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100391",
        "quantity": 6,
        "comment": "Sacs"
      },
      {
        "id": 519,
        "type": "orange",
        "date": "17/06/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100392",
        "quantity": 24,
        "comment": "Robes"
      }
    ]
  },
  "2025-06-18": {
    "transfers": [
      {
        "id": 520,
        "type": "blue",
        "date": "18/06/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100393",
        "quantity": 6,
        "comment": "Pantalons"
      },
      {
        "id": 521,
        "type": "blue",
        "date": "18/06/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100394",
        "quantity": 15,
        "comment": "Chemises"
      }
    ]
  },
  "2025-06-19": {
    "transfers": [
      {
        "id": 522,
        "type": "blue",
        "date": "19/06/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100395",
        "quantity": 15,
        "comment": "Accessoires"
      },
      {
        "id": 523,
        "type": "orange",
        "date": "19/06/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100396",
        "quantity": 8,
        "comment": "Robes"
      },
      {
        "id": 524,
        "type": "orange",
        "date": "19/06/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 525,
        "type": "orange",
        "date": "19/06/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100397",
        "quantity": 24,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-06-20": {
    "transfers": [
      {
        "id": 526,
        "type": "blue",
        "date": "20/06/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100398",
        "quantity": 13,
        "comment": "Robes"
      }
    ]
  },
  "2025-06-21": {
    "transfers": [
      {
        "id": 527,
        "type": "yellow",
        "date": "21/06/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      }
    ]
  },
  "2025-06-22": {
    "transfers": [
      {
        "id": 528,
        "type": "orange",
        "date": "22/06/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100399",
        "quantity": 28,
        "comment": "Ceintures"
      },
      {
        "id": 529,
        "type": "orange",
        "date": "22/06/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100400",
        "quantity": 5,
        "comment": "Sacs"
      }
    ]
  },
  "2025-06-23": {
    "transfers": [
      {
        "id": 530,
        "type": "orange",
        "date": "23/06/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100401",
        "quantity": 25,
        "comment": "Jeans"
      },
      {
        "id": 531,
        "type": "orange",
        "date": "23/06/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100402",
        "quantity": 21,
        "comment": "Tops"
      },
      {
        "id": 532,
        "type": "green",
        "date": "23/06/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100403",
        "quantity": 30,
        "comment": "Robes"
      },
      {
        "id": 533,
        "type": "blue",
        "date": "23/06/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100404",
        "quantity": 26,
        "comment": "Sacs"
      }
    ]
  },
  "2025-06-24": {
    "transfers": [
      {
        "id": 534,
        "type": "green",
        "date": "24/06/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100405",
        "quantity": 22,
        "comment": "Vestes"
      }
    ]
  },
  "2025-06-25": {
    "transfers": [
      {
        "id": 535,
        "type": "orange",
        "date": "25/06/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100406",
        "quantity": 9,
        "comment": "Sacs"
      },
      {
        "id": 536,
        "type": "orange",
        "date": "25/06/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100407",
        "quantity": 28,
        "comment": "Jeans"
      },
      {
        "id": 537,
        "type": "orange",
        "date": "25/06/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100408",
        "quantity": 13,
        "comment": "T-shirts"
      },
      {
        "id": 538,
        "type": "yellow",
        "date": "25/06/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 539,
        "type": "blue",
        "date": "25/06/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100409",
        "quantity": 9,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-06-26": {
    "transfers": [
      {
        "id": 540,
        "type": "green",
        "date": "26/06/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100410",
        "quantity": 30,
        "comment": "Shorts"
      },
      {
        "id": 541,
        "type": "blue",
        "date": "26/06/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100411",
        "quantity": 9,
        "comment": "Robes"
      }
    ]
  },
  "2025-06-27": {
    "transfers": [
      {
        "id": 542,
        "type": "yellow",
        "date": "27/06/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 543,
        "type": "blue",
        "date": "27/06/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100412",
        "quantity": 17,
        "comment": "Jeans"
      },
      {
        "id": 544,
        "type": "orange",
        "date": "27/06/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100413",
        "quantity": 30,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-06-28": {
    "transfers": [
      {
        "id": 545,
        "type": "blue",
        "date": "28/06/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100414",
        "quantity": 8,
        "comment": "Chaussures"
      },
      {
        "id": 546,
        "type": "blue",
        "date": "28/06/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100415",
        "quantity": 13,
        "comment": "Chemises"
      }
    ]
  },
  "2025-06-29": {
    "transfers": [
      {
        "id": 547,
        "type": "orange",
        "date": "29/06/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 548,
        "type": "blue",
        "date": "29/06/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Tanger",
        "documentNumber": "100416",
        "quantity": 13,
        "comment": "Jeans"
      }
    ]
  },
  "2025-06-30": {
    "transfers": [
      {
        "id": 549,
        "type": "blue",
        "date": "30/06/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100417",
        "quantity": 8,
        "comment": "Ceintures"
      },
      {
        "id": 550,
        "type": "blue",
        "date": "30/06/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100418",
        "quantity": 28,
        "comment": "Pulls"
      }
    ]
  },
  "2025-07-01": {
    "transfers": [
      {
        "id": 551,
        "type": "blue",
        "date": "01/07/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100419",
        "quantity": 6,
        "comment": "Chaussures"
      },
      {
        "id": 552,
        "type": "green",
        "date": "01/07/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100420",
        "quantity": 14,
        "comment": "Vestes"
      },
      {
        "id": 553,
        "type": "green",
        "date": "01/07/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100421",
        "quantity": 11,
        "comment": "Sacs"
      },
      {
        "id": 554,
        "type": "yellow",
        "date": "01/07/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 555,
        "type": "blue",
        "date": "01/07/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100422",
        "quantity": 13,
        "comment": "Shorts"
      }
    ]
  },
  "2025-07-02": {
    "transfers": [
      {
        "id": 556,
        "type": "orange",
        "date": "02/07/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100423",
        "quantity": 20,
        "comment": "Tops"
      },
      {
        "id": 557,
        "type": "green",
        "date": "02/07/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100424",
        "quantity": 12,
        "comment": "T-shirts"
      },
      {
        "id": 558,
        "type": "blue",
        "date": "02/07/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100425",
        "quantity": 14,
        "comment": "Tops"
      },
      {
        "id": 559,
        "type": "orange",
        "date": "02/07/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-07-03": {
    "transfers": [
      {
        "id": 560,
        "type": "blue",
        "date": "03/07/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100426",
        "quantity": 14,
        "comment": "Tops"
      },
      {
        "id": 561,
        "type": "orange",
        "date": "03/07/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100427",
        "quantity": 11,
        "comment": "Tops"
      },
      {
        "id": 562,
        "type": "blue",
        "date": "03/07/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100428",
        "quantity": 20,
        "comment": "Accessoires"
      },
      {
        "id": 563,
        "type": "green",
        "date": "03/07/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100429",
        "quantity": 25,
        "comment": "Pulls"
      }
    ]
  },
  "2025-07-04": {
    "transfers": [
      {
        "id": 564,
        "type": "blue",
        "date": "04/07/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100430",
        "quantity": 29,
        "comment": "T-shirts"
      },
      {
        "id": 565,
        "type": "green",
        "date": "04/07/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100431",
        "quantity": 6,
        "comment": "T-shirts"
      },
      {
        "id": 566,
        "type": "blue",
        "date": "04/07/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100432",
        "quantity": 24,
        "comment": "Chaussures"
      },
      {
        "id": 567,
        "type": "orange",
        "date": "04/07/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100433",
        "quantity": 8,
        "comment": "Pantalons"
      },
      {
        "id": 568,
        "type": "blue",
        "date": "04/07/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100434",
        "quantity": 23,
        "comment": "Sacs"
      }
    ]
  },
  "2025-07-05": {
    "transfers": [
      {
        "id": 569,
        "type": "orange",
        "date": "05/07/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100435",
        "quantity": 17,
        "comment": "Pantalons"
      },
      {
        "id": 570,
        "type": "blue",
        "date": "05/07/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100436",
        "quantity": 23,
        "comment": "Pantalons"
      },
      {
        "id": 571,
        "type": "orange",
        "date": "05/07/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100437",
        "quantity": 20,
        "comment": "Tops"
      },
      {
        "id": 572,
        "type": "orange",
        "date": "05/07/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 573,
        "type": "orange",
        "date": "05/07/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100438",
        "quantity": 5,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-07-06": {
    "transfers": [
      {
        "id": 574,
        "type": "green",
        "date": "06/07/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100439",
        "quantity": 28,
        "comment": "Pulls"
      },
      {
        "id": 575,
        "type": "orange",
        "date": "06/07/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100440",
        "quantity": 26,
        "comment": "Tops"
      },
      {
        "id": 576,
        "type": "yellow",
        "date": "06/07/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 577,
        "type": "orange",
        "date": "06/07/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100441",
        "quantity": 18,
        "comment": "Jeans"
      }
    ]
  },
  "2025-07-07": {
    "transfers": [
      {
        "id": 578,
        "type": "orange",
        "date": "07/07/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-07-08": {
    "transfers": [
      {
        "id": 579,
        "type": "green",
        "date": "08/07/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100442",
        "quantity": 19,
        "comment": "Ceintures"
      },
      {
        "id": 580,
        "type": "blue",
        "date": "08/07/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100443",
        "quantity": 22,
        "comment": "Shorts"
      },
      {
        "id": 581,
        "type": "orange",
        "date": "08/07/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100444",
        "quantity": 23,
        "comment": "Ceintures"
      },
      {
        "id": 582,
        "type": "orange",
        "date": "08/07/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100445",
        "quantity": 10,
        "comment": "Jeans"
      }
    ]
  },
  "2025-07-09": {
    "transfers": [
      {
        "id": 583,
        "type": "blue",
        "date": "09/07/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 584,
        "type": "blue",
        "date": "09/07/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100446",
        "quantity": 12,
        "comment": "Sacs"
      },
      {
        "id": 585,
        "type": "green",
        "date": "09/07/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100447",
        "quantity": 18,
        "comment": "Chemises"
      },
      {
        "id": 586,
        "type": "orange",
        "date": "09/07/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 587,
        "type": "green",
        "date": "09/07/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100448",
        "quantity": 7,
        "comment": "Shorts"
      }
    ]
  },
  "2025-07-10": {
    "transfers": [
      {
        "id": 588,
        "type": "yellow",
        "date": "10/07/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 589,
        "type": "green",
        "date": "10/07/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100449",
        "quantity": 19,
        "comment": "Shorts"
      }
    ]
  },
  "2025-07-11": {
    "transfers": [
      {
        "id": 590,
        "type": "orange",
        "date": "11/07/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100450",
        "quantity": 26,
        "comment": "Robes"
      },
      {
        "id": 591,
        "type": "green",
        "date": "11/07/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100451",
        "quantity": 28,
        "comment": "Chemises"
      },
      {
        "id": 592,
        "type": "orange",
        "date": "11/07/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100452",
        "quantity": 27,
        "comment": "Shorts"
      }
    ]
  },
  "2025-07-12": {
    "transfers": [
      {
        "id": 593,
        "type": "yellow",
        "date": "12/07/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 594,
        "type": "orange",
        "date": "12/07/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100453",
        "quantity": 21,
        "comment": "Vestes"
      }
    ]
  },
  "2025-07-13": {
    "transfers": [
      {
        "id": 595,
        "type": "orange",
        "date": "13/07/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100454",
        "quantity": 27,
        "comment": "T-shirts"
      },
      {
        "id": 596,
        "type": "blue",
        "date": "13/07/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100455",
        "quantity": 27,
        "comment": "Pulls"
      },
      {
        "id": 597,
        "type": "green",
        "date": "13/07/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100456",
        "quantity": 15,
        "comment": "Chaussures"
      },
      {
        "id": 598,
        "type": "green",
        "date": "13/07/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100457",
        "quantity": 18,
        "comment": "Chemises"
      },
      {
        "id": 599,
        "type": "green",
        "date": "13/07/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100458",
        "quantity": 28,
        "comment": "Tops"
      }
    ]
  },
  "2025-07-14": {
    "transfers": [
      {
        "id": 600,
        "type": "green",
        "date": "14/07/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-07-15": {
    "transfers": [
      {
        "id": 601,
        "type": "green",
        "date": "15/07/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100459",
        "quantity": 22,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-07-16": {
    "transfers": [
      {
        "id": 602,
        "type": "blue",
        "date": "16/07/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 603,
        "type": "blue",
        "date": "16/07/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100460",
        "quantity": 30,
        "comment": "Accessoires"
      },
      {
        "id": 604,
        "type": "blue",
        "date": "16/07/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100461",
        "quantity": 10,
        "comment": "Vestes"
      },
      {
        "id": 605,
        "type": "yellow",
        "date": "16/07/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 606,
        "type": "orange",
        "date": "16/07/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100462",
        "quantity": 19,
        "comment": "Chemises"
      }
    ]
  },
  "2025-07-17": {
    "transfers": [
      {
        "id": 607,
        "type": "blue",
        "date": "17/07/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Tanger",
        "documentNumber": "100463",
        "quantity": 21,
        "comment": "T-shirts"
      },
      {
        "id": 608,
        "type": "green",
        "date": "17/07/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100464",
        "quantity": 6,
        "comment": "Jeans"
      },
      {
        "id": 609,
        "type": "orange",
        "date": "17/07/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100465",
        "quantity": 19,
        "comment": "Chaussures"
      },
      {
        "id": 610,
        "type": "green",
        "date": "17/07/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-07-18": {
    "transfers": [
      {
        "id": 611,
        "type": "orange",
        "date": "18/07/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 612,
        "type": "green",
        "date": "18/07/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100466",
        "quantity": 23,
        "comment": "Vestes"
      },
      {
        "id": 613,
        "type": "blue",
        "date": "18/07/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100467",
        "quantity": 24,
        "comment": "T-shirts"
      },
      {
        "id": 614,
        "type": "yellow",
        "date": "18/07/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      }
    ]
  },
  "2025-07-19": {
    "transfers": [
      {
        "id": 615,
        "type": "blue",
        "date": "19/07/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100468",
        "quantity": 18,
        "comment": "Jeans"
      },
      {
        "id": 616,
        "type": "blue",
        "date": "19/07/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 617,
        "type": "orange",
        "date": "19/07/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100469",
        "quantity": 18,
        "comment": "Robes"
      },
      {
        "id": 618,
        "type": "blue",
        "date": "19/07/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100470",
        "quantity": 18,
        "comment": "Robes"
      },
      {
        "id": 619,
        "type": "green",
        "date": "19/07/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100471",
        "quantity": 22,
        "comment": "Shorts"
      }
    ]
  },
  "2025-07-20": {
    "transfers": [
      {
        "id": 620,
        "type": "yellow",
        "date": "20/07/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 621,
        "type": "blue",
        "date": "20/07/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100472",
        "quantity": 10,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-07-21": {
    "transfers": [
      {
        "id": 622,
        "type": "yellow",
        "date": "21/07/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 623,
        "type": "green",
        "date": "21/07/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100473",
        "quantity": 24,
        "comment": "Robes"
      },
      {
        "id": 624,
        "type": "green",
        "date": "21/07/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100474",
        "quantity": 5,
        "comment": "Tops"
      },
      {
        "id": 625,
        "type": "green",
        "date": "21/07/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100475",
        "quantity": 9,
        "comment": "T-shirts"
      },
      {
        "id": 626,
        "type": "orange",
        "date": "21/07/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-07-22": {
    "transfers": [
      {
        "id": 627,
        "type": "blue",
        "date": "22/07/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 628,
        "type": "blue",
        "date": "22/07/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100476",
        "quantity": 17,
        "comment": "Chemises"
      },
      {
        "id": 629,
        "type": "orange",
        "date": "22/07/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100477",
        "quantity": 25,
        "comment": "Robes"
      },
      {
        "id": 630,
        "type": "blue",
        "date": "22/07/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100478",
        "quantity": 13,
        "comment": "Robes"
      },
      {
        "id": 631,
        "type": "blue",
        "date": "22/07/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100479",
        "quantity": 26,
        "comment": "Sacs"
      }
    ]
  },
  "2025-07-23": {
    "transfers": [
      {
        "id": 632,
        "type": "green",
        "date": "23/07/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100480",
        "quantity": 17,
        "comment": "Chemises"
      },
      {
        "id": 633,
        "type": "blue",
        "date": "23/07/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100481",
        "quantity": 19,
        "comment": "Ceintures"
      },
      {
        "id": 634,
        "type": "orange",
        "date": "23/07/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 635,
        "type": "orange",
        "date": "23/07/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100482",
        "quantity": 5,
        "comment": "Accessoires"
      },
      {
        "id": 636,
        "type": "orange",
        "date": "23/07/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      }
    ]
  },
  "2025-07-24": {
    "transfers": [
      {
        "id": 637,
        "type": "blue",
        "date": "24/07/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100483",
        "quantity": 28,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-07-25": {
    "transfers": [
      {
        "id": 638,
        "type": "yellow",
        "date": "25/07/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 639,
        "type": "orange",
        "date": "25/07/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 640,
        "type": "blue",
        "date": "25/07/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100484",
        "quantity": 12,
        "comment": "Sacs"
      }
    ]
  },
  "2025-07-26": {
    "transfers": [
      {
        "id": 641,
        "type": "orange",
        "date": "26/07/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100485",
        "quantity": 28,
        "comment": "Vestes"
      },
      {
        "id": 642,
        "type": "blue",
        "date": "26/07/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100486",
        "quantity": 19,
        "comment": "Pulls"
      }
    ]
  },
  "2025-07-27": {
    "transfers": [
      {
        "id": 643,
        "type": "blue",
        "date": "27/07/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Agadir",
        "documentNumber": "100487",
        "quantity": 10,
        "comment": "Jeans"
      }
    ]
  },
  "2025-07-28": {
    "transfers": [
      {
        "id": 644,
        "type": "blue",
        "date": "28/07/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100488",
        "quantity": 24,
        "comment": "Shorts"
      },
      {
        "id": 645,
        "type": "blue",
        "date": "28/07/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100489",
        "quantity": 13,
        "comment": "Vestes"
      },
      {
        "id": 646,
        "type": "green",
        "date": "28/07/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 647,
        "type": "blue",
        "date": "28/07/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100490",
        "quantity": 7,
        "comment": "Tops"
      }
    ]
  },
  "2025-07-29": {
    "transfers": [
      {
        "id": 648,
        "type": "green",
        "date": "29/07/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100491",
        "quantity": 15,
        "comment": "Tops"
      }
    ]
  },
  "2025-07-30": {
    "transfers": [
      {
        "id": 649,
        "type": "blue",
        "date": "30/07/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 650,
        "type": "orange",
        "date": "30/07/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100492",
        "quantity": 22,
        "comment": "Chaussures"
      },
      {
        "id": 651,
        "type": "blue",
        "date": "30/07/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-07-31": {
    "transfers": [
      {
        "id": 652,
        "type": "blue",
        "date": "31/07/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 653,
        "type": "yellow",
        "date": "31/07/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-08-01": {
    "transfers": [
      {
        "id": 654,
        "type": "orange",
        "date": "01/08/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 655,
        "type": "green",
        "date": "01/08/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100493",
        "quantity": 22,
        "comment": "Chaussures"
      },
      {
        "id": 656,
        "type": "blue",
        "date": "01/08/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100494",
        "quantity": 10,
        "comment": "Pulls"
      }
    ]
  },
  "2025-08-02": {
    "transfers": [
      {
        "id": 657,
        "type": "orange",
        "date": "02/08/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100495",
        "quantity": 8,
        "comment": "Sacs"
      },
      {
        "id": 658,
        "type": "blue",
        "date": "02/08/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 659,
        "type": "blue",
        "date": "02/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100496",
        "quantity": 17,
        "comment": "Shorts"
      },
      {
        "id": 660,
        "type": "orange",
        "date": "02/08/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100497",
        "quantity": 8,
        "comment": "Chemises"
      }
    ]
  },
  "2025-08-03": {
    "transfers": [
      {
        "id": 661,
        "type": "blue",
        "date": "03/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100498",
        "quantity": 27,
        "comment": "Robes"
      },
      {
        "id": 662,
        "type": "orange",
        "date": "03/08/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100499",
        "quantity": 11,
        "comment": "Chaussures"
      },
      {
        "id": 663,
        "type": "green",
        "date": "03/08/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 664,
        "type": "blue",
        "date": "03/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100500",
        "quantity": 16,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-08-04": {
    "transfers": [
      {
        "id": 665,
        "type": "orange",
        "date": "04/08/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100501",
        "quantity": 26,
        "comment": "Jeans"
      },
      {
        "id": 666,
        "type": "orange",
        "date": "04/08/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 667,
        "type": "green",
        "date": "04/08/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100502",
        "quantity": 8,
        "comment": "Shorts"
      },
      {
        "id": 668,
        "type": "green",
        "date": "04/08/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100503",
        "quantity": 15,
        "comment": "Robes"
      }
    ]
  },
  "2025-08-05": {
    "transfers": [
      {
        "id": 669,
        "type": "green",
        "date": "05/08/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100504",
        "quantity": 8,
        "comment": "Robes"
      },
      {
        "id": 670,
        "type": "green",
        "date": "05/08/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100505",
        "quantity": 22,
        "comment": "Chaussures"
      },
      {
        "id": 671,
        "type": "yellow",
        "date": "05/08/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-08-06": {
    "transfers": [
      {
        "id": 672,
        "type": "green",
        "date": "06/08/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100506",
        "quantity": 23,
        "comment": "Shorts"
      },
      {
        "id": 673,
        "type": "green",
        "date": "06/08/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100507",
        "quantity": 14,
        "comment": "Jeans"
      }
    ]
  },
  "2025-08-07": {
    "transfers": [
      {
        "id": 674,
        "type": "blue",
        "date": "07/08/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100508",
        "quantity": 7,
        "comment": "Pantalons"
      },
      {
        "id": 675,
        "type": "blue",
        "date": "07/08/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100509",
        "quantity": 20,
        "comment": "Jeans"
      },
      {
        "id": 676,
        "type": "orange",
        "date": "07/08/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100510",
        "quantity": 7,
        "comment": "Chemises"
      },
      {
        "id": 677,
        "type": "yellow",
        "date": "07/08/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 678,
        "type": "green",
        "date": "07/08/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-08-08": {
    "transfers": [
      {
        "id": 679,
        "type": "yellow",
        "date": "08/08/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 680,
        "type": "green",
        "date": "08/08/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100511",
        "quantity": 24,
        "comment": "Robes"
      },
      {
        "id": 681,
        "type": "green",
        "date": "08/08/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100512",
        "quantity": 16,
        "comment": "Accessoires"
      },
      {
        "id": 682,
        "type": "yellow",
        "date": "08/08/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-08-09": {
    "transfers": [
      {
        "id": 683,
        "type": "blue",
        "date": "09/08/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Agadir",
        "documentNumber": "100513",
        "quantity": 14,
        "comment": "Accessoires"
      },
      {
        "id": 684,
        "type": "blue",
        "date": "09/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100514",
        "quantity": 27,
        "comment": "Accessoires"
      },
      {
        "id": 685,
        "type": "green",
        "date": "09/08/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100515",
        "quantity": 28,
        "comment": "Tops"
      }
    ]
  },
  "2025-08-10": {
    "transfers": [
      {
        "id": 686,
        "type": "green",
        "date": "10/08/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100516",
        "quantity": 16,
        "comment": "Shorts"
      },
      {
        "id": 687,
        "type": "blue",
        "date": "10/08/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 688,
        "type": "green",
        "date": "10/08/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100517",
        "quantity": 5,
        "comment": "Tops"
      },
      {
        "id": 689,
        "type": "blue",
        "date": "10/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100518",
        "quantity": 24,
        "comment": "Tops"
      },
      {
        "id": 690,
        "type": "orange",
        "date": "10/08/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100519",
        "quantity": 29,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-08-11": {
    "transfers": [
      {
        "id": 691,
        "type": "green",
        "date": "11/08/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100520",
        "quantity": 16,
        "comment": "Ceintures"
      },
      {
        "id": 692,
        "type": "orange",
        "date": "11/08/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100521",
        "quantity": 27,
        "comment": "Chemises"
      },
      {
        "id": 693,
        "type": "green",
        "date": "11/08/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100522",
        "quantity": 12,
        "comment": "Jeans"
      },
      {
        "id": 694,
        "type": "blue",
        "date": "11/08/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100523",
        "quantity": 10,
        "comment": "Pulls"
      }
    ]
  },
  "2025-08-12": {
    "transfers": [
      {
        "id": 695,
        "type": "orange",
        "date": "12/08/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100524",
        "quantity": 24,
        "comment": "Tops"
      },
      {
        "id": 696,
        "type": "green",
        "date": "12/08/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Tanger",
        "documentNumber": "100525",
        "quantity": 8,
        "comment": "Ceintures"
      },
      {
        "id": 697,
        "type": "orange",
        "date": "12/08/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100526",
        "quantity": 15,
        "comment": "Chaussures"
      },
      {
        "id": 698,
        "type": "blue",
        "date": "12/08/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100527",
        "quantity": 13,
        "comment": "Robes"
      }
    ]
  },
  "2025-08-13": {
    "transfers": [
      {
        "id": 699,
        "type": "orange",
        "date": "13/08/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100528",
        "quantity": 9,
        "comment": "Robes"
      },
      {
        "id": 700,
        "type": "orange",
        "date": "13/08/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-08-14": {
    "transfers": [
      {
        "id": 701,
        "type": "green",
        "date": "14/08/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100529",
        "quantity": 9,
        "comment": "Shorts"
      }
    ]
  },
  "2025-08-15": {
    "transfers": [
      {
        "id": 702,
        "type": "yellow",
        "date": "15/08/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 703,
        "type": "green",
        "date": "15/08/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100530",
        "quantity": 30,
        "comment": "Ceintures"
      },
      {
        "id": 704,
        "type": "orange",
        "date": "15/08/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100531",
        "quantity": 21,
        "comment": "Vestes"
      },
      {
        "id": 705,
        "type": "blue",
        "date": "15/08/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 706,
        "type": "blue",
        "date": "15/08/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100532",
        "quantity": 20,
        "comment": "Robes"
      }
    ]
  },
  "2025-08-16": {
    "transfers": [
      {
        "id": 707,
        "type": "blue",
        "date": "16/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100533",
        "quantity": 6,
        "comment": "Chemises"
      },
      {
        "id": 708,
        "type": "blue",
        "date": "16/08/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100534",
        "quantity": 14,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-08-17": {
    "transfers": [
      {
        "id": 709,
        "type": "green",
        "date": "17/08/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100535",
        "quantity": 5,
        "comment": "Sacs"
      }
    ]
  },
  "2025-08-18": {
    "transfers": [
      {
        "id": 710,
        "type": "green",
        "date": "18/08/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100536",
        "quantity": 20,
        "comment": "Pantalons"
      },
      {
        "id": 711,
        "type": "green",
        "date": "18/08/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 712,
        "type": "blue",
        "date": "18/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100537",
        "quantity": 5,
        "comment": "Tops"
      }
    ]
  },
  "2025-08-19": {
    "transfers": [
      {
        "id": 713,
        "type": "green",
        "date": "19/08/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100538",
        "quantity": 9,
        "comment": "Robes"
      },
      {
        "id": 714,
        "type": "green",
        "date": "19/08/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-08-20": {
    "transfers": [
      {
        "id": 715,
        "type": "green",
        "date": "20/08/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100539",
        "quantity": 16,
        "comment": "Pulls"
      },
      {
        "id": 716,
        "type": "green",
        "date": "20/08/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100540",
        "quantity": 15,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-08-21": {
    "transfers": [
      {
        "id": 717,
        "type": "green",
        "date": "21/08/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100541",
        "quantity": 25,
        "comment": "Pantalons"
      },
      {
        "id": 718,
        "type": "blue",
        "date": "21/08/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100542",
        "quantity": 6,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-08-22": {
    "transfers": [
      {
        "id": 719,
        "type": "orange",
        "date": "22/08/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100543",
        "quantity": 7,
        "comment": "Chemises"
      },
      {
        "id": 720,
        "type": "yellow",
        "date": "22/08/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 721,
        "type": "orange",
        "date": "22/08/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100544",
        "quantity": 26,
        "comment": "Sacs"
      },
      {
        "id": 722,
        "type": "blue",
        "date": "22/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100545",
        "quantity": 10,
        "comment": "Robes"
      }
    ]
  },
  "2025-08-23": {
    "transfers": [
      {
        "id": 723,
        "type": "orange",
        "date": "23/08/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100546",
        "quantity": 7,
        "comment": "Pantalons"
      },
      {
        "id": 724,
        "type": "orange",
        "date": "23/08/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100547",
        "quantity": 30,
        "comment": "Accessoires"
      },
      {
        "id": 725,
        "type": "green",
        "date": "23/08/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100548",
        "quantity": 15,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-08-24": {
    "transfers": [
      {
        "id": 726,
        "type": "blue",
        "date": "24/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100549",
        "quantity": 5,
        "comment": "Jeans"
      },
      {
        "id": 727,
        "type": "blue",
        "date": "24/08/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100550",
        "quantity": 26,
        "comment": "Jeans"
      },
      {
        "id": 728,
        "type": "orange",
        "date": "24/08/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100551",
        "quantity": 27,
        "comment": "Accessoires"
      },
      {
        "id": 729,
        "type": "orange",
        "date": "24/08/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 730,
        "type": "green",
        "date": "24/08/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100552",
        "quantity": 26,
        "comment": "Tops"
      }
    ]
  },
  "2025-08-25": {
    "transfers": [
      {
        "id": 731,
        "type": "yellow",
        "date": "25/08/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 732,
        "type": "blue",
        "date": "25/08/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100553",
        "quantity": 13,
        "comment": "Vestes"
      },
      {
        "id": 733,
        "type": "blue",
        "date": "25/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100554",
        "quantity": 29,
        "comment": "Shorts"
      },
      {
        "id": 734,
        "type": "orange",
        "date": "25/08/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100555",
        "quantity": 13,
        "comment": "Shorts"
      }
    ]
  },
  "2025-08-26": {
    "transfers": [
      {
        "id": 735,
        "type": "green",
        "date": "26/08/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100556",
        "quantity": 15,
        "comment": "T-shirts"
      },
      {
        "id": 736,
        "type": "blue",
        "date": "26/08/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100557",
        "quantity": 18,
        "comment": "Chemises"
      }
    ]
  },
  "2025-08-27": {
    "transfers": [
      {
        "id": 737,
        "type": "green",
        "date": "27/08/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 738,
        "type": "green",
        "date": "27/08/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 739,
        "type": "orange",
        "date": "27/08/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100558",
        "quantity": 20,
        "comment": "Sacs"
      },
      {
        "id": 740,
        "type": "green",
        "date": "27/08/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100559",
        "quantity": 10,
        "comment": "Jeans"
      },
      {
        "id": 741,
        "type": "blue",
        "date": "27/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100560",
        "quantity": 7,
        "comment": "Vestes"
      }
    ]
  },
  "2025-08-28": {
    "transfers": [
      {
        "id": 742,
        "type": "orange",
        "date": "28/08/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100561",
        "quantity": 16,
        "comment": "Shorts"
      },
      {
        "id": 743,
        "type": "orange",
        "date": "28/08/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 744,
        "type": "orange",
        "date": "28/08/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100562",
        "quantity": 12,
        "comment": "Shorts"
      },
      {
        "id": 745,
        "type": "green",
        "date": "28/08/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100563",
        "quantity": 27,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-08-29": {
    "transfers": [
      {
        "id": 746,
        "type": "blue",
        "date": "29/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100564",
        "quantity": 22,
        "comment": "Accessoires"
      },
      {
        "id": 747,
        "type": "green",
        "date": "29/08/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100565",
        "quantity": 26,
        "comment": "Vestes"
      }
    ]
  },
  "2025-08-30": {
    "transfers": [
      {
        "id": 748,
        "type": "orange",
        "date": "30/08/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100566",
        "quantity": 8,
        "comment": "Pulls"
      },
      {
        "id": 749,
        "type": "yellow",
        "date": "30/08/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-08-31": {
    "transfers": [
      {
        "id": 750,
        "type": "blue",
        "date": "31/08/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100567",
        "quantity": 9,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-09-01": {
    "transfers": [
      {
        "id": 751,
        "type": "orange",
        "date": "01/09/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100568",
        "quantity": 24,
        "comment": "Robes"
      },
      {
        "id": 752,
        "type": "blue",
        "date": "01/09/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 753,
        "type": "blue",
        "date": "01/09/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 754,
        "type": "green",
        "date": "01/09/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100569",
        "quantity": 29,
        "comment": "Shorts"
      },
      {
        "id": 755,
        "type": "green",
        "date": "01/09/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100570",
        "quantity": 12,
        "comment": "Vestes"
      }
    ]
  },
  "2025-09-02": {
    "transfers": [
      {
        "id": 756,
        "type": "blue",
        "date": "02/09/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100571",
        "quantity": 16,
        "comment": "Jeans"
      },
      {
        "id": 757,
        "type": "blue",
        "date": "02/09/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100572",
        "quantity": 8,
        "comment": "Accessoires"
      },
      {
        "id": 758,
        "type": "green",
        "date": "02/09/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100573",
        "quantity": 8,
        "comment": "Accessoires"
      },
      {
        "id": 759,
        "type": "green",
        "date": "02/09/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100574",
        "quantity": 8,
        "comment": "Jeans"
      },
      {
        "id": 760,
        "type": "yellow",
        "date": "02/09/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-03": {
    "transfers": [
      {
        "id": 761,
        "type": "green",
        "date": "03/09/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100575",
        "quantity": 9,
        "comment": "Pantalons"
      },
      {
        "id": 762,
        "type": "green",
        "date": "03/09/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-04": {
    "transfers": [
      {
        "id": 763,
        "type": "orange",
        "date": "04/09/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100576",
        "quantity": 16,
        "comment": "Robes"
      },
      {
        "id": 764,
        "type": "blue",
        "date": "04/09/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 765,
        "type": "orange",
        "date": "04/09/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 766,
        "type": "green",
        "date": "04/09/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 767,
        "type": "blue",
        "date": "04/09/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-05": {
    "transfers": [
      {
        "id": 768,
        "type": "blue",
        "date": "05/09/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100577",
        "quantity": 26,
        "comment": "Jeans"
      },
      {
        "id": 769,
        "type": "orange",
        "date": "05/09/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100578",
        "quantity": 25,
        "comment": "Chemises"
      },
      {
        "id": 770,
        "type": "orange",
        "date": "05/09/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100579",
        "quantity": 6,
        "comment": "Robes"
      }
    ]
  },
  "2025-09-06": {
    "transfers": [
      {
        "id": 771,
        "type": "orange",
        "date": "06/09/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100580",
        "quantity": 14,
        "comment": "Tops"
      },
      {
        "id": 772,
        "type": "blue",
        "date": "06/09/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-07": {
    "transfers": [
      {
        "id": 773,
        "type": "green",
        "date": "07/09/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100581",
        "quantity": 24,
        "comment": "Tops"
      },
      {
        "id": 774,
        "type": "blue",
        "date": "07/09/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100582",
        "quantity": 29,
        "comment": "Sacs"
      },
      {
        "id": 775,
        "type": "orange",
        "date": "07/09/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100583",
        "quantity": 25,
        "comment": "T-shirts"
      },
      {
        "id": 776,
        "type": "yellow",
        "date": "07/09/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-08": {
    "transfers": [
      {
        "id": 777,
        "type": "green",
        "date": "08/09/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100584",
        "quantity": 9,
        "comment": "T-shirts"
      },
      {
        "id": 778,
        "type": "blue",
        "date": "08/09/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100585",
        "quantity": 25,
        "comment": "Tops"
      },
      {
        "id": 779,
        "type": "orange",
        "date": "08/09/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100586",
        "quantity": 17,
        "comment": "Shorts"
      },
      {
        "id": 780,
        "type": "green",
        "date": "08/09/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100587",
        "quantity": 29,
        "comment": "Jeans"
      },
      {
        "id": 781,
        "type": "yellow",
        "date": "08/09/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-09": {
    "transfers": [
      {
        "id": 782,
        "type": "blue",
        "date": "09/09/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100588",
        "quantity": 18,
        "comment": "Pulls"
      }
    ]
  },
  "2025-09-10": {
    "transfers": [
      {
        "id": 783,
        "type": "orange",
        "date": "10/09/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 784,
        "type": "orange",
        "date": "10/09/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-11": {
    "transfers": [
      {
        "id": 785,
        "type": "green",
        "date": "11/09/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100589",
        "quantity": 24,
        "comment": "Chemises"
      },
      {
        "id": 786,
        "type": "green",
        "date": "11/09/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100590",
        "quantity": 5,
        "comment": "Chaussures"
      },
      {
        "id": 787,
        "type": "orange",
        "date": "11/09/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 788,
        "type": "orange",
        "date": "11/09/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100591",
        "quantity": 20,
        "comment": "Pantalons"
      },
      {
        "id": 789,
        "type": "blue",
        "date": "11/09/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100592",
        "quantity": 7,
        "comment": "Robes"
      }
    ]
  },
  "2025-09-12": {
    "transfers": [
      {
        "id": 790,
        "type": "orange",
        "date": "12/09/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100593",
        "quantity": 25,
        "comment": "Vestes"
      },
      {
        "id": 791,
        "type": "orange",
        "date": "12/09/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100594",
        "quantity": 5,
        "comment": "Robes"
      },
      {
        "id": 792,
        "type": "orange",
        "date": "12/09/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100595",
        "quantity": 6,
        "comment": "Chaussures"
      },
      {
        "id": 793,
        "type": "blue",
        "date": "12/09/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100596",
        "quantity": 19,
        "comment": "Ceintures"
      },
      {
        "id": 794,
        "type": "yellow",
        "date": "12/09/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-13": {
    "transfers": [
      {
        "id": 795,
        "type": "green",
        "date": "13/09/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100597",
        "quantity": 26,
        "comment": "Pantalons"
      },
      {
        "id": 796,
        "type": "yellow",
        "date": "13/09/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-14": {
    "transfers": [
      {
        "id": 797,
        "type": "yellow",
        "date": "14/09/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-15": {
    "transfers": [
      {
        "id": 798,
        "type": "orange",
        "date": "15/09/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 799,
        "type": "orange",
        "date": "15/09/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100598",
        "quantity": 25,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-09-16": {
    "transfers": [
      {
        "id": 800,
        "type": "blue",
        "date": "16/09/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100599",
        "quantity": 6,
        "comment": "Chemises"
      },
      {
        "id": 801,
        "type": "orange",
        "date": "16/09/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100600",
        "quantity": 8,
        "comment": "Robes"
      }
    ]
  },
  "2025-09-17": {
    "transfers": [
      {
        "id": 802,
        "type": "orange",
        "date": "17/09/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100601",
        "quantity": 7,
        "comment": "Robes"
      },
      {
        "id": 803,
        "type": "green",
        "date": "17/09/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100602",
        "quantity": 24,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-09-18": {
    "transfers": [
      {
        "id": 804,
        "type": "orange",
        "date": "18/09/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 805,
        "type": "yellow",
        "date": "18/09/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-19": {
    "transfers": [
      {
        "id": 806,
        "type": "green",
        "date": "19/09/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100603",
        "quantity": 24,
        "comment": "Pantalons"
      },
      {
        "id": 807,
        "type": "green",
        "date": "19/09/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100604",
        "quantity": 29,
        "comment": "Tops"
      },
      {
        "id": 808,
        "type": "green",
        "date": "19/09/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100605",
        "quantity": 15,
        "comment": "Shorts"
      }
    ]
  },
  "2025-09-20": {
    "transfers": [
      {
        "id": 809,
        "type": "orange",
        "date": "20/09/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100606",
        "quantity": 19,
        "comment": "Tops"
      }
    ]
  },
  "2025-09-21": {
    "transfers": [
      {
        "id": 810,
        "type": "blue",
        "date": "21/09/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 811,
        "type": "orange",
        "date": "21/09/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 812,
        "type": "blue",
        "date": "21/09/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-22": {
    "transfers": [
      {
        "id": 813,
        "type": "green",
        "date": "22/09/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 814,
        "type": "green",
        "date": "22/09/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100607",
        "quantity": 25,
        "comment": "Pulls"
      }
    ]
  },
  "2025-09-23": {
    "transfers": [
      {
        "id": 815,
        "type": "blue",
        "date": "23/09/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100608",
        "quantity": 14,
        "comment": "Pantalons"
      },
      {
        "id": 816,
        "type": "blue",
        "date": "23/09/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100609",
        "quantity": 27,
        "comment": "Robes"
      },
      {
        "id": 817,
        "type": "yellow",
        "date": "23/09/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-24": {
    "transfers": [
      {
        "id": 818,
        "type": "orange",
        "date": "24/09/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 819,
        "type": "green",
        "date": "24/09/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100610",
        "quantity": 15,
        "comment": "Pulls"
      }
    ]
  },
  "2025-09-25": {
    "transfers": [
      {
        "id": 820,
        "type": "blue",
        "date": "25/09/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100611",
        "quantity": 30,
        "comment": "Chaussures"
      },
      {
        "id": 821,
        "type": "orange",
        "date": "25/09/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100612",
        "quantity": 18,
        "comment": "Pantalons"
      },
      {
        "id": 822,
        "type": "orange",
        "date": "25/09/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100613",
        "quantity": 5,
        "comment": "Chemises"
      },
      {
        "id": 823,
        "type": "orange",
        "date": "25/09/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100614",
        "quantity": 14,
        "comment": "Ceintures"
      },
      {
        "id": 824,
        "type": "yellow",
        "date": "25/09/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-26": {
    "transfers": [
      {
        "id": 825,
        "type": "green",
        "date": "26/09/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 826,
        "type": "orange",
        "date": "26/09/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100615",
        "quantity": 14,
        "comment": "Robes"
      },
      {
        "id": 827,
        "type": "orange",
        "date": "26/09/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-09-27": {
    "transfers": [
      {
        "id": 828,
        "type": "blue",
        "date": "27/09/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100616",
        "quantity": 21,
        "comment": "Pulls"
      },
      {
        "id": 829,
        "type": "orange",
        "date": "27/09/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100617",
        "quantity": 27,
        "comment": "Tops"
      }
    ]
  },
  "2025-09-28": {
    "transfers": [
      {
        "id": 830,
        "type": "orange",
        "date": "28/09/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100618",
        "quantity": 25,
        "comment": "T-shirts"
      },
      {
        "id": 831,
        "type": "orange",
        "date": "28/09/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100619",
        "quantity": 30,
        "comment": "Sacs"
      }
    ]
  },
  "2025-09-29": {
    "transfers": [
      {
        "id": 832,
        "type": "green",
        "date": "29/09/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100620",
        "quantity": 23,
        "comment": "Jeans"
      },
      {
        "id": 833,
        "type": "blue",
        "date": "29/09/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100621",
        "quantity": 21,
        "comment": "Pulls"
      },
      {
        "id": 834,
        "type": "blue",
        "date": "29/09/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100622",
        "quantity": 24,
        "comment": "T-shirts"
      },
      {
        "id": 835,
        "type": "green",
        "date": "29/09/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100623",
        "quantity": 23,
        "comment": "Vestes"
      }
    ]
  },
  "2025-09-30": {
    "transfers": [
      {
        "id": 836,
        "type": "green",
        "date": "30/09/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100624",
        "quantity": 19,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-10-01": {
    "transfers": [
      {
        "id": 837,
        "type": "orange",
        "date": "01/10/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100625",
        "quantity": 5,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-10-02": {
    "transfers": [
      {
        "id": 838,
        "type": "orange",
        "date": "02/10/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100626",
        "quantity": 25,
        "comment": "Pulls"
      },
      {
        "id": 839,
        "type": "green",
        "date": "02/10/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100627",
        "quantity": 11,
        "comment": "Vestes"
      },
      {
        "id": 840,
        "type": "blue",
        "date": "02/10/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 841,
        "type": "green",
        "date": "02/10/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100628",
        "quantity": 9,
        "comment": "Chaussures"
      },
      {
        "id": 842,
        "type": "orange",
        "date": "02/10/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-10-03": {
    "transfers": [
      {
        "id": 843,
        "type": "orange",
        "date": "03/10/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100629",
        "quantity": 15,
        "comment": "Robes"
      },
      {
        "id": 844,
        "type": "orange",
        "date": "03/10/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100630",
        "quantity": 14,
        "comment": "Tops"
      },
      {
        "id": 845,
        "type": "blue",
        "date": "03/10/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100631",
        "quantity": 8,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-10-04": {
    "transfers": [
      {
        "id": 846,
        "type": "blue",
        "date": "04/10/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100632",
        "quantity": 23,
        "comment": "Chaussures"
      },
      {
        "id": 847,
        "type": "green",
        "date": "04/10/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100633",
        "quantity": 26,
        "comment": "Chemises"
      },
      {
        "id": 848,
        "type": "blue",
        "date": "04/10/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100634",
        "quantity": 24,
        "comment": "Chemises"
      }
    ]
  },
  "2025-10-05": {
    "transfers": [
      {
        "id": 849,
        "type": "green",
        "date": "05/10/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100635",
        "quantity": 27,
        "comment": "Pulls"
      },
      {
        "id": 850,
        "type": "orange",
        "date": "05/10/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100636",
        "quantity": 15,
        "comment": "Shorts"
      },
      {
        "id": 851,
        "type": "orange",
        "date": "05/10/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 852,
        "type": "blue",
        "date": "05/10/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100637",
        "quantity": 10,
        "comment": "Shorts"
      },
      {
        "id": 853,
        "type": "green",
        "date": "05/10/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100638",
        "quantity": 11,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-10-06": {
    "transfers": [
      {
        "id": 854,
        "type": "green",
        "date": "06/10/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100639",
        "quantity": 17,
        "comment": "Sacs"
      },
      {
        "id": 855,
        "type": "green",
        "date": "06/10/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100640",
        "quantity": 26,
        "comment": "Pulls"
      },
      {
        "id": 856,
        "type": "yellow",
        "date": "06/10/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 857,
        "type": "yellow",
        "date": "06/10/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 858,
        "type": "orange",
        "date": "06/10/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100641",
        "quantity": 10,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-10-07": {
    "transfers": [
      {
        "id": 859,
        "type": "green",
        "date": "07/10/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100642",
        "quantity": 21,
        "comment": "Robes"
      },
      {
        "id": 860,
        "type": "green",
        "date": "07/10/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100643",
        "quantity": 11,
        "comment": "Pulls"
      },
      {
        "id": 861,
        "type": "orange",
        "date": "07/10/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100644",
        "quantity": 5,
        "comment": "Pantalons"
      },
      {
        "id": 862,
        "type": "blue",
        "date": "07/10/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100645",
        "quantity": 21,
        "comment": "Vestes"
      },
      {
        "id": 863,
        "type": "blue",
        "date": "07/10/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-10-08": {
    "transfers": [
      {
        "id": 864,
        "type": "green",
        "date": "08/10/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100646",
        "quantity": 9,
        "comment": "Ceintures"
      },
      {
        "id": 865,
        "type": "orange",
        "date": "08/10/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100647",
        "quantity": 21,
        "comment": "Ceintures"
      },
      {
        "id": 866,
        "type": "orange",
        "date": "08/10/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100648",
        "quantity": 28,
        "comment": "Accessoires"
      },
      {
        "id": 867,
        "type": "green",
        "date": "08/10/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100649",
        "quantity": 6,
        "comment": "Pulls"
      }
    ]
  },
  "2025-10-09": {
    "transfers": [
      {
        "id": 868,
        "type": "blue",
        "date": "09/10/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100650",
        "quantity": 8,
        "comment": "Jeans"
      },
      {
        "id": 869,
        "type": "green",
        "date": "09/10/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-10-10": {
    "transfers": [
      {
        "id": 870,
        "type": "orange",
        "date": "10/10/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100651",
        "quantity": 22,
        "comment": "Pantalons"
      },
      {
        "id": 871,
        "type": "blue",
        "date": "10/10/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100652",
        "quantity": 15,
        "comment": "Vestes"
      },
      {
        "id": 872,
        "type": "green",
        "date": "10/10/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 873,
        "type": "green",
        "date": "10/10/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100653",
        "quantity": 28,
        "comment": "T-shirts"
      },
      {
        "id": 874,
        "type": "green",
        "date": "10/10/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100654",
        "quantity": 26,
        "comment": "Vestes"
      }
    ]
  },
  "2025-10-11": {
    "transfers": [
      {
        "id": 875,
        "type": "blue",
        "date": "11/10/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100655",
        "quantity": 18,
        "comment": "Pulls"
      },
      {
        "id": 876,
        "type": "blue",
        "date": "11/10/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100656",
        "quantity": 17,
        "comment": "Accessoires"
      },
      {
        "id": 877,
        "type": "orange",
        "date": "11/10/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100657",
        "quantity": 11,
        "comment": "Jeans"
      }
    ]
  },
  "2025-10-12": {
    "transfers": [
      {
        "id": 878,
        "type": "blue",
        "date": "12/10/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100658",
        "quantity": 8,
        "comment": "Sacs"
      },
      {
        "id": 879,
        "type": "orange",
        "date": "12/10/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 880,
        "type": "orange",
        "date": "12/10/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100659",
        "quantity": 16,
        "comment": "Chemises"
      },
      {
        "id": 881,
        "type": "orange",
        "date": "12/10/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 882,
        "type": "orange",
        "date": "12/10/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100660",
        "quantity": 22,
        "comment": "Tops"
      }
    ]
  },
  "2025-10-13": {
    "transfers": [
      {
        "id": 883,
        "type": "green",
        "date": "13/10/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 884,
        "type": "orange",
        "date": "13/10/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100661",
        "quantity": 24,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-10-14": {
    "transfers": [
      {
        "id": 885,
        "type": "orange",
        "date": "14/10/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100662",
        "quantity": 19,
        "comment": "Ceintures"
      },
      {
        "id": 886,
        "type": "blue",
        "date": "14/10/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100663",
        "quantity": 7,
        "comment": "T-shirts"
      },
      {
        "id": 887,
        "type": "blue",
        "date": "14/10/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100664",
        "quantity": 12,
        "comment": "Sacs"
      }
    ]
  },
  "2025-10-15": {
    "transfers": [
      {
        "id": 888,
        "type": "blue",
        "date": "15/10/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 889,
        "type": "yellow",
        "date": "15/10/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 890,
        "type": "blue",
        "date": "15/10/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100665",
        "quantity": 5,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-10-16": {
    "transfers": [
      {
        "id": 891,
        "type": "blue",
        "date": "16/10/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100666",
        "quantity": 7,
        "comment": "Vestes"
      }
    ]
  },
  "2025-10-17": {
    "transfers": [
      {
        "id": 892,
        "type": "blue",
        "date": "17/10/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100667",
        "quantity": 17,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-10-18": {
    "transfers": [
      {
        "id": 893,
        "type": "green",
        "date": "18/10/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 894,
        "type": "blue",
        "date": "18/10/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100668",
        "quantity": 8,
        "comment": "Shorts"
      },
      {
        "id": 895,
        "type": "blue",
        "date": "18/10/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100669",
        "quantity": 24,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-10-19": {
    "transfers": [
      {
        "id": 896,
        "type": "yellow",
        "date": "19/10/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-10-20": {
    "transfers": [
      {
        "id": 897,
        "type": "green",
        "date": "20/10/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100670",
        "quantity": 22,
        "comment": "T-shirts"
      },
      {
        "id": 898,
        "type": "orange",
        "date": "20/10/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 899,
        "type": "green",
        "date": "20/10/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100671",
        "quantity": 17,
        "comment": "Vestes"
      }
    ]
  },
  "2025-10-21": {
    "transfers": [
      {
        "id": 900,
        "type": "green",
        "date": "21/10/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100672",
        "quantity": 30,
        "comment": "Chaussures"
      },
      {
        "id": 901,
        "type": "blue",
        "date": "21/10/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100673",
        "quantity": 20,
        "comment": "Jeans"
      },
      {
        "id": 902,
        "type": "green",
        "date": "21/10/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 903,
        "type": "blue",
        "date": "21/10/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100674",
        "quantity": 29,
        "comment": "Chaussures"
      },
      {
        "id": 904,
        "type": "blue",
        "date": "21/10/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100675",
        "quantity": 29,
        "comment": "Vestes"
      }
    ]
  },
  "2025-10-22": {
    "transfers": [
      {
        "id": 905,
        "type": "orange",
        "date": "22/10/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100676",
        "quantity": 27,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-10-23": {
    "transfers": [
      {
        "id": 906,
        "type": "blue",
        "date": "23/10/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100677",
        "quantity": 13,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-10-24": {
    "transfers": [
      {
        "id": 907,
        "type": "blue",
        "date": "24/10/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100678",
        "quantity": 6,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-10-25": {
    "transfers": [
      {
        "id": 908,
        "type": "blue",
        "date": "25/10/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100679",
        "quantity": 27,
        "comment": "Jeans"
      },
      {
        "id": 909,
        "type": "orange",
        "date": "25/10/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100680",
        "quantity": 13,
        "comment": "Shorts"
      }
    ]
  },
  "2025-10-26": {
    "transfers": [
      {
        "id": 910,
        "type": "green",
        "date": "26/10/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100681",
        "quantity": 9,
        "comment": "Chemises"
      }
    ]
  },
  "2025-10-27": {
    "transfers": [
      {
        "id": 911,
        "type": "orange",
        "date": "27/10/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100682",
        "quantity": 21,
        "comment": "Pulls"
      },
      {
        "id": 912,
        "type": "blue",
        "date": "27/10/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100683",
        "quantity": 6,
        "comment": "Robes"
      }
    ]
  },
  "2025-10-28": {
    "transfers": [
      {
        "id": 913,
        "type": "yellow",
        "date": "28/10/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 914,
        "type": "blue",
        "date": "28/10/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100684",
        "quantity": 16,
        "comment": "Vestes"
      },
      {
        "id": 915,
        "type": "green",
        "date": "28/10/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100685",
        "quantity": 28,
        "comment": "Chaussures"
      },
      {
        "id": 916,
        "type": "green",
        "date": "28/10/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100686",
        "quantity": 8,
        "comment": "Robes"
      },
      {
        "id": 917,
        "type": "green",
        "date": "28/10/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100687",
        "quantity": 6,
        "comment": "Vestes"
      }
    ]
  },
  "2025-10-29": {
    "transfers": [
      {
        "id": 918,
        "type": "blue",
        "date": "29/10/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100688",
        "quantity": 8,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-10-30": {
    "transfers": [
      {
        "id": 919,
        "type": "orange",
        "date": "30/10/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100689",
        "quantity": 8,
        "comment": "Pulls"
      },
      {
        "id": 920,
        "type": "green",
        "date": "30/10/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100690",
        "quantity": 18,
        "comment": "Sacs"
      },
      {
        "id": 921,
        "type": "green",
        "date": "30/10/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100691",
        "quantity": 29,
        "comment": "Pantalons"
      },
      {
        "id": 922,
        "type": "green",
        "date": "30/10/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100692",
        "quantity": 5,
        "comment": "Jeans"
      }
    ]
  },
  "2025-10-31": {
    "transfers": [
      {
        "id": 923,
        "type": "green",
        "date": "31/10/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100693",
        "quantity": 21,
        "comment": "Accessoires"
      },
      {
        "id": 924,
        "type": "green",
        "date": "31/10/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100694",
        "quantity": 30,
        "comment": "T-shirts"
      },
      {
        "id": 925,
        "type": "orange",
        "date": "31/10/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100695",
        "quantity": 28,
        "comment": "Accessoires"
      },
      {
        "id": 926,
        "type": "green",
        "date": "31/10/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-11-01": {
    "transfers": [
      {
        "id": 927,
        "type": "blue",
        "date": "01/11/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100696",
        "quantity": 21,
        "comment": "Pantalons"
      },
      {
        "id": 928,
        "type": "orange",
        "date": "01/11/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 929,
        "type": "blue",
        "date": "01/11/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100697",
        "quantity": 9,
        "comment": "T-shirts"
      },
      {
        "id": 930,
        "type": "green",
        "date": "01/11/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100698",
        "quantity": 19,
        "comment": "Vestes"
      },
      {
        "id": 931,
        "type": "blue",
        "date": "01/11/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100699",
        "quantity": 17,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-11-02": {
    "transfers": [
      {
        "id": 932,
        "type": "blue",
        "date": "02/11/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 933,
        "type": "blue",
        "date": "02/11/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100700",
        "quantity": 29,
        "comment": "T-shirts"
      },
      {
        "id": 934,
        "type": "orange",
        "date": "02/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100701",
        "quantity": 29,
        "comment": "Robes"
      },
      {
        "id": 935,
        "type": "blue",
        "date": "02/11/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100702",
        "quantity": 25,
        "comment": "Sacs"
      },
      {
        "id": 936,
        "type": "blue",
        "date": "02/11/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100703",
        "quantity": 8,
        "comment": "Sacs"
      }
    ]
  },
  "2025-11-03": {
    "transfers": [
      {
        "id": 937,
        "type": "blue",
        "date": "03/11/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100704",
        "quantity": 22,
        "comment": "Accessoires"
      },
      {
        "id": 938,
        "type": "green",
        "date": "03/11/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100705",
        "quantity": 9,
        "comment": "Pulls"
      }
    ]
  },
  "2025-11-04": {
    "transfers": [
      {
        "id": 939,
        "type": "blue",
        "date": "04/11/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100706",
        "quantity": 30,
        "comment": "Chemises"
      },
      {
        "id": 940,
        "type": "blue",
        "date": "04/11/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100707",
        "quantity": 21,
        "comment": "Accessoires"
      },
      {
        "id": 941,
        "type": "green",
        "date": "04/11/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100708",
        "quantity": 29,
        "comment": "Accessoires"
      },
      {
        "id": 942,
        "type": "orange",
        "date": "04/11/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100709",
        "quantity": 17,
        "comment": "Pantalons"
      },
      {
        "id": 943,
        "type": "green",
        "date": "04/11/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100710",
        "quantity": 27,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-11-05": {
    "transfers": [
      {
        "id": 944,
        "type": "orange",
        "date": "05/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100711",
        "quantity": 9,
        "comment": "Vestes"
      },
      {
        "id": 945,
        "type": "orange",
        "date": "05/11/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 946,
        "type": "blue",
        "date": "05/11/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100712",
        "quantity": 18,
        "comment": "Chaussures"
      },
      {
        "id": 947,
        "type": "green",
        "date": "05/11/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100713",
        "quantity": 23,
        "comment": "Jeans"
      },
      {
        "id": 948,
        "type": "orange",
        "date": "05/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100714",
        "quantity": 7,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-11-06": {
    "transfers": [
      {
        "id": 949,
        "type": "green",
        "date": "06/11/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 950,
        "type": "green",
        "date": "06/11/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100715",
        "quantity": 8,
        "comment": "Tops"
      },
      {
        "id": 951,
        "type": "green",
        "date": "06/11/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100716",
        "quantity": 17,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-11-07": {
    "transfers": [
      {
        "id": 952,
        "type": "blue",
        "date": "07/11/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100717",
        "quantity": 5,
        "comment": "Robes"
      },
      {
        "id": 953,
        "type": "blue",
        "date": "07/11/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100718",
        "quantity": 15,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-11-08": {
    "transfers": [
      {
        "id": 954,
        "type": "orange",
        "date": "08/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100719",
        "quantity": 20,
        "comment": "Tops"
      }
    ]
  },
  "2025-11-09": {
    "transfers": [
      {
        "id": 955,
        "type": "orange",
        "date": "09/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100720",
        "quantity": 15,
        "comment": "Ceintures"
      },
      {
        "id": 956,
        "type": "orange",
        "date": "09/11/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100721",
        "quantity": 19,
        "comment": "Pantalons"
      },
      {
        "id": 957,
        "type": "green",
        "date": "09/11/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100722",
        "quantity": 13,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-11-10": {
    "transfers": [
      {
        "id": 958,
        "type": "orange",
        "date": "10/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100723",
        "quantity": 30,
        "comment": "Vestes"
      },
      {
        "id": 959,
        "type": "orange",
        "date": "10/11/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 960,
        "type": "green",
        "date": "10/11/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100724",
        "quantity": 5,
        "comment": "Jeans"
      }
    ]
  },
  "2025-11-11": {
    "transfers": [
      {
        "id": 961,
        "type": "blue",
        "date": "11/11/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 962,
        "type": "green",
        "date": "11/11/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 963,
        "type": "green",
        "date": "11/11/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100725",
        "quantity": 18,
        "comment": "Pantalons"
      },
      {
        "id": 964,
        "type": "orange",
        "date": "11/11/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 965,
        "type": "orange",
        "date": "11/11/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100726",
        "quantity": 25,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-11-12": {
    "transfers": [
      {
        "id": 966,
        "type": "orange",
        "date": "12/11/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100727",
        "quantity": 9,
        "comment": "Chemises"
      }
    ]
  },
  "2025-11-13": {
    "transfers": [
      {
        "id": 967,
        "type": "orange",
        "date": "13/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100728",
        "quantity": 14,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-11-14": {
    "transfers": [
      {
        "id": 968,
        "type": "orange",
        "date": "14/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100729",
        "quantity": 12,
        "comment": "Chaussures"
      },
      {
        "id": 969,
        "type": "blue",
        "date": "14/11/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100730",
        "quantity": 13,
        "comment": "Sacs"
      },
      {
        "id": 970,
        "type": "green",
        "date": "14/11/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100731",
        "quantity": 8,
        "comment": "Accessoires"
      },
      {
        "id": 971,
        "type": "blue",
        "date": "14/11/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100732",
        "quantity": 18,
        "comment": "Ceintures"
      },
      {
        "id": 972,
        "type": "orange",
        "date": "14/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100733",
        "quantity": 22,
        "comment": "Sacs"
      }
    ]
  },
  "2025-11-15": {
    "transfers": [
      {
        "id": 973,
        "type": "orange",
        "date": "15/11/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100734",
        "quantity": 22,
        "comment": "Jeans"
      },
      {
        "id": 974,
        "type": "blue",
        "date": "15/11/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100735",
        "quantity": 13,
        "comment": "Ceintures"
      },
      {
        "id": 975,
        "type": "blue",
        "date": "15/11/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100736",
        "quantity": 12,
        "comment": "Tops"
      }
    ]
  },
  "2025-11-16": {
    "transfers": [
      {
        "id": 976,
        "type": "orange",
        "date": "16/11/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-11-17": {
    "transfers": [
      {
        "id": 977,
        "type": "blue",
        "date": "17/11/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100737",
        "quantity": 25,
        "comment": "Ceintures"
      },
      {
        "id": 978,
        "type": "orange",
        "date": "17/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100738",
        "quantity": 13,
        "comment": "Robes"
      },
      {
        "id": 979,
        "type": "green",
        "date": "17/11/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      },
      {
        "id": 980,
        "type": "orange",
        "date": "17/11/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100739",
        "quantity": 16,
        "comment": "Jeans"
      }
    ]
  },
  "2025-11-18": {
    "transfers": [
      {
        "id": 981,
        "type": "green",
        "date": "18/11/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100740",
        "quantity": 28,
        "comment": "Ceintures"
      },
      {
        "id": 982,
        "type": "orange",
        "date": "18/11/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100741",
        "quantity": 14,
        "comment": "Vestes"
      },
      {
        "id": 983,
        "type": "blue",
        "date": "18/11/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 984,
        "type": "yellow",
        "date": "18/11/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 985,
        "type": "yellow",
        "date": "18/11/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-11-19": {
    "transfers": [
      {
        "id": 986,
        "type": "yellow",
        "date": "19/11/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 987,
        "type": "green",
        "date": "19/11/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100742",
        "quantity": 20,
        "comment": "Vestes"
      },
      {
        "id": 988,
        "type": "blue",
        "date": "19/11/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Tanger",
        "documentNumber": "100743",
        "quantity": 17,
        "comment": "Vestes"
      },
      {
        "id": 989,
        "type": "green",
        "date": "19/11/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100744",
        "quantity": 18,
        "comment": "Sacs"
      },
      {
        "id": 990,
        "type": "green",
        "date": "19/11/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100745",
        "quantity": 6,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-11-20": {
    "transfers": [
      {
        "id": 991,
        "type": "green",
        "date": "20/11/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100746",
        "quantity": 17,
        "comment": "Shorts"
      },
      {
        "id": 992,
        "type": "orange",
        "date": "20/11/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100747",
        "quantity": 14,
        "comment": "Chaussures"
      },
      {
        "id": 993,
        "type": "blue",
        "date": "20/11/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100748",
        "quantity": 28,
        "comment": "Accessoires"
      },
      {
        "id": 994,
        "type": "green",
        "date": "20/11/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100749",
        "quantity": 12,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-11-21": {
    "transfers": [
      {
        "id": 995,
        "type": "blue",
        "date": "21/11/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Agadir",
        "documentNumber": "100750",
        "quantity": 30,
        "comment": "Accessoires"
      },
      {
        "id": 996,
        "type": "orange",
        "date": "21/11/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100751",
        "quantity": 9,
        "comment": "Accessoires"
      },
      {
        "id": 997,
        "type": "orange",
        "date": "21/11/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100752",
        "quantity": 6,
        "comment": "Sacs"
      }
    ]
  },
  "2025-11-22": {
    "transfers": [
      {
        "id": 998,
        "type": "orange",
        "date": "22/11/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100753",
        "quantity": 11,
        "comment": "Robes"
      },
      {
        "id": 999,
        "type": "orange",
        "date": "22/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100754",
        "quantity": 5,
        "comment": "Pantalons"
      },
      {
        "id": 1000,
        "type": "green",
        "date": "22/11/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100755",
        "quantity": 6,
        "comment": "Chaussures"
      },
      {
        "id": 1001,
        "type": "blue",
        "date": "22/11/2025",
        "status": "En cours",
        "from": "stradi Fès",
        "to": "stradi Tanger",
        "documentNumber": "100756",
        "quantity": 24,
        "comment": "Chemises"
      },
      {
        "id": 1002,
        "type": "orange",
        "date": "22/11/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100757",
        "quantity": 25,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-11-23": {
    "transfers": [
      {
        "id": 1003,
        "type": "blue",
        "date": "23/11/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100758",
        "quantity": 10,
        "comment": "Tops"
      },
      {
        "id": 1004,
        "type": "green",
        "date": "23/11/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Tanger",
        "documentNumber": "100759",
        "quantity": 21,
        "comment": "Pantalons"
      },
      {
        "id": 1005,
        "type": "blue",
        "date": "23/11/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100760",
        "quantity": 21,
        "comment": "Chemises"
      },
      {
        "id": 1006,
        "type": "blue",
        "date": "23/11/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100761",
        "quantity": 7,
        "comment": "Chemises"
      },
      {
        "id": 1007,
        "type": "orange",
        "date": "23/11/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100762",
        "quantity": 18,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-11-24": {
    "transfers": [
      {
        "id": 1008,
        "type": "blue",
        "date": "24/11/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100763",
        "quantity": 6,
        "comment": "Pulls"
      },
      {
        "id": 1009,
        "type": "orange",
        "date": "24/11/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100764",
        "quantity": 16,
        "comment": "Robes"
      },
      {
        "id": 1010,
        "type": "blue",
        "date": "24/11/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Fès",
        "documentNumber": "100765",
        "quantity": 7,
        "comment": "Vestes"
      },
      {
        "id": 1011,
        "type": "blue",
        "date": "24/11/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100766",
        "quantity": 22,
        "comment": "Vestes"
      },
      {
        "id": 1012,
        "type": "orange",
        "date": "24/11/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-11-25": {
    "transfers": [
      {
        "id": 1013,
        "type": "green",
        "date": "25/11/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      },
      {
        "id": 1014,
        "type": "orange",
        "date": "25/11/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100767",
        "quantity": 8,
        "comment": "Pulls"
      },
      {
        "id": 1015,
        "type": "green",
        "date": "25/11/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100768",
        "quantity": 19,
        "comment": "Jeans"
      },
      {
        "id": 1016,
        "type": "orange",
        "date": "25/11/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100769",
        "quantity": 5,
        "comment": "Sacs"
      }
    ]
  },
  "2025-11-26": {
    "transfers": [
      {
        "id": 1017,
        "type": "orange",
        "date": "26/11/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100770",
        "quantity": 6,
        "comment": "Chaussures"
      },
      {
        "id": 1018,
        "type": "orange",
        "date": "26/11/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100771",
        "quantity": 23,
        "comment": "Pulls"
      },
      {
        "id": 1019,
        "type": "yellow",
        "date": "26/11/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 1020,
        "type": "green",
        "date": "26/11/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100772",
        "quantity": 15,
        "comment": "Shorts"
      }
    ]
  },
  "2025-11-27": {
    "transfers": [
      {
        "id": 1021,
        "type": "orange",
        "date": "27/11/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100773",
        "quantity": 22,
        "comment": "Vestes"
      },
      {
        "id": 1022,
        "type": "blue",
        "date": "27/11/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100774",
        "quantity": 5,
        "comment": "Chaussures"
      },
      {
        "id": 1023,
        "type": "green",
        "date": "27/11/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100775",
        "quantity": 10,
        "comment": "Jeans"
      },
      {
        "id": 1024,
        "type": "orange",
        "date": "27/11/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100776",
        "quantity": 9,
        "comment": "Pantalons"
      },
      {
        "id": 1025,
        "type": "blue",
        "date": "27/11/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100777",
        "quantity": 30,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-11-28": {
    "transfers": [
      {
        "id": 1026,
        "type": "green",
        "date": "28/11/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100778",
        "quantity": 17,
        "comment": "Chaussures"
      }
    ]
  },
  "2025-11-29": {
    "transfers": [
      {
        "id": 1027,
        "type": "blue",
        "date": "29/11/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100779",
        "quantity": 16,
        "comment": "Sacs"
      }
    ]
  },
  "2025-11-30": {
    "transfers": [
      {
        "id": 1028,
        "type": "green",
        "date": "30/11/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 1029,
        "type": "green",
        "date": "30/11/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100780",
        "quantity": 25,
        "comment": "Vestes"
      },
      {
        "id": 1030,
        "type": "blue",
        "date": "30/11/2025",
        "status": "Inventaire",
        "to": "stradi Agadir",
        "showBoxIcon": true
      }
    ]
  },
  "2025-12-01": {
    "transfers": [
      {
        "id": 1031,
        "type": "orange",
        "date": "01/12/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100781",
        "quantity": 17,
        "comment": "Ceintures"
      },
      {
        "id": 1032,
        "type": "orange",
        "date": "01/12/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100782",
        "quantity": 26,
        "comment": "Pulls"
      },
      {
        "id": 1033,
        "type": "blue",
        "date": "01/12/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100783",
        "quantity": 13,
        "comment": "Jeans"
      },
      {
        "id": 1034,
        "type": "orange",
        "date": "01/12/2025",
        "status": "Inventaire",
        "to": "stradi Rabat",
        "showBoxIcon": true
      }
    ]
  },
  "2025-12-02": {
    "transfers": [
      {
        "id": 1035,
        "type": "green",
        "date": "02/12/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100784",
        "quantity": 5,
        "comment": "Ceintures"
      },
      {
        "id": 1036,
        "type": "green",
        "date": "02/12/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100785",
        "quantity": 9,
        "comment": "Chemises"
      },
      {
        "id": 1037,
        "type": "green",
        "date": "02/12/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Tanger",
        "documentNumber": "100786",
        "quantity": 27,
        "comment": "Robes"
      },
      {
        "id": 1038,
        "type": "orange",
        "date": "02/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100787",
        "quantity": 8,
        "comment": "Shorts"
      },
      {
        "id": 1039,
        "type": "blue",
        "date": "02/12/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-12-03": {
    "transfers": [
      {
        "id": 1040,
        "type": "orange",
        "date": "03/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100788",
        "quantity": 30,
        "comment": "Shorts"
      }
    ]
  },
  "2025-12-04": {
    "transfers": [
      {
        "id": 1041,
        "type": "green",
        "date": "04/12/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 1042,
        "type": "orange",
        "date": "04/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100789",
        "quantity": 9,
        "comment": "Robes"
      },
      {
        "id": 1043,
        "type": "orange",
        "date": "04/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100790",
        "quantity": 14,
        "comment": "Chaussures"
      },
      {
        "id": 1044,
        "type": "green",
        "date": "04/12/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100791",
        "quantity": 12,
        "comment": "Tops"
      }
    ]
  },
  "2025-12-05": {
    "transfers": [
      {
        "id": 1045,
        "type": "green",
        "date": "05/12/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100792",
        "quantity": 27,
        "comment": "T-shirts"
      },
      {
        "id": 1046,
        "type": "orange",
        "date": "05/12/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100793",
        "quantity": 5,
        "comment": "Pantalons"
      }
    ]
  },
  "2025-12-06": {
    "transfers": [
      {
        "id": 1047,
        "type": "blue",
        "date": "06/12/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100794",
        "quantity": 16,
        "comment": "Shorts"
      },
      {
        "id": 1048,
        "type": "green",
        "date": "06/12/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100795",
        "quantity": 22,
        "comment": "Pantalons"
      },
      {
        "id": 1049,
        "type": "orange",
        "date": "06/12/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100796",
        "quantity": 16,
        "comment": "T-shirts"
      },
      {
        "id": 1050,
        "type": "green",
        "date": "06/12/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100797",
        "quantity": 16,
        "comment": "Shorts"
      },
      {
        "id": 1051,
        "type": "blue",
        "date": "06/12/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Tanger",
        "documentNumber": "100798",
        "quantity": 28,
        "comment": "Robes"
      }
    ]
  },
  "2025-12-07": {
    "transfers": [
      {
        "id": 1052,
        "type": "yellow",
        "date": "07/12/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      }
    ]
  },
  "2025-12-08": {
    "transfers": [
      {
        "id": 1053,
        "type": "green",
        "date": "08/12/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100799",
        "quantity": 17,
        "comment": "Jeans"
      },
      {
        "id": 1054,
        "type": "orange",
        "date": "08/12/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100800",
        "quantity": 13,
        "comment": "Jeans"
      },
      {
        "id": 1055,
        "type": "green",
        "date": "08/12/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100801",
        "quantity": 26,
        "comment": "Robes"
      }
    ]
  },
  "2025-12-09": {
    "transfers": [
      {
        "id": 1056,
        "type": "green",
        "date": "09/12/2025",
        "status": "Confirmé",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100802",
        "quantity": 17,
        "comment": "Accessoires"
      },
      {
        "id": 1057,
        "type": "orange",
        "date": "09/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Casablanca",
        "documentNumber": "100803",
        "quantity": 18,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-12-10": {
    "transfers": [
      {
        "id": 1058,
        "type": "green",
        "date": "10/12/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100804",
        "quantity": 18,
        "comment": "Ceintures"
      },
      {
        "id": 1059,
        "type": "yellow",
        "date": "10/12/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 1060,
        "type": "orange",
        "date": "10/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100805",
        "quantity": 28,
        "comment": "Ceintures"
      },
      {
        "id": 1061,
        "type": "green",
        "date": "10/12/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Marrakech",
        "documentNumber": "100806",
        "quantity": 21,
        "comment": "Ceintures"
      }
    ]
  },
  "2025-12-11": {
    "transfers": [
      {
        "id": 1062,
        "type": "green",
        "date": "11/12/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100807",
        "quantity": 21,
        "comment": "Jeans"
      },
      {
        "id": 1063,
        "type": "orange",
        "date": "11/12/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      }
    ]
  },
  "2025-12-12": {
    "transfers": [
      {
        "id": 1064,
        "type": "orange",
        "date": "12/12/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100808",
        "quantity": 23,
        "comment": "T-shirts"
      },
      {
        "id": 1065,
        "type": "yellow",
        "date": "12/12/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 1066,
        "type": "green",
        "date": "12/12/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100809",
        "quantity": 28,
        "comment": "Robes"
      },
      {
        "id": 1067,
        "type": "green",
        "date": "12/12/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100810",
        "quantity": 14,
        "comment": "Ceintures"
      },
      {
        "id": 1068,
        "type": "blue",
        "date": "12/12/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100811",
        "quantity": 16,
        "comment": "Tops"
      }
    ]
  },
  "2025-12-13": {
    "transfers": [
      {
        "id": 1069,
        "type": "orange",
        "date": "13/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100812",
        "quantity": 13,
        "comment": "Pantalons"
      },
      {
        "id": 1070,
        "type": "green",
        "date": "13/12/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-12-14": {
    "transfers": [
      {
        "id": 1071,
        "type": "green",
        "date": "14/12/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Tanger",
        "documentNumber": "100813",
        "quantity": 20,
        "comment": "Pulls"
      },
      {
        "id": 1072,
        "type": "blue",
        "date": "14/12/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100814",
        "quantity": 21,
        "comment": "Robes"
      }
    ]
  },
  "2025-12-15": {
    "transfers": [
      {
        "id": 1073,
        "type": "green",
        "date": "15/12/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      },
      {
        "id": 1074,
        "type": "green",
        "date": "15/12/2025",
        "status": "Inventaire",
        "to": "stradi Tanger",
        "showBoxIcon": true
      }
    ]
  },
  "2025-12-16": {
    "transfers": [
      {
        "id": 1075,
        "type": "orange",
        "date": "16/12/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100815",
        "quantity": 21,
        "comment": "Tops"
      },
      {
        "id": 1076,
        "type": "blue",
        "date": "16/12/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 1077,
        "type": "blue",
        "date": "16/12/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100816",
        "quantity": 18,
        "comment": "Accessoires"
      },
      {
        "id": 1078,
        "type": "green",
        "date": "16/12/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      },
      {
        "id": 1079,
        "type": "blue",
        "date": "16/12/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100817",
        "quantity": 23,
        "comment": "Sacs"
      }
    ]
  },
  "2025-12-17": {
    "transfers": [
      {
        "id": 1080,
        "type": "blue",
        "date": "17/12/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100818",
        "quantity": 25,
        "comment": "Accessoires"
      },
      {
        "id": 1081,
        "type": "orange",
        "date": "17/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100819",
        "quantity": 8,
        "comment": "Pantalons"
      },
      {
        "id": 1082,
        "type": "green",
        "date": "17/12/2025",
        "status": "Confirmé",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100820",
        "quantity": 29,
        "comment": "Vestes"
      },
      {
        "id": 1083,
        "type": "blue",
        "date": "17/12/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100821",
        "quantity": 23,
        "comment": "Robes"
      }
    ]
  },
  "2025-12-18": {
    "transfers": [
      {
        "id": 1084,
        "type": "orange",
        "date": "18/12/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100822",
        "quantity": 26,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-12-19": {
    "transfers": [
      {
        "id": 1085,
        "type": "green",
        "date": "19/12/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100823",
        "quantity": 27,
        "comment": "Jeans"
      },
      {
        "id": 1086,
        "type": "blue",
        "date": "19/12/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100824",
        "quantity": 16,
        "comment": "Robes"
      },
      {
        "id": 1087,
        "type": "blue",
        "date": "19/12/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Agadir",
        "documentNumber": "100825",
        "quantity": 9,
        "comment": "Accessoires"
      },
      {
        "id": 1088,
        "type": "orange",
        "date": "19/12/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Fès",
        "documentNumber": "100826",
        "quantity": 7,
        "comment": "Shorts"
      }
    ]
  },
  "2025-12-20": {
    "transfers": [
      {
        "id": 1089,
        "type": "blue",
        "date": "20/12/2025",
        "status": "En cours",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100827",
        "quantity": 8,
        "comment": "Vestes"
      }
    ]
  },
  "2025-12-21": {
    "transfers": [
      {
        "id": 1090,
        "type": "green",
        "date": "21/12/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Agadir",
        "documentNumber": "100828",
        "quantity": 11,
        "comment": "Pantalons"
      },
      {
        "id": 1091,
        "type": "blue",
        "date": "21/12/2025",
        "status": "En cours",
        "from": "stradi Marrakech",
        "to": "stradi Rabat",
        "documentNumber": "100829",
        "quantity": 15,
        "comment": "Sacs"
      },
      {
        "id": 1092,
        "type": "orange",
        "date": "21/12/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100830",
        "quantity": 14,
        "comment": "Pantalons"
      },
      {
        "id": 1093,
        "type": "orange",
        "date": "21/12/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100831",
        "quantity": 20,
        "comment": "Sacs"
      }
    ]
  },
  "2025-12-22": {
    "transfers": [
      {
        "id": 1094,
        "type": "orange",
        "date": "22/12/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Fès",
        "documentNumber": "100832",
        "quantity": 28,
        "comment": "Chaussures"
      },
      {
        "id": 1095,
        "type": "orange",
        "date": "22/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100833",
        "quantity": 27,
        "comment": "Chemises"
      },
      {
        "id": 1096,
        "type": "green",
        "date": "22/12/2025",
        "status": "Confirmé",
        "from": "stradi Agadir",
        "to": "stradi Tanger",
        "documentNumber": "100834",
        "quantity": 26,
        "comment": "Jeans"
      },
      {
        "id": 1097,
        "type": "green",
        "date": "22/12/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100835",
        "quantity": 23,
        "comment": "Accessoires"
      }
    ]
  },
  "2025-12-23": {
    "transfers": [
      {
        "id": 1098,
        "type": "orange",
        "date": "23/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100836",
        "quantity": 22,
        "comment": "Pantalons"
      },
      {
        "id": 1099,
        "type": "yellow",
        "date": "23/12/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 1100,
        "type": "green",
        "date": "23/12/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100837",
        "quantity": 7,
        "comment": "Pulls"
      },
      {
        "id": 1101,
        "type": "orange",
        "date": "23/12/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Marrakech",
        "documentNumber": "100838",
        "quantity": 23,
        "comment": "Robes"
      },
      {
        "id": 1102,
        "type": "green",
        "date": "23/12/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Marrakech",
        "documentNumber": "100839",
        "quantity": 29,
        "comment": "Jeans"
      }
    ]
  },
  "2025-12-24": {
    "transfers": [
      {
        "id": 1103,
        "type": "green",
        "date": "24/12/2025",
        "status": "Confirmé",
        "from": "stradi Fès",
        "to": "stradi Rabat",
        "documentNumber": "100840",
        "quantity": 5,
        "comment": "T-shirts"
      },
      {
        "id": 1104,
        "type": "orange",
        "date": "24/12/2025",
        "status": "En attente",
        "from": "stradi Fès",
        "to": "stradi Casablanca",
        "documentNumber": "100841",
        "quantity": 18,
        "comment": "Vestes"
      },
      {
        "id": 1105,
        "type": "blue",
        "date": "24/12/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100842",
        "quantity": 17,
        "comment": "Chaussures"
      },
      {
        "id": 1106,
        "type": "orange",
        "date": "24/12/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Casablanca",
        "documentNumber": "100843",
        "quantity": 26,
        "comment": "Tops"
      },
      {
        "id": 1107,
        "type": "blue",
        "date": "24/12/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Casablanca",
        "documentNumber": "100844",
        "quantity": 20,
        "comment": "T-shirts"
      }
    ]
  },
  "2025-12-25": {
    "transfers": [
      {
        "id": 1108,
        "type": "blue",
        "date": "25/12/2025",
        "status": "Inventaire",
        "to": "stradi Casablanca",
        "showBoxIcon": true
      }
    ]
  },
  "2025-12-26": {
    "transfers": [
      {
        "id": 1109,
        "type": "green",
        "date": "26/12/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 1110,
        "type": "blue",
        "date": "26/12/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Tanger",
        "documentNumber": "100845",
        "quantity": 9,
        "comment": "Chemises"
      },
      {
        "id": 1111,
        "type": "blue",
        "date": "26/12/2025",
        "status": "En cours",
        "from": "stradi Rabat",
        "to": "stradi Fès",
        "documentNumber": "100846",
        "quantity": 22,
        "comment": "Chemises"
      },
      {
        "id": 1112,
        "type": "blue",
        "date": "26/12/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100847",
        "quantity": 15,
        "comment": "Sacs"
      }
    ]
  },
  "2025-12-27": {
    "transfers": [
      {
        "id": 1113,
        "type": "orange",
        "date": "27/12/2025",
        "status": "En attente",
        "from": "stradi Agadir",
        "to": "stradi Tanger",
        "documentNumber": "100848",
        "quantity": 5,
        "comment": "Pulls"
      },
      {
        "id": 1114,
        "type": "blue",
        "date": "27/12/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      }
    ]
  },
  "2025-12-28": {
    "transfers": [
      {
        "id": 1115,
        "type": "orange",
        "date": "28/12/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100849",
        "quantity": 5,
        "comment": "Robes"
      }
    ]
  },
  "2025-12-29": {
    "transfers": [
      {
        "id": 1116,
        "type": "green",
        "date": "29/12/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100850",
        "quantity": 25,
        "comment": "Pantalons"
      },
      {
        "id": 1117,
        "type": "yellow",
        "date": "29/12/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 1118,
        "type": "red",
        "date": "29/12/2025",
        "status": "annulé",
        "from": "stradi Rabat",
        "to": "stradi Marrakech",
        "documentNumber": "100851",
        "quantity": 26,
        "comment": "Pulls"
      },
      {
        "id": 1119,
        "type": "blue",
        "date": "29/12/2025",
        "status": "En cours",
        "from": "stradi Agadir",
        "to": "stradi Rabat",
        "documentNumber": "100852",
        "quantity": 16,
        "comment": "Chaussures"
      },
      {
        "id": 1120,
        "type": "green",
        "date": "29/12/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Rabat",
        "documentNumber": "100853",
        "quantity": 18,
        "comment": "Robes"
      }
    ]
  },
  "2025-12-30": {
    "transfers": [
      {
        "id": 1121,
        "type": "orange",
        "date": "30/12/2025",
        "status": "En attente",
        "from": "stradi Casablanca",
        "to": "stradi Fès",
        "documentNumber": "100854",
        "quantity": 23,
        "comment": "Shorts"
      },
      {
        "id": 1122,
        "type": "orange",
        "date": "30/12/2025",
        "status": "En attente",
        "from": "stradi Tanger",
        "to": "stradi Rabat",
        "documentNumber": "100855",
        "quantity": 12,
        "comment": "Jeans"
      },
      {
        "id": 1123,
        "type": "orange",
        "date": "30/12/2025",
        "status": "Inventaire",
        "to": "stradi Marrakech",
        "showBoxIcon": true
      },
      {
        "id": 1124,
        "type": "green",
        "date": "30/12/2025",
        "status": "Confirmé",
        "from": "stradi Casablanca",
        "to": "stradi Rabat",
        "documentNumber": "100856",
        "quantity": 26,
        "comment": "Accessoires"
      },
      {
        "id": 1125,
        "type": "blue",
        "date": "30/12/2025",
        "status": "En cours",
        "from": "stradi Casablanca",
        "to": "stradi Marrakech",
        "documentNumber": "100857",
        "quantity": 26,
        "comment": "Sacs"
      }
    ]
  },
  "2025-12-31": {
    "transfers": [
      {
        "id": 1126,
        "type": "orange",
        "date": "31/12/2025",
        "status": "En attente",
        "from": "stradi Marrakech",
        "to": "stradi Casablanca",
        "documentNumber": "100858",
        "quantity": 7,
        "comment": "Chemises"
      },
      {
        "id": 1127,
        "type": "green",
        "date": "31/12/2025",
        "status": "Confirmé",
        "from": "stradi Rabat",
        "to": "stradi Casablanca",
        "documentNumber": "100859",
        "quantity": 15,
        "comment": "Chaussures"
      },
      {
        "id": 1128,
        "type": "yellow",
        "date": "31/12/2025",
        "status": "Inventaire",
        "to": "stradi Fès",
        "showBoxIcon": true
      },
      {
        "id": 1129,
        "type": "orange",
        "date": "31/12/2025",
        "status": "En attente",
        "from": "stradi Rabat",
        "to": "stradi Agadir",
        "documentNumber": "100860",
        "quantity": 16,
        "comment": "Chaussures"
      }
    ]
  }
}
// Date par défaut
export const defaultDate = new Date(2021, 1, 25); // 25 février 2021

// Fonctions utilitaires pour les couleurs


