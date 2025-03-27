import React, { useState } from 'react';
import { Boxes, Edit, X } from 'lucide-react';
import { transfersData ,destinations} from '../calendrier_transfert/data';
import Swal from 'sweetalert2';
import '../Css/Planification_Inventaires.css';

const Planification_Inventaires = () => {
  const [inventories, setInventories] = useState(
    Object.values(transfersData)
      .flatMap(dateData => 
        dateData.transfers.filter(transfer => 
          transfer.status === 'Inventaire'
        )
      )
  );

  

  const addInventory = () => {
    if (date && destination) {
      const newInventory = {
        id: Date.now(),
        date,
        to: destination,
        status: 'Inventaire',
        showBoxIcon: true
      };
      setInventories([...inventories, newInventory]);
      setDate('');
      setDestination('');
    }
  };

  const removeInventory = (id) => {
    Swal.fire({
      background: 'transparent',
      color: 'white',
      customClass: {
        popup: 'custom-swal-popup',
        confirmButton: 'custom-swal-confirm-button',
        cancelButton: 'custom-swal-cancel-button',
        actions: 'custom-swal-actions'
      },
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas annuler cette action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
      buttonsStyling: false,
      focusConfirm: false,
      didOpen: () => {
        // Style supplémentaire si nécessaire
        const style = document.createElement('style');
        style.textContent = `
          .custom-swal-popup { border-radius: 50px; }
          .custom-swal-confirm-button { 
            background-color: rgba(255, 0, 0, 0.454) !important; 
            color: white !important;
            transition: 0.5s;
            border-radius: 50px !important;
            padding: 8px 20px !important;
          }
            .custom-swal-confirm-button:hover { 
            background-color: red !important; 
            color: white !important;
            border: none !important;
            border-radius: 50px !important;
            padding: 8px 20px !important;
            cursor: pointer;
          } 
          .custom-swal-cancel-button { 
            background-color: rgba(255, 166, 0, 0.394) !important; 
            color: white !important;
            transition: 0.5s;
            border: none !important;
            border-radius: 50px !important;
            padding: 8px 20px !important;
          }
            .custom-swal-cancel-button:hover { 
            background-color: orange !important; 
            color: white !important;
            border: none !important;
            border-radius: 50px !important;
            padding: 8px 20px !important;
            cursor: pointer;
          } 
          .swal2-actions {
            display: flex !important;
            justify-content: center !important;
            gap: 1rem !important;
          }
        `;
        document.head.appendChild(style);
      }
    }).then((result) => {
      if (result.isConfirmed) {
        setInventories(inventories.filter(inv => inv.id !== id));
        
        Swal.fire({
          background: 'transparent',
          title: '<span class="text-white">Supprimé!</span>',
          html: '<span class="text-white">L\'inventaire a été supprimé.</span>',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
          customClass: {
            popup: 'bg-transparent',
            title: 'text-white',
            content: 'text-white'
          }
        });
      }
    });
  };
  const editInventory = (inventory) => {
    Swal.fire({
      background: '#007bff45',
      color: 'white',
      customClass: {
        popup: 'custom-swal-popup',
        input: 'custom-swal-input',
        confirmButton: 'custom-swal-confirm-button',
        actions: 'custom-swal-actions'
      },
      title: 'Modifier l\'inventaire',
      html: `
        <style>
          .custom-swal-popup { border-radius: 50px; }
          .custom-swal-input { 
            border: 1px solid white !important; 
            color: white !important;
            background: transparent !important;
          }
          .custom-swal-input::placeholder { color: rgba(255,255,255,0.7) !important; }
          .custom-swal-confirm-button { 
            background-color: white !important; 
            color: blue !important; 
          }
          .custom-swal-actions {
            margin-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .swal2-actions {
            display: flex !important;
            justify-content: center !important;
            gap: 1rem !important;
          }
          .swal-button-container {
            margin: 0 !important;
          }
          option {
            color: black;
          }
        </style>
        <input id="swal-input-date" type="date" class="swal2-input custom-swal-input" value="${inventory.date}">
        <select id="swal-input-destination" class="swal2-input custom-swal-input">
          ${destinations.map(dest => 
            `<option value="${dest}" ${inventory.to === dest ? 'selected' : ''}>${dest}</option>`
          ).join('')}
        </select>
        <div class="w-full flex justify-center space-x-4 pb-4 mt-4">
          <button id="close-btn" class="bg-transparent border text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
          <button id="confirm-btn" class="bg-transparent border text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </button>
        </div>
      `,
      focusConfirm: false,
      showConfirmButton: false,
      showCancelButton: false,
      preConfirm: () => {
        return {
          date: document.getElementById('swal-input-date').value,
          destination: document.getElementById('swal-input-destination').value
        };
      },
      didOpen: () => {
        document.getElementById('confirm-btn').addEventListener('click', () => {
          Swal.close({ 
            isConfirmed: true, 
            value: {
              date: document.getElementById('swal-input-date').value,
              destination: document.getElementById('swal-input-destination').value
            }
          });
        });
        
        document.getElementById('close-btn').addEventListener('click', () => {
          Swal.close();
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedInventories = inventories.map(inv => 
          inv.id === inventory.id 
            ? {...inv, date: result.value.date, to: result.value.destination} 
            : inv
        );
        setInventories(updatedInventories);
        
        Swal.fire({
          background: 'transparent',
          title: '<span class="text-white">Confirmé!</span>',
          html: '<span class="text-white">Les modifications ont été enregistrées.</span>',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
          customClass: {
            popup: 'bg-transparent',
            title: 'text-white',
            content: 'text-white'
          }
        });
      }
    });
  };

  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <div className="w-300 relative">
      <div className="bg-white rounded-2xl border-3 p-4 text-center">
        <div className="mb-4">
          <Boxes strokeWidth={0.75} size={60} className="mx-auto mb-3" />
          
          <div className="mb-3 flex space-x-2">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-1/2 px-3 py-2 border rounded-lg"
            />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-1/2 px-3 py-2 border rounded-lg"
            >
              <option value="">Sélectionnez une destination</option>
              {destinations.map((dest, index) => (
                <option key={index} value={dest}>{dest}</option>
              ))}
            </select>
          </div>

          <button
            onClick={addInventory}
            className="import_btn"
          >
            Ajouter L' inventaire
          </button>
        </div>
      </div>
      <br />
      <div className="bg-white rounded-2xl border-3 p-4 mb-4 h-40 overflow-y-auto">
        <h3 className="font-medium text-gray-700 mb-2 text-center">
          Liste des Inventaires
          <span className={`ml-2 px-2 py-1 rounded-full text-xs text-white ${inventories.length === 0 ? 'bg-red-500' : 'bg-green-500'}`}>
            {inventories.length}
          </span>
        </h3>
        <ul className="space-y-2">
          {inventories.map((inventory) => (
            <li 
              key={inventory.id} 
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              <span className="truncate flex-1">
                {inventory.to} - {inventory.date || 'Date non spécifiée'}
                {inventory.comment ? ` - ${inventory.comment}` : ''}
              </span>
              <div className="flex items-center">
                <button
                  onClick={() => editInventory(inventory)}
                  className="edit_Inv mr-2"
                >
                  <Edit  size={16} />
                </button>
                <button
                  onClick={() => removeInventory(inventory.id)}
                  className="remove_Inv "
                >
                  <X size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Planification_Inventaires;