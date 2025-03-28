import React, { useState } from 'react';
import { Boxes, Edit, HousePlus, X } from 'lucide-react';
import { transfersData, magasinsList } from '../calendrier_transfert/data';
import Swal from 'sweetalert2';
import '../Css/Magasin.css';

const Add_Magasin = () => {
  // Utiliser la liste des magasins existants comme état initial
  const [magasins, setMagasins] = useState(magasinsList);

  const [newMagasin, setNewMagasin] = useState({
    codeInditex: '',
    nomMagasin: '',
    codeFutura: '',
    statut: 'active'
  });

  const addMagasin = () => {
    // Validation des champs
    if (!newMagasin.codeInditex || !newMagasin.nomMagasin || !newMagasin.codeFutura) {
      Swal.fire({
        background: 'transparent',
        title: '<span class="text-white">Champs manquants!</span>',
        html: '<span class="text-white">Veuillez remplir tous les champs obligatoires.</span>',
        icon: 'warning',
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: 'bg-transparent',
          title: 'text-white',
          content: 'text-white'
        }
      });
      return;
    }

    // Vérifier si le code Inditex existe déjà
    const codeExists = magasins.some(
      mag => mag.codeInditex.toLowerCase() === newMagasin.codeInditex.toLowerCase()
    );

    if (codeExists) {
      Swal.fire({
        background: 'transparent',
        title: '<span class="text-white">Code existant!</span>',
        html: '<span class="text-white">Ce code Inditex est déjà utilisé.</span>',
        icon: 'error',
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: 'bg-transparent',
          title: 'text-white',
          content: 'text-white'
        }
      });
      return;
    }

    const magasinToAdd = {
      id: Date.now(),
      codeInditex: newMagasin.codeInditex,
      nomMagasin: newMagasin.nomMagasin,
      codeFutura: newMagasin.codeFutura,
      statut: newMagasin.statut,
      status: 'Inventaire',
      showBoxIcon: true
    };
    
    setMagasins([...magasins, magasinToAdd]);
    setNewMagasin({
      codeInditex: '',
      nomMagasin: '',
      codeFutura: '',
      statut: 'active'
    });

    Swal.fire({
      background: 'transparent',
      title: '<span class="text-white">Succès!</span>',
      html: '<span class="text-white">Le magasin a été ajouté avec succès.</span>',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      customClass: {
        popup: 'bg-transparent',
        title: 'text-white',
        content: 'text-white'
      }
    });
  };
  const removeMagasin = (id) => {
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
        setMagasins(magasins.filter(mag => mag.id !== id));
        
        Swal.fire({
          background: 'transparent',
          title: '<span class="text-white">Supprimé!</span>',
          html: '<span class="text-white">Le magasin a été supprimé.</span>',
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
  const editMagasin = (magasin) => {
    Swal.fire({
      background: '#007bff45',
      color: 'white',
      customClass: {
        popup: 'custom-swal-popup',
        input: 'custom-swal-input',
        confirmButton: 'custom-swal-confirm-button',
        actions: 'custom-swal-actions'
      },
      title: 'Modifier le magasin',
      html: `
        <style>
          .custom-swal-popup { border-radius: 50px; }
          .custom-swal-input { 
            border: 1px solid white !important; 
            color: white !important;
            background: transparent !important;
            margin-bottom: 10px;
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
        <input id="swal-input-codeInditex" type="text" class="swal2-input custom-swal-input" 
          value="${magasin.codeInditex}" placeholder="Code Inditex">
        <input id="swal-input-nomMagasin" type="text" class="swal2-input custom-swal-input" 
          value="${magasin.nomMagasin}" placeholder="Nom du magasin">
        <input id="swal-input-codeFutura" type="text" class="swal2-input custom-swal-input" 
          value="${magasin.codeFutura}" placeholder="Code Futura">
        <select id="swal-input-statut" class="swal2-input custom-swal-input">
          <option value="active" ${magasin.statut === 'active' ? 'selected' : ''}>Actif</option>
          <option value="inactive" ${magasin.statut === 'inactive' ? 'selected' : ''}>Inactif</option>
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
          codeInditex: document.getElementById('swal-input-codeInditex').value,
          nomMagasin: document.getElementById('swal-input-nomMagasin').value,
          codeFutura: document.getElementById('swal-input-codeFutura').value,
          statut: document.getElementById('swal-input-statut').value
        };
      },
      didOpen: () => {
        document.getElementById('confirm-btn').addEventListener('click', () => {
          Swal.close({ 
            isConfirmed: true, 
            value: {
              codeInditex: document.getElementById('swal-input-codeInditex').value,
              nomMagasin: document.getElementById('swal-input-nomMagasin').value,
              codeFutura: document.getElementById('swal-input-codeFutura').value,
              statut: document.getElementById('swal-input-statut').value
            }
          });
        });
        
        document.getElementById('close-btn').addEventListener('click', () => {
          Swal.close();
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedMagasins = magasins.map(mag => 
          mag.id === magasin.id 
            ? {
                ...mag, 
                codeInditex: result.value.codeInditex,
                nomMagasin: result.value.nomMagasin,
                codeFutura: result.value.codeFutura,
                statut: result.value.statut
              } 
            : mag
        );
        setMagasins(updatedMagasins);
        
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMagasin(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-300 relative">
      <div className="bg-white rounded-2xl border-3 p-4 text-center">
        <div className="mb-4">
          <HousePlus strokeWidth={0.75} size={60} className="mx-auto mb-3" />
          
          <div className="mb-3 grid grid-cols-4 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Code Inditex</label>
              <input
                type="text"
                name="codeInditex"
                value={newMagasin.codeInditex}
                onChange={handleInputChange}
                placeholder="IND001"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom du magasin</label>
              <input
                type="text"
                name="nomMagasin"
                value={newMagasin.nomMagasin}
                onChange={handleInputChange}
                placeholder="stradi Casablanca"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Code Futura</label>
              <input
                type="text"
                name="codeFutura"
                value={newMagasin.codeFutura}
                onChange={handleInputChange}
                placeholder="FUT001"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <select
                name="statut"
                value={newMagasin.statut}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="active">Actif</option>
                <option value="inactive">Inactif</option>
              </select>
            </div>
          </div>

          <button
            onClick={addMagasin}
            className="import_btn"
          >
            Ajouter Magasin
          </button>
        </div>
      </div>
      <br />
      <div className="bg-white rounded-2xl border-3 p-4 mb-4 max-h-96 overflow-y-auto">
        <h3 className="font-medium text-gray-700 mb-2 text-center">
          Liste des Magasins
          <span className={`ml-2 px-2 py-1 rounded-full text-xs text-white ${magasins.length === 0 ? 'bg-red-500' : 'bg-green-500'}`}>
            {magasins.length}
          </span>
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Code Inditex</th>
                <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Nom du magasin</th>
                <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Code Futura</th>
                <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              {magasins.map((magasin) => (
                <tr key={magasin.id}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{magasin.codeInditex}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{magasin.nomMagasin}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{magasin.codeFutura}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${magasin.statut === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {magasin.statut === 'active' ? 'Actif' : 'Inactif'}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => editMagasin(magasin)}
                        className="edit_Inv p-1 rounded-full hover:bg-blue-100"
                        title="Modifier"
                      >
                        <Edit size={16}  />
                      </button>
                      <button
                        onClick={() => removeMagasin(magasin.id)}
                        className="remove_Inv p-1 rounded-full hover:bg-red-100"
                        title="Supprimer"
                      >
                        <X size={16}  />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Add_Magasin;