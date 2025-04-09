import React, { useState, useEffect } from 'react';
import { Boxes, Edit, X } from 'lucide-react';
import Swal from 'sweetalert2';
import '../Css/Planification_Inventaires.css';

const Planification_Inventaires = () => {
  const [inventories, setInventories] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newInventory, setNewInventory] = useState({
    date: '',
    destination: '',
    comment: '',
    status: 'En attente'
  });

  // Helper function to get auth headers
  const getAuthHeaders = (includeContentType = true) => {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    
    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
    }
    
    return headers;
  };
// Fetch inventories and destinations on component mount
useEffect(() => {
  const fetchData = async () => {
    try {
      const [inventoriesRes, magasinsRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/inventories`, {
          headers: getAuthHeaders(false)
        }),
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/magasins`, {
          headers: getAuthHeaders(false)
        })
      ]);

      if (!inventoriesRes.ok) {
        const errorData = await inventoriesRes.json();
        throw new Error(errorData.message || 'Failed to fetch inventories');
      }
      
      if (!magasinsRes.ok) {
        const errorData = await magasinsRes.json();
        throw new Error(errorData.message || 'Failed to fetch magasins');
      }

      const inventoriesData = await inventoriesRes.json();
      const magasinsData = await magasinsRes.json();

      setInventories(inventoriesData.data);
      
      // Filtrer uniquement les magasins actifs
      const activeMagasins = magasinsData.data.filter(m => m.statut === 'active');
      setDestinations(activeMagasins.map(m => m.nomMagasin));
      
      setLoading(false);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
      setLoading(false);
      showErrorAlert(err.message);
    }
  };

  fetchData();
}, []);

  const showErrorAlert = (message) => {
    Swal.fire({
      background: 'transparent',
      title: '<span class="text-white">Erreur!</span>',
      html: `<span class="text-white">${message}</span>`,
      icon: 'error',
      timer: 2000,
      showConfirmButton: false,
      customClass: {
        popup: 'bg-transparent',
        title: 'text-white',
        content: 'text-white'
      }
    });
  };

  const showSuccessAlert = (message) => {
    Swal.fire({
      background: 'transparent',
      title: '<span class="text-white">Succès!</span>',
      html: `<span class="text-white">${message}</span>`,
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

  const addInventory = async () => {
    if (!newInventory.date || !newInventory.destination) {
      Swal.fire({
        background: 'transparent',
        title: '<span class="text-white">Champs manquants!</span>',
        html: '<span class="text-white">Veuillez remplir la date et la destination.</span>',
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

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/inventories`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          date: newInventory.date,
          destination: newInventory.destination,
          comment: newInventory.comment,
          status: newInventory.status
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create inventory');
      }

      const createdInventory = await response.json();
      setInventories([...inventories, createdInventory.data]);
      setNewInventory({ date: '', destination: '', comment: '', status: 'En attente' });
      showSuccessAlert('L\'inventaire a été En attente avec succès');
    } catch (err) {
      console.error('Add inventory error:', err);
      showErrorAlert(err.message);
    }
  };

  const removeInventory = async (id) => {
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/inventories/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders(false)
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete inventory');
          }

          setInventories(inventories.filter(inv => inv._id !== id));
          showSuccessAlert('L\'inventaire a été supprimé');
        } catch (err) {
          console.error('Delete inventory error:', err);
          showErrorAlert(err.message);
        }
      }
    });
  };

  const editInventory = async (inventory) => {
    Swal.fire({
      background: 'white',
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
          .custom-swal-popup { border-radius: 50px; color: black !important; }
          .custom-swal-input { 
            border: 1px solid black !important; 
            color: black !important;
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
        <input id="swal-input-date" type="date" class="swal2-input custom-swal-input" 
          value="${inventory.date.split('T')[0]}" placeholder="Date">
        <select id="swal-input-destination" class="swal2-input custom-swal-input">
          ${destinations.map(dest => 
            `<option value="${dest}" ${inventory.destination === dest ? 'selected' : ''}>${dest}</option>`
          ).join('')}
        </select>
        <select id="swal-input-status" class="swal2-input custom-swal-input">
          <option value="En attente" ${inventory.status === 'En attente' ? 'selected' : ''}>En attente</option>
          <option value="En cours" ${inventory.status === 'En cours' ? 'selected' : ''}>En cours</option>
          <option value="Confirmé" ${inventory.status === 'Confirmé' ? 'selected' : ''}>Confirmé</option>
          <option value="annulé" ${inventory.status === 'annulé' ? 'selected' : ''}>annulé</option>
        </select>
        <input id="swal-input-comment" type="text" class="swal2-input custom-swal-input" 
          value="${inventory.comment || ''}" placeholder="Commentaire (optionnel)">
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
          destination: document.getElementById('swal-input-destination').value,
          status: document.getElementById('swal-input-status').value,
          comment: document.getElementById('swal-input-comment').value
        };
      },
      didOpen: () => {
        document.getElementById('confirm-btn').addEventListener('click', () => {
          Swal.close({ 
            isConfirmed: true, 
            value: {
              date: document.getElementById('swal-input-date').value,
              destination: document.getElementById('swal-input-destination').value,
              status: document.getElementById('swal-input-status').value,
              comment: document.getElementById('swal-input-comment').value
            }
          });
        });
        
        document.getElementById('close-btn').addEventListener('click', () => {
          Swal.close();
        });
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/inventories/${inventory._id}`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify({
              date: result.value.date,
              destination: result.value.destination,
              status: result.value.status,
              comment: result.value.comment
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update inventory');
          }

          const updatedInventory = await response.json();
          setInventories(inventories.map(inv => 
            inv._id === inventory._id ? updatedInventory.data : inv
          ));
          showSuccessAlert('Les modifications ont été enregistrées');
        } catch (err) {
          console.error('Update inventory error:', err);
          showErrorAlert(err.message);
        }
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInventory(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="w-300 relative flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-300 relative bg-white rounded-2xl text-blue-900 border-3 p-4 text-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-300 relative">
      <div className="bg-white rounded-2xl text-blue-900 border-3 p-4 text-center">
        <div className="mb-4">
          <Boxes strokeWidth={0.75} size={60} className="mx-auto mb-3 text-blue-900" />
          
          <div className="mb-3 grid grid-cols-4 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={newInventory.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
              <select
                name="destination"
                value={newInventory.destination}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">Sélectionnez une destination</option>
                {destinations.map((dest, index) => (
                  <option key={index} value={dest}>{dest}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <select
                name="status"
                value={newInventory.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="En attente">En attente</option>
                <option value="En cours">En cours</option>
                <option value="Confirmé">Confirmé</option>
                <option value="annulé">annulé</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Commentaire</label>
              <input
                type="text"
                name="comment"
                value={newInventory.comment}
                onChange={handleInputChange}
                placeholder="Optionnel"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>

          <button
            onClick={addInventory}
            className="addInventory_btn"
          >
            Planifier Inventaire
          </button>
        </div>
      </div>
      <br />
      <div className="bg-white rounded-2xl border-3 p-4 mb-4 max-h-96 overflow-y-auto text-blue-900">
        <h3 className="font-medium text-gray-700 mb-2 text-center">
          Liste des Inventaires En attentes
          <span className={`ml-2 px-2 py-1 rounded-full text-xs text-white ${inventories.length === 0 ? 'bg-red-500' : 'bg-green-500'}`}>
            {inventories.length}
          </span>
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Commentaire</th>
                <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              {inventories.length > 0 ? (
                inventories.map((inventory) => (
                  <tr key={inventory._id}>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                      {inventory.date ? new Date(inventory.date).toLocaleDateString() : 'Non spécifiée'}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                      {inventory.destination}
                    </td>
                    <td className={`px-4 py-2 whitespace-nowrap text-sm ${
                      inventory.status === 'En attente' ? 'text-orange-500' :
                      inventory.status === 'En cours' ? 'text-blue-600' :
                      inventory.status === 'Confirmé' ? 'text-green-600' :
                      'text-red-600'
                    }`}>
                      {inventory.status}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                      {inventory.comment || '-'}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => editInventory(inventory)}
                          className="edit_Inv p-1 rounded-full hover:bg-blue-100"
                          title="Modifier"
                        >
                          <Edit size={16}  />
                        </button>
                        <button
                          onClick={() => removeInventory(inventory._id)}
                          className="remove_Inv p-1 rounded-full hover:bg-red-100"
                          title="Supprimer"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-4 text-center text-sm text-gray-500">
                    Aucun inventaire En attente
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Planification_Inventaires;