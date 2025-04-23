    import React, { useState, useEffect, useRef } from 'react';
    import FilterComponent from '../filter/FilterComponents';
    import '../Css/calendriertransfer.css';
    import { PanelLeft, PanelLeftOpen } from 'lucide-react';
    import Swal from 'sweetalert2';
    import withReactContent from 'sweetalert2-react-content';
    import logo from "/Logo-nesk-investment@2x.png";
    import MiniCalendar from './MiniCalendar';
    import TransferLegend from './TransferLegend';
    import MainCalendarHeader from './MainCalendarHeader';
    import CalendarGrid from './CalendarGrid';
    import axios from 'axios';

    const MySwal = withReactContent(Swal);
    export const defaultDate = new Date(2021, 1, 25); // 25 février 2021
    export const daysOfWeek = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];

    export const transferLegend = [
      { type: 'blue', label: 'En cours' },
      { type: 'green', label: 'Confirmé' },
      { type: 'orange', label: 'En attente' },
      { type: 'red', label: 'Annulé' },
      { type: 'yellow', label: 'Inventaire' },
      { type: 'manual', label: 'Transferts manuels' } // Nouvel élément
    ];

    export const colorUtils = {
      getDotColor: (type) => {
        switch (type) {
          case 'blue': return 'bg-blue-500';
          case 'green': return 'bg-green-500';
          case 'orange': return 'bg-orange-500';
          case 'red': return 'bg-red-500';
          case 'yellow': return 'bg-yellow-500';
          case 'manual': return 'bg-black'; // Nouvelle couleur
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
          case 'manual': return 'border-black'; // Nouvelle couleur
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
          case 'manual': return 'bg-black-50'; // Nouvelle couleur
          default: return '';
        }
      }
    };
    const CalendrierTransferts = () => {
      const [currentMonth, setCurrentMonth] = useState(() => {
        const date = new Date();
        return isNaN(date.getTime()) ? new Date() : date;
      });
      const [filterDirection, setFilterDirection] = useState({
        from: true,
        to: true
      });
      const [miniCalendarDays, setMiniCalendarDays] = useState([]);
      const [selectedDay, setSelectedDay] = useState(defaultDate.getDate());
      const [selectedDayEvents, setSelectedDayEvents] = useState([]);
      const [selectedWeek, setSelectedWeek] = useState(null);
      const [transfersData, setTransfersData] = useState({});
      const [selectedTransfer, setSelectedTransfer] = useState(null);
      const [isMiniCalendarVisible, setIsMiniCalendarVisible] = useState(true);
      const [allTransfers, setAllTransfers] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState(null);
      const hoverAreaRef = useRef(null);
      const sidebarRef = useRef(null);
      const [selectedWarehouses, setSelectedWarehouses] = useState([]);
      const { getDotColor, getBorderColor, getBgColor } = colorUtils;
      const [filter, setFilter] = useState('all');
      const [activeFilter, setActiveFilter] = useState('all');
      const [activeLegend, setActiveLegend] = useState([]);
      const [warehouses, setWarehouses] = useState([]);    const api = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const fetchWarehouses = async () => {
        try {
          const api = getApi();
          const response = await api.get('/api/magasins');
          const magasins = response.data.data || response.data;
          setWarehouses(magasins);
        } catch (err) {
          console.error('Erreur lors du chargement des magasins:', err);
          MySwal.fire({
            title: 'Erreur',
            text: 'Impossible de charger la liste des magasins',
            icon: 'error'
          });
        }
      };
      // Charger tous les transferts
      // Setup the API instance with proper token handling
    const setupApi = () => {
      const token = localStorage.getItem('token');
      
      // Create axios instance with token if available
      return axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        }
      });
    };

    // Use this function before each API call to ensure token is fresh
    const getApi = () => {
      // Get a fresh token in case it was updated
      const token = localStorage.getItem('token');
      const api = setupApi();
      
      // Add response interceptor to handle 401 errors globally
      api.interceptors.response.use(
        response => response,
        error => {
          if (error.response && error.response.status === 401) {
            // Handle unauthorized error
            console.error('Session expired or unauthorized');
            
            // Show notification
            MySwal.fire({
              title: 'Session expirée',
              text: 'Votre session a expiré, veuillez vous reconnecter',
              icon: 'warning'
            });
            
            // Clear storage and reset user state
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            
            // Force page reload to redirect to login
            window.location.reload();
          }
          return Promise.reject(error);
        }
      );
      
      return api;
    };

    // Replace your existing fetchAllTransfers function with this:
    const fetchAllTransfers = async () => {
      try {
        setIsLoading(true);
        const api = getApi();
        
        // Fetch en parallèle pour meilleure performance
        const [transfersResponse, inventoriesResponse, manualTransfersResponse] = await Promise.all([
          api.get('/api/transfers'),
          fetchAllInventories(),
          getManualTransfers()
        ]);
        
        const mergedData = mergeTransfersAndInventories(
          transfersResponse.data, 
          inventoriesResponse,
          manualTransfersResponse
        );
        
        setAllTransfers(mergedData);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        // Only show error if it's not a 401 (that's handled by interceptor)
        if (!err.response || err.response.status !== 401) {
          MySwal.fire({
            title: 'Erreur',
            text: 'Impossible de charger les données',
            icon: 'error'
          });
        }
      }
    };
    const updateManualTransfer = async (id, transferData) => {
      try {
        console.log("Données avant envoi API:", transferData);
        
        // Vérification explicite des valeurs
        if (!transferData.fromLocation || !transferData.toLocation) {
          console.error("IDs de magasins manquants:", {
            fromLocation: transferData.fromLocation,
            toLocation: transferData.toLocation
          });
          throw new Error("Les IDs des magasins source et destination sont requis");
        }
        
        const api = getApi();
        const dataToSend = {
          transferDate: transferData.transferDate,
          fromLocation: transferData.fromLocation, // Assurez-vous que c'est bien l'ID
          toLocation: transferData.toLocation,     // Assurez-vous que c'est bien l'ID
          status: transferData.status,
          totalQuantity: transferData.totalQuantity,
          items: transferData.items || []
        };
        
        console.log("Données envoyées à l'API:", dataToSend);
        
        const response = await api.put(`/api/transfers-manuel/${id}`, dataToSend);
        
        console.log("Réponse API:", response.data);
        await fetchAllTransfers();
        return response.data;
      } catch (err) {
        console.error("Erreur complète:", err);
        MySwal.fire({
          title: 'Erreur',
          text: err.response?.data?.message || err.message || 'Erreur lors de la mise à jour du transfert manuel',
          icon: 'error',
        });
        throw err;
      }
    };
  // Dans votre fichier API (ex: transferService.js)
  const getManualTransfers = async () => {
    try {
      const api = getApi(); // Utilisez votre instance axios configurée
      const response = await api.get('/api/transfers-manuel');
      return response.data;
    } catch (error) {
      console.error('Error fetching manual transfers:', error);
      throw error;
    }
  };
    // Update fetchAllInventories to use getApi()
    const fetchAllInventories = async () => {
      try {
        const api = getApi();
        const response = await api.get('/api/inventories');
        return response.data;
      } catch (err) {
        console.error('Erreur lors du chargement des inventaires:', err);
        // Only show error if it's not a 401 (that's handled by interceptor)
        if (!err.response || err.response.status !== 401) {
          MySwal.fire({
            title: 'Erreur',
            text: 'Impossible de charger les inventaires',
            icon: 'error'
          });
        }
        return { success: false, data: {} };
      }
    };

    // Update fetchTransfersByPeriod to use getApi()






    const deleteInventory = async (id) => {
      try {
        const api = getApi();
        await api.delete(`/api/inventories/${id}`);
        await fetchAllTransfers(); // Refresh all data
        MySwal.fire({
          title: 'Succès',
          text: 'Inventaire supprimé avec succès',
          icon: 'success'
        });
      } catch (err) {
        if (!err.response || err.response.status !== 401) {
          MySwal.fire({
            title: 'Erreur',
            text: err.response?.data?.message || 'Erreur lors de la suppression de l\'inventaire',
            icon: 'error'
          });
        }
      }
    };
    const createTransfer = async (transferData) => {
      try {
        const api = getApi();
        // Vérifier que les IDs des magasins sont valides
        const magasinsResponse = await api.get('/api/magasins');
        const magasins = magasinsResponse.data.data || magasinsResponse.data;
    
        const fromMagasin = magasins.find((m) => m._id === transferData.from || m.id === transferData.from);
        const toMagasin = magasins.find((m) => m._id === transferData.to || m.id === transferData.to);
    
        if (!fromMagasin || !toMagasin) {
          throw new Error('Magasin source ou destination introuvable');
        }
    
        const response = await api.post('/api/transfers', {
          ...transferData,
          from: fromMagasin._id || fromMagasin.id, // Envoyer l'ID
          to: toMagasin._id || toMagasin.id, // Envoyer l'ID
          Date: transferData.Date || new Date().toISOString().split('T')[0],
          documentNumber: transferData.Document_Number || transferData.documentNumber,
        });
        await fetchAllTransfers();
        return response.data;
      } catch (err) {
        if (!err.response || err.response.status !== 401) {
          MySwal.fire({
            title: 'Erreur',
            text: err.response?.data?.message || 'Erreur lors de la création du transfert',
            icon: 'error',
          });
        }
        throw err;
      }
    };



    const mergeTransfersAndInventories = (transfersResponse, inventoriesResponse, manualTransfersResponse) => {
      const mergedData = {};
    
      const getMagasinName = (magasinId) => {
        if (!magasinId) return 'Magasin inconnu';
        const magasin = warehouses.find((wh) => 
          wh._id === magasinId || 
          wh.id === magasinId || 
          (typeof magasinId === 'object' && (wh._id === magasinId._id || wh.id === magasinId.id))
        );
        return magasin ? magasin.nomMagasin : 'Magasin inconnu';
      };
    
      // Traitement des transferts
      if (transfersResponse?.data) {
        transfersResponse.data.forEach((transfer) => {
          const dateKey = formatDateToKey(transfer.Date);
          if (!mergedData[dateKey]) {
            mergedData[dateKey] = {
              date: new Date(transfer.Date).getDate().toString(),
              transfers: [],
            };
          }
    
          mergedData[dateKey].transfers.push({
            ...transfer,
            isInventory: false,
            isManualTransfer: false,
            documentNumber: transfer.Document_Number,
            date: formatDateString(transfer.Date),
            Date: transfer.Date,
            from: transfer.from?._id || transfer.from, // Conserver l'ID
            to: transfer.to?._id || transfer.to,       // Conserver l'ID
            fromName: transfer.from?.nomMagasin || 'Magasin inconnu', // Utiliser nomMagasin
            toName: transfer.to?.nomMagasin || 'Magasin inconnu',     // Utiliser nomMagasin
          });
        });
      }
    
      // Traitement des inventaires
      if (inventoriesResponse?.data) {
        if (Array.isArray(inventoriesResponse.data)) {
          inventoriesResponse.data.forEach((inventory) => {
            const dateKey = formatDateToKey(inventory.date);
            if (!mergedData[dateKey]) {
              mergedData[dateKey] = {
                date: new Date(inventory.date).getDate().toString(),
                transfers: [],
              };
            }
    
            mergedData[dateKey].transfers.push(createInventoryObject(inventory));
          });
        } else {
          Object.entries(inventoriesResponse.data).forEach(([dateKey, inventories]) => {
            const inventoryList = Array.isArray(inventories) ? inventories : [inventories];
    
            if (!mergedData[dateKey]) {
              mergedData[dateKey] = {
                date: new Date(dateKey).getDate().toString(),
                transfers: [],
              };
            }
    
            inventoryList.forEach((inventory) => {
              mergedData[dateKey].transfers.push(createInventoryObject(inventory));
            });
          });
        }
      }
    
      // Traitement des transferts manuels
      if (manualTransfersResponse?.data) {
        manualTransfersResponse.data.forEach((manualTransfer) => {
          const dateKey = formatDateToKey(manualTransfer.transferDate);
          if (!mergedData[dateKey]) {
            mergedData[dateKey] = {
              date: new Date(manualTransfer.transferDate).getDate().toString(),
              transfers: [],
            };
          }
    
          mergedData[dateKey].transfers.push({
            _id: manualTransfer._id,
            from: manualTransfer.fromLocation?._id,
            to: manualTransfer.toLocation?._id,
            fromName: manualTransfer.fromLocation?.nomMagasin || 'Magasin inconnu',
            toName: manualTransfer.toLocation?.nomMagasin || 'Magasin inconnu',
            fromLocationId: manualTransfer.fromLocation?._id,
            toLocationId: manualTransfer.toLocation?._id,
            status: manualTransfer.status,
            type: getManualTransferTypeColor(manualTransfer.status),
            isInventory: false,
            isManualTransfer: true,
            showBoxIcon: false,
            quantity: manualTransfer.totalQuantity,
            Document_Number: `MAN-${manualTransfer._id.toString().slice(-6)}`,
            date: formatDateString(manualTransfer.transferDate),
            Date: manualTransfer.transferDate,
            items: manualTransfer.items,
            createdBy: manualTransfer.createdBy?.name || 'Utilisateur inconnu',
          });
        });
      }
    
      return mergedData;
    };
    const getManualTransferTypeColor = (status) => {
      switch (status) {
        case 'En attente': return 'orange';
        case 'En cours': return 'blue';
        case 'Confirmé': return 'green';
        case 'Annulé': return 'red';
        default: return 'blue';
      }
    };
    // Fonction helper pour créer un objet inventaire standardisé
    const createInventoryObject = (inventory) => ({
      _id: inventory._id,
      from: '', // Pas de source pour les inventaires
      to: inventory.destination?._id || inventory.destination?.id, // Stocker l'ID
      toName: inventory.destination?.nomMagasin || 'Magasin inconnu', // Nom pour l'affichage
      destinationId: inventory.destination?._id || inventory.destination?.id,
      status: inventory.status,
      type: getInventoryTypeColor(inventory.status),
      isInventory: true,
      showBoxIcon: true,
      description: inventory.comment || 'Inventaire planifié',
      documentNumber: inventory.documentNumber || '',
      date: formatDateString(inventory.date),
      createdAt: formatDateTimeString(inventory.createdAt),
      updatedAt: inventory.updatedAt ? formatDateTimeString(inventory.updatedAt) : undefined,
    });
    // Helper function to determine inventory color based on status
    const getInventoryTypeColor = (status) => {
      switch (status) {
        case 'Planifié': return 'yellow';
        case 'En cours': return 'blue';
        case 'Terminé': return 'green';
        case 'Annulé': return 'red';
        default: return 'yellow';
      }
    };

    // Format date from ISO to DD/MM/YYYY
    const formatDateString = (dateString) => {
      const date = new Date(dateString);
      return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    };

    // Format datetime from ISO to DD/MM/YYYY HH:MM
    const formatDateTimeString = (dateString) => {
      const date = new Date(dateString);
      return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    };
    // Charger tous les inventaires

    // Charger les transferts et inventaires par période
  


    const updateInventory = async (id, inventoryData) => {
      try {
        const api = getApi();
        
        // First, get the warehouse ID from the name
        const warehousesResponse = await api.get('/api/magasins');
        const warehouses = warehousesResponse.data.data || warehousesResponse.data;
        
        // Improved warehouse matching logic:
        const destinationWarehouse = warehouses.find(wh => {
          // Normalize both names for comparison
          const normalizedInput = inventoryData.destination.toLowerCase().replace(/^stradi\s*/i, '').trim();
          const normalizedWarehouse = wh.nomMagasin.toLowerCase().replace(/^stradi\s*/i, '').trim();
          
          return normalizedWarehouse === normalizedInput ||
                wh.nomMagasin.toLowerCase() === inventoryData.destination.toLowerCase() ||
                wh._id === inventoryData.destination || // Also check if destination is already an ID
                wh.id === inventoryData.destination;
        });
    
        if (!destinationWarehouse) {
          console.error('Destination warehouse not found. Input:', inventoryData.destination);
          console.error('Available warehouses:', warehouses.map(w => w.nomMagasin));
          throw new Error(`Magasin destination "${inventoryData.destination}" introuvable`);
        }
    
        // Prepare the data with the warehouse ID
        const dataToSend = {
          date: inventoryData.date,
          destination: destinationWarehouse._id || destinationWarehouse.id,
          status: inventoryData.status,
          comment: inventoryData.description
        };
    
        const response = await api.put(`/api/inventories/${id}`, dataToSend);
        
        await fetchAllTransfers();
        return response.data;
      } catch (err) {
        console.error('Error updating inventory:', err);
        MySwal.fire({
          title: 'Erreur',
          text: err.response?.data?.message || err.message || 'Erreur lors de la mise à jour de l\'inventaire',
          icon: 'error'
        });
        throw err;
      }
    };
    // Supprimer un inventaire


      // Créer un nouveau transfert
    
      const updateTransfer = async (id, transferData) => {
        try {
          const api = getApi();
          const response = await api.put(`/api/transfers/${id}`, {
            ...transferData,
            Date: transferData.date, // Envoyer la date au format YYYY-MM-DD
            documentNumber: transferData.Document_Number || transferData.documentNumber,
          });
          await fetchAllTransfers();
          return response.data;
        } catch (err) {
          MySwal.fire({
            title: 'Erreur',
            text: err.response?.data?.message || 'Erreur lors de la mise à jour du transfert',
            icon: 'error',
          });
          throw err;
        }
      };

      // Supprimer un transfert
      const deleteTransfer = async (id) => {
        try {
          await api.delete(`/api/transfers/${id}`);
          await fetchAllTransfers();
          MySwal.fire({
            title: 'Succès',
            text: 'Transfert supprimé avec succès',
            icon: 'success'
          });
        } catch (err) {
          MySwal.fire({
            title: 'Erreur',
            text: err.response?.data?.message || 'Erreur lors de la suppression du transfert',
            icon: 'error'
          });
        }
      };
      const handleUpdateTransfer = async (date, updatedItem) => {
        try {
          const formatDateForAPI = (dateStr) => {
            if (!dateStr) return new Date().toISOString().split('T')[0];
            if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) return dateStr;
            const [day, month, year] = dateStr.split('/');
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
          };
      
          const getTypeFromStatus = (status) => {
            switch (status) {
              case 'En cours':
                return 'blue';
              case 'Confirmé':
                return 'green';
              case 'En attente':
                return 'orange';
              case 'Annulé':
                return 'red';
              default:
                return 'blue';
            }
          };
      
          // Formatter les données pour l'API
          const formattedData = {
            ...updatedItem,
            Date: formatDateForAPI(updatedItem.date),
            type: getTypeFromStatus(updatedItem.status),
            documentNumber: updatedItem.documentNumber || updatedItem.Document_Number,
            from: updatedItem.from, // Envoyer l'ID du magasin source
            to: updatedItem.to, // Envoyer l'ID du magasin destination
          };
      
          if (updatedItem.showBoxIcon) {
            // C'est un inventaire
            await updateInventory(updatedItem._id, {
              date: formattedData.Date,
              destination: updatedItem.to, // Envoyer l'ID du magasin
              description: updatedItem.description,
              status: updatedItem.status,
            });
          } else if (updatedItem.isManualTransfer) {
            // Pour les transferts manuels
            const api = getApi();
            const magasinsResponse = await api.get('/api/magasins');
            const magasins = magasinsResponse.data.data || magasinsResponse.data;
      
            const fromMagasin = magasins.find((m) => m._id === updatedItem.from || m.id === updatedItem.from);
            const toMagasin = magasins.find((m) => m._id === updatedItem.to || m.id === updatedItem.to);
      
            if (!fromMagasin || !toMagasin) {
              console.error('Magasin source ou destination introuvable');
              throw new Error('Magasin source ou destination introuvable');
            }
      
            const manualTransferData = {
              transferDate: formatDateForAPI(updatedItem.date),
              fromLocation: fromMagasin._id || fromMagasin.id,
              toLocation: toMagasin._id || toMagasin.id,
              status: updatedItem.status,
              totalQuantity: updatedItem.quantity,
              items: updatedItem.items || [],
            };
      
            await updateManualTransfer(updatedItem._id, manualTransferData);
          } else {
            // C'est un transfert standard
            await updateTransfer(updatedItem._id, formattedData);
          }
      
          // Mettre à jour l'état local
          setTransfersData((prevData) => {
            const dateStr = formatDateToKey(new Date(formattedData.Date));
            if (!prevData[dateStr]) return prevData;
      
            return {
              ...prevData,
              [dateStr]: {
                ...prevData[dateStr],
                transfers: prevData[dateStr].transfers.map((t) =>
                  t._id === updatedItem._id
                    ? {
                        ...t,
                        ...updatedItem,
                        Date: formattedData.Date,
                        type: getTypeFromStatus(updatedItem.status),
                        documentNumber: formattedData.documentNumber,
                        from: updatedItem.from, // Mettre à jour avec l'ID
                        to: updatedItem.to, // Mettre à jour avec l'ID
                      }
                    : t
                ),
              },
            };
          });
      
          await fetchAllTransfers();
        } catch (err) {
          console.error('Erreur lors de la mise à jour:', err);
          MySwal.fire({
            title: 'Erreur',
            text: 'Erreur lors de la mise à jour du transfert',
            icon: 'error',
          });
        }
      };
      const handleDeleteItem = async (itemId, isInventory) => {
        try {
          if (isInventory) {
            await deleteInventory(itemId);
          } else {
            await deleteTransfer(itemId);
          }
          setSelectedTransfer(null);
        } catch (err) {
          console.error('Erreur lors de la suppression:', err);
        }
      };
      const formatDateToKey = (date) => {
        if (!date) return '';
        
        try {
          // Handle both Date objects and ISO strings
          const d = new Date(date);
          if (isNaN(d.getTime())) return '';
          
          const year = d.getFullYear();
          const month = String(d.getMonth() + 1).padStart(2, '0');
          const day = String(d.getDate()).padStart(2, '0');
          
          return `${year}-${month}-${day}`;
        } catch {
          return '';
        }
      };

    // Fix: Restructured the mouseenter/mouseleave event handlers
      useEffect(() => {
        // Fix 1: Make sure the refs are initialized before adding event listeners
        if (!hoverAreaRef.current || !sidebarRef.current) return;

        const handleMouseEnter = () => {
          // Fix 2: Use a timeout to ensure state changes are batched properly
          setTimeout(() => {
            setIsMiniCalendarVisible(true);
          }, 0);
        };

        const handleMouseLeave = (e) => {
          // Fix 3: Improved check whether we're hovering over the sidebar
          if (
            sidebarRef.current && (
              e.relatedTarget === sidebarRef.current || 
              sidebarRef.current.contains(e.relatedTarget)
            )
          ) {
            return;
          }
          
          // Fix 4: Use timeout to ensure state changes properly
          setTimeout(() => {
            setIsMiniCalendarVisible(false);
          }, 0);
        };

        const hoverArea = hoverAreaRef.current;
        
        // Fix 5: Ensure proper cleanup between renders
        if (hoverArea) {
          // Remove existing listeners first to prevent duplicates
          hoverArea.removeEventListener('mouseenter', handleMouseEnter);
          hoverArea.removeEventListener('mouseleave', handleMouseLeave);
          
          // Add listeners
          hoverArea.addEventListener('mouseenter', handleMouseEnter);
          hoverArea.addEventListener('mouseleave', handleMouseLeave);
        }
      
        return () => {
          if (hoverArea) {
            hoverArea.removeEventListener('mouseenter', handleMouseEnter);
            hoverArea.removeEventListener('mouseleave', handleMouseLeave);
          }
        };
      }, [hoverAreaRef.current, sidebarRef.current]); // Fix 6: Add proper dependencies


      const handleFilterWarehouse = (warehouses) => {
        setSelectedWarehouses(warehouses);
      };
      
      const generateMiniCalendarDays = (date) => {
        const days = [];
        const year = date.getFullYear();
        const month = date.getMonth();
        
        // Get first day of month and how many days it has
        const firstDay = new Date(year, month, 1);
        const startingDay = firstDay.getDay(); // Day of week (0-6)
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Get days from previous month to show
        const daysFromPrevMonth = startingDay === 0 ? 6 : startingDay - 1;
        const prevMonth = new Date(year, month, 0);
        const daysInPrevMonth = prevMonth.getDate();
        // Calculer les dates de début et fin de la semaine sélectionnée
      let weekStart = selectedWeek ? new Date(selectedWeek) : null;
      let weekEnd = weekStart ? new Date(weekStart) : null;
      if (weekEnd) weekEnd.setDate(weekEnd.getDate() + 6);
        let dayCount = 1;
        let nextMonthDay = 1;
        
        // Generate 6 rows (weeks) maximum
        for (let i = 0; i < 6; i++) {
          const week = [];
          
          // Generate 7 days per week
          for (let j = 0; j < 7; j++) {
            // Days from previous month
            if (i === 0 && j < daysFromPrevMonth) {
              const prevDay = daysInPrevMonth - daysFromPrevMonth + j + 1;
              week.push({
                day: prevDay,
                month: 'prev',
                hasEvent: false,
                hasInventory: false,
                isCurrentDay: false
              });
            } 
            // Days from next month
            else if (dayCount > daysInMonth) {
              week.push({
                day: nextMonthDay,
                month: 'next',
                hasEvent: false,
                hasInventory: false,
                isCurrentDay: false
              });
              nextMonthDay++;
            } 
            // Days from current month
            else {
              const currentDate = new Date(year, month, dayCount);
              const dateStr = formatDateToKey(currentDate);
              const dayTransfers = allTransfers[dateStr]?.transfers || [];
              
              // Check if day has any transfers or inventories
              const hasTransfer = dayTransfers.some(t => !t.showBoxIcon);
              const hasInventory = dayTransfers.some(t => t.showBoxIcon);
              
              week.push({
                day: dayCount,
                month: 'current',
                hasEvent: hasTransfer || hasInventory,
                hasInventory,
                isCurrentDay: dayCount === selectedDay && month === currentMonth.getMonth(),
                transferCount: dayTransfers.filter(t => !t.showBoxIcon).length,
                inventoryCount: dayTransfers.filter(t => t.showBoxIcon).length,
                dateStr
              });
              dayCount++;
            }
          }
          
          days.push(week);
          
          // Stop if we've shown all days and don't need complete next month's week
          if (dayCount > daysInMonth && nextMonthDay > (7 - ((dayCount - 1) % 7))) {
            break;
          }
        }
        
        return days;
      };

      const handleLegendClick = (legendType) => {
        if (legendType === null) {
          // Clicking "ALL" resets the selection
          setActiveLegend([]);
          setActiveFilter('all');
        } else {
          setActiveLegend((prev) => {
            if (prev.includes(legendType)) {
              // Remove the legend type if already selected
              return prev.filter((type) => type !== legendType);
            } else {
              // Add the legend type to the selection
              return [...prev, legendType];
            }
          });
          setActiveFilter('all');
        }
      };

      const generateWeekData = (weekStartDate) => {
        const result = {};
        const currentDate = new Date(weekStartDate);
      
        for (let i = 0; i < 7; i++) {
          const dayOfWeek = daysOfWeek[currentDate.getDay()];
          const dateStr = formatDateToKey(currentDate);
      
          const dayData = allTransfers[dateStr] || {
            date: String(currentDate.getDate()),
            transfers: [],
          };
      
          const filteredTransfers = dayData.transfers.filter((transfer) => {
            if (activeLegend.length > 0) {
              if (activeLegend.includes('manual')) {
                if (!transfer.isManualTransfer) return false;
                const otherLegends = activeLegend.filter((l) => l !== 'manual');
                if (otherLegends.length > 0 && !otherLegends.includes(transfer.type)) {
                  return false;
                }
              } else if (!activeLegend.includes(transfer.type)) {
                return false;
              }
            }
      
            if (activeFilter === 'inventory' && !transfer.isInventory) return false;
            if (activeFilter === 'transfers' && transfer.isInventory) return false;
      
            if (selectedWarehouses.length > 0) {
              if (transfer.isInventory) {
                const inventoryMatch =
                  filterDirection.to &&
                  selectedWarehouses.some((wh) => transfer.toName && transfer.toName.includes(wh.nomMagasin));
                return inventoryMatch;
              } else {
                const fromMatch =
                  filterDirection.from &&
                  selectedWarehouses.some((wh) => transfer.fromName && transfer.fromName.includes(wh.nomMagasin));
                const toMatch =
                  filterDirection.to &&
                  selectedWarehouses.some((wh) => transfer.toName && transfer.toName.includes(wh.nomMagasin));
                return fromMatch || toMatch;
              }
            }
            return true;
          });
      
          result[dayOfWeek] = {
            ...dayData,
            transfers: filteredTransfers,
            date: String(currentDate.getDate()),
            fullDate: dateStr,
          };
      
          currentDate.setDate(currentDate.getDate() + 1);
        }
      
        return result;
      };
      const handleWeekSelect = (weekStart) => {
        const newWeekStart = new Date(weekStart);
        setSelectedWeek(newWeekStart);
        setCurrentMonth(new Date(newWeekStart));
        setSelectedDay(newWeekStart.getDate());
      };

      const handleFilterAll = () => {
        setActiveFilter('all');
        setFilter('all');
      };
      
      const handleFilterInventory = () => {
        setActiveFilter('inventory');
        setFilter('inventory');
      };
      
      const handleFilterTransfers = () => {
        setActiveFilter('transfers');
        setFilter('transfers');
      };

      const getCurrentWeekStart = () => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
        return new Date(today.setDate(diff));
      };

      useEffect(() => {
        const fetchData = async () => {
          await fetchWarehouses(); // Charger d'abord les magasins
          await fetchAllTransfers(); // Puis charger les transferts
        };
        
        fetchData();
        const currentWeekStart = getCurrentWeekStart();
        setSelectedWeek(new Date(currentWeekStart));
        setSelectedDay(new Date().getDate());
        setCurrentMonth(new Date());
      }, []);

      useEffect(() => {
        setMiniCalendarDays(generateMiniCalendarDays(currentMonth));
      }, [currentMonth, selectedDay, allTransfers]);

      useEffect(() => {
        if (selectedWeek) {
          const newTransfersData = generateWeekData(new Date(selectedWeek));
          setTransfersData(newTransfersData);
        }
      }, [selectedWeek, filter, activeFilter, activeLegend, selectedWarehouses, filterDirection, allTransfers]);

      useEffect(() => {
        const events = findEventsForDay(selectedDay);
        setSelectedDayEvents(events);
      }, [selectedDay, transfersData]);
      

      const findEventsForDay = (day) => {
        const date = new Date(currentMonth);
        date.setDate(day);
        const dateStr = formatDateToKey(date);
        return allTransfers[dateStr]?.transfers || [];
      };

      const handleMonthYearChange = (newDate) => {
        const validDate = new Date(newDate);
        if (isNaN(validDate.getTime())) return;
        
        setCurrentMonth(validDate);
        
        const firstDayOfWeek = new Date(validDate);
        firstDayOfWeek.setDate(1);
        const dayOfWeek = firstDayOfWeek.getDay();
        const diff = firstDayOfWeek.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
        const weekStart = new Date(firstDayOfWeek.setDate(diff));
        
        setSelectedWeek(weekStart);
        setSelectedDay(validDate.getDate());
      };

      const formatSelectedDate = () => {
        const date = new Date(currentMonth);
        date.setDate(selectedDay);
        if (isNaN(date.getTime())) return '';
        
        const dayNames = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];
        const dayName = dayNames[date.getDay()];
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${dayName} ${day} / ${month} / ${year}`;
      };

      const goToPrevMonth = () => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(newMonth.getMonth() - 1);
        setCurrentMonth(newMonth);
        const firstDayOfNewMonth = new Date(newMonth.getFullYear(), newMonth.getMonth(), 1);
        setSelectedWeek(firstDayOfNewMonth);
      };
      
      const goToNextMonth = () => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(newMonth.getMonth() + 1);
        setCurrentMonth(newMonth);
        const firstDayOfNewMonth = new Date(newMonth.getFullYear(), newMonth.getMonth(), 1);
        setSelectedWeek(firstDayOfNewMonth);
      };

      const goToPrevWeek = () => {
        if (selectedWeek) {
          const newWeek = new Date(selectedWeek);
          newWeek.setDate(newWeek.getDate() - 7);
          setSelectedWeek(newWeek);
          if (newWeek.getMonth() !== currentMonth.getMonth()) {
            setCurrentMonth(new Date(newWeek));
          }
        }
      };
      
      const goToNextWeek = () => {
        if (selectedWeek) {
          const newWeek = new Date(selectedWeek);
          newWeek.setDate(newWeek.getDate() + 7);
          setSelectedWeek(newWeek);
          if (newWeek.getMonth() !== currentMonth.getMonth()) {
            setCurrentMonth(new Date(newWeek));
          }
        }
      };

      const selectDay = (day, monthType) => {
        let targetDate = new Date(currentMonth);
        
        if (monthType === 'prev') {
          targetDate.setMonth(targetDate.getMonth() - 1);
        } else if (monthType === 'next') {
          targetDate.setMonth(targetDate.getMonth() + 1);
        }
        
        targetDate.setDate(day);
        setCurrentMonth(new Date(targetDate));
        setSelectedDay(day);
        
        const dayOfWeek = targetDate.getDay();
        const weekStart = new Date(targetDate);
        weekStart.setDate(targetDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));
        
        setSelectedWeek(weekStart);
        setSelectedTransfer(null);
      };

      const handleTransferClick = (transfer, date, e) => {
        e.stopPropagation();
        selectDay(parseInt(date));
        setSelectedTransfer(transfer);
      };

      const formatMonth = (date) => {
        const months = [
          'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
          'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ];
        
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
      };

      const goToCurrentWeek = () => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        // Calcul du début de la semaine (lundi)
        const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
        const currentWeekStart = new Date(today.setDate(diff));
        
        setSelectedWeek(new Date(currentWeekStart));
        setSelectedDay(today.getDate());
        setCurrentMonth(new Date(today));
        
        // Ne pas appeler fetchTransfersByPeriod ici
        // Les données seront mises à jour via l'effet qui dépend de selectedWeek
      };

      const handleCreateTransfer = async (newTransfer) => {
        try {
          await createTransfer(newTransfer);
          MySwal.fire({
            title: 'Succès',
            text: 'Transfert créé avec succès',
            icon: 'success'
          });
        } catch (err) {
          console.error('Erreur lors de la création du transfert:', err);
        }
      };

      const handleDeleteTransfer = async (transferId) => {
        try {
          await deleteTransfer(transferId);
          setSelectedTransfer(null);
        } catch (err) {
          console.error('Erreur lors de la suppression du transfert:', err);
        }
      };

      if (isLoading) {
        return (
          <div className="flex justify-center items-center h-screen">
              <span className="loader"></span>
          </div>
        );
      }

      if (error) {
        return (
          <div className="flex justify-center items-center h-screen">
            <div className="text-red-500 text-xl">{error}</div>
          </div>
        );
      }

      return (
        <div id="All_calendar" className="flex h-screen overflow-hidden">
          <div
            ref={hoverAreaRef}
            className="fixed left-0 top-0 bottom-0 w-4 z-20 hover:w-8 transition-all"
          />

          <div
            ref={sidebarRef}
            className={`flex ${isMiniCalendarVisible ? 'w-87' : 'w-0'} transition-all duration-300 overflow-hidden relative`}
          >
            <div id='rediusboxes' className="text-white overflow-y-auto flex-1">
              {isMiniCalendarVisible && (
                <>
                  <div className="flex flex-col items-center justify-center pt-6">
                    <div className="h-12">
                      <img 
                        src={logo} 
                        alt="IDOA TECH" 
                        className="h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <MiniCalendar
                    currentMonth={currentMonth}
                    miniCalendarDays={miniCalendarDays}
                    selectedDay={selectedDay}
                    goToPrevMonth={goToPrevMonth}
                    goToNextMonth={goToNextMonth}
                    selectDay={selectDay}
                    formatMonth={formatMonth}
                    onMonthYearChange={handleMonthYearChange}
                    onWeekSelect={handleWeekSelect}
                  />
                  
                  <TransferLegend 
                    transferLegend={transferLegend}
                    getDotColor={getDotColor}
                    onLegendClick={handleLegendClick}
                    activeLegend={activeLegend}
                  />
                </>
              )}
            </div>
            
            <button 
              onClick={() => setIsMiniCalendarVisible(!isMiniCalendarVisible)}
              className="panelbg relative group"
              aria-label={isMiniCalendarVisible ? "Hide calendar" : "Show calendar"}
              title={isMiniCalendarVisible ? "Hide calendar" : "Show calendar"}
            >
              {isMiniCalendarVisible ? (
                <PanelLeft className="panel cursor-pointer" />
              ) : (
                <PanelLeftOpen className="panel cursor-pointer" />
              )}
              
              <span className="
                hidden group-hover:block 
                absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 
                bg-gray-800 text-white text-xs 
                px-3 py-2 rounded 
                whitespace-nowrap 
                mb-2
                pointer-events-none
              ">
                {isMiniCalendarVisible ? "Hide calendar" : "Show calendar"}
              </span>
            </button>
          </div>
          
          <div className={`flex-1 flex flex-col transition-all duration-300 ${
            isMiniCalendarVisible ? 'ml-0' : 'ml-0'
          }`}>
            <MainCalendarHeader/>
            <FilterComponent 
              goToPrevWeek={goToPrevWeek}
              goToNextWeek={goToNextWeek}
              goToCurrentWeek={goToCurrentWeek}
              onFilterAll={handleFilterAll}
              onFilterInventory={handleFilterInventory}
              onFilterTransfers={handleFilterTransfers}
              activeFilter={activeFilter}
              formatSelectedDate={formatSelectedDate}
              onWeekSelect={handleWeekSelect}
              currentMonth={currentMonth}
              selectedWarehouses={selectedWarehouses}
              onFilterWarehouse={handleFilterWarehouse}
              filterDirection={filterDirection}
              setFilterDirection={setFilterDirection}
              onCreateTransfer={handleCreateTransfer}
            />   
            
            <div className="flex-1 overflow-auto">
            <CalendarGrid
      transfersData={transfersData}
      selectedDay={selectedDay}
      selectDay={selectDay}
      handleTransferClick={handleTransferClick}
      selectedTransfer={selectedTransfer}
      getDotColor={getDotColor}
      getBorderColor={getBorderColor}
      getBgColor={getBgColor}
      updateTransfer={handleUpdateTransfer}
      onDeleteTransfer={(id, isInventory) => handleDeleteItem(id, isInventory)}
    />
            </div>
          </div>
          
        </div>
      );
    };

    export default CalendrierTransferts;// CalendrierTransferts.jsx