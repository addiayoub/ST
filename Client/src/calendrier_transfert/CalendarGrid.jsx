import React, { useState, useEffect } from 'react';
import { Boxes, ChevronDown, ChevronRight, Edit } from 'lucide-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { getMagasins } from '../les apis/magasinService';
import '../Css/calendriertransfer.css';

const MySwal = withReactContent(Swal);

export const useTransferOptions = () => {
  const [transferOptions, setTransferOptions] = useState({
    fromOptions: [],
    toOptions: [],
    statusOptions: ['En cours', 'Confirmé', 'En attente', 'Annulé']
  });

  useEffect(() => {
    const fetchActiveWarehouses = async () => {
      try {
        const response = await getMagasins();
        
        // Vérifier si response.data existe et si c'est un tableau
        let warehouseData = [];
        
        if (response && response.data) {
          // Si c'est un objet avec une propriété data (structure { success: true, data: [...] })
          if (Array.isArray(response.data.data)) {
            warehouseData = response.data.data;
          } 
          // Si c'est directement un tableau
          else if (Array.isArray(response.data)) {
            warehouseData = response.data;
          }
        } else if (Array.isArray(response)) {
          warehouseData = response;
        } else if (response && response.results && Array.isArray(response.results)) {
          warehouseData = response.results;
        }
        
        // Filtrer pour ne garder que les magasins actifs
        const activeWarehouses = warehouseData.filter(warehouse => warehouse.statut === 'active');
        
        const magasinNames = activeWarehouses.map(magasin => {
          // Supprime "Stradi " si déjà présent pour éviter les doublons
          const nom = magasin.nomMagasin.replace(/^Stradi\s+/i, '');
          return `Stradi ${nom}`;
        });
        
        
        setTransferOptions(prev => ({
          ...prev,
          fromOptions: [...new Set(magasinNames)], // Élimine les doublons
          toOptions: [...new Set(magasinNames)]
        }));
      } catch (error) {
        console.error('Erreur lors du chargement des magasins:', error);
        // Options par défaut en cas d'erreur
        setTransferOptions(prev => ({
          ...prev,
          fromOptions: [],
          toOptions: []
        }));
      }
    };

    fetchActiveWarehouses();
  }, []);

  return transferOptions;
};

// Helper function to group transfers by from & to
const groupTransfers = (transfers) => {
  if (!transfers || !Array.isArray(transfers)) return [];
  
  // First separate inventories (they are not grouped)
  const inventories = transfers.filter(t => t.showBoxIcon);
  
  // Group transfers by from and to
  const transferGroups = {};
  
  transfers.filter(t => !t.showBoxIcon).forEach(transfer => {
    const key = `${transfer.from}|${transfer.to}`;
    
    if (!transferGroups[key]) {
      transferGroups[key] = {
        isGroup: true,
        groupKey: key,
        from: transfer.from,
        to: transfer.to,
        transfers: [],
        // Use the highest status type for the group display
        type: transfer.type,
        // Count by status
        statusCounts: {
          'En cours': 0,
          'Confirmé': 0,
          'En attente': 0,
          'Annulé': 0
        },
        // Total quantity
        totalQuantity: 0
      };
    }
    
    // Add transfer to group
    transferGroups[key].transfers.push(transfer);
    
    // Increase status count
    transferGroups[key].statusCounts[transfer.status]++;
    
    // Add quantity
    transferGroups[key].totalQuantity += parseInt(transfer.quantity || 0);
    
    // Update group type based on priority
    const typePriority = {
      'orange': 1, // En attente (highest priority)
      'red': 2,    // Annulé
      'blue': 3,   // En cours
      'green': 4   // Confirmé (lowest priority)
    };
    
    if (typePriority[transfer.type] < typePriority[transferGroups[key].type]) {
      transferGroups[key].type = transfer.type;
    }
  });
  
  // Combine inventories and grouped transfers
  return [...inventories, ...Object.values(transferGroups)];
};

const CalendarGrid = ({ 
  transfersData, 
  selectedDay, 
  selectDay, 
  handleTransferClick, 
  selectedTransfer,
  getDotColor,
  getBorderColor,
  getBgColor,
  updateTransfer,
  onDeleteTransfer
}) => {
  const transferOptions = useTransferOptions();
  const [expandedGroups, setExpandedGroups] = useState({});

  const toggleGroup = (groupKey, e) => {
    e.stopPropagation();
    setExpandedGroups(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));
  };

  const showGroupDetails = (groupData, dayData, e) => {
    e.stopPropagation();
    
    MySwal.fire({
      background: '#fff',
      title: `<div class="text-xl font-semibold text-black">
                Transferts de ${groupData.from} vers ${groupData.to}
              </div>`,
      html: (
        <div className="p-4 space-y-6">
          <div className="text-black font-medium">
            {groupData.transfers.length} transfert(s) • Total: {groupData.totalQuantity} articles
          </div>
          
          <div className="mt-4 divide-y border rounded-lg">
            {groupData.transfers.map((transfer, index) => (
              <div key={index} className="py-4 px-3 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${getDotColor(transfer.type)} mr-2`}></div>
                    <span className="font-medium">N° {transfer.documentNumber}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      className="p-2 edit_trans text-gray-500 hover:text-blue-500"
                      onClick={() => {
                        MySwal.close();
                        showTransferDetails(transfer, dayData, e);
                      }}
                    >
                      <Edit size={25}  />
                    </button>
                  
                  </div>
                </div>
                <div className="mt-2 text-gray-600 text-sm grid grid-cols-2 gap-2">
                  <div>Quantité: {transfer.quantity}</div>
                  <div>Statut: {transfer.status}</div>
                  <div>Date: {transfer.date}</div>
                  <div>Créé le: {formatDateTime(transfer.createdAt)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      showConfirmButton: true,
      confirmButtonText: 'X',
      customClass: {
        
        confirmButton: 'custom-swal-ferme-button',
      },
      width: '700px'
    });
  };

  const formatDateTime = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
  };

  const showTransferDetails = (transfer, dayData, e) => {
    if (!transfer) return;
    e && e.stopPropagation();

    const convertToDateInput = (dateStr) => {
      if (!dateStr) return '';
      
      // Check if date is already in yyyy-mm-dd format
      if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) return dateStr;
      
      // Otherwise convert from dd/mm/yyyy
      const [day, month, year] = dateStr.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

    MySwal.fire({
      background: transfer.showBoxIcon ? '#fff' : '#FFF',
      html: (
        <div className="p-4 space-y-4">
          <div className="text-transfer font-semibold mb-4 text-black">
            Détails {transfer.showBoxIcon ? "de l'Inventaire" : "du Transfert"}
          </div>
          
          {transfer.showBoxIcon ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong className="block mb-1 text-black">Emplacement :</strong>
                <select 
                  name="to"
                  defaultValue={transfer.to || ''} 
                  className="w-full p-2 border border-black-500 text-black bg-black-500/20 rounded" 
                >
                  {transferOptions.toOptions.map((option, index) => (
                    <option key={index} value={option} className="text-black">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <strong className="block mb-1 text-black">Date :</strong>
                <input 
                  type="date" 
                  name="date"
                  defaultValue={convertToDateInput(transfer.date || '')} 
                  className="w-full p-2 border border-black-500 text-black bg-white-500/20 rounded" 
                />
              </div>
              
              <div>
                <strong className="block mb-1 text-black">Statut :</strong>
                <select 
                  name="status"
                  defaultValue={transfer.status || ''} 
                  className="w-full p-2 border border-black-500 text-black bg-black-500/20 rounded" 
                >
                  {transferOptions.statusOptions.map((option, index) => (
                    <option key={index} value={option} className="text-black">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
          
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="block mb-1 text-black">De :</strong>
                  <select 
                    name="from"
                    defaultValue={transfer.from || ''} 
                    className="w-full p-2 border border-black text-black bg-transparent rounded" 
                  >
                    {transferOptions.fromOptions.map((option, index) => (
                      <option key={index} value={option} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <strong className="block mb-1 text-black">Vers :</strong>
                  <select 
                    name="to"
                    defaultValue={transfer.to || ''} 
                    className="w-full p-2 border border-black text-black bg-transparent rounded" 
                  >
                    {transferOptions.toOptions.map((option, index) => (
                      <option key={index} value={option} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="block mb-1 text-black">N° Document :</strong>
                  <input 
                    type="text" 
                    name="documentNumber"
                    defaultValue={transfer.documentNumber || ''} 
                    placeholder="Entrez le numéro de document"
                    className="w-full p-2 border border-black text-black bg-transparent rounded" 
                  />
                </div>
                
                <div>
                  <strong className="block mb-1 text-black">Quantité :</strong>
                  <input 
                    type="number" 
                    name="quantity"
                    defaultValue={transfer.quantity || ''} 
                    className="w-full p-2 border border-black text-black bg-transparent rounded" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="block mb-1 text-black">Date :</strong>
                  <input 
                    type="date" 
                    name="date"
                    defaultValue={convertToDateInput(transfer.date || '')} 
                    className="w-full p-2 border border-black text-black bg-transparent rounded" 
                  />
                </div>
                
                <div>
                  <strong className="block mb-1 text-black">Statut :</strong>
                  <select 
                    name="status"
                    defaultValue={transfer.status || ''} 
                    className="w-full p-2 border border-black text-black bg-transparent rounded" 
                  >
                    {transferOptions.statusOptions.map((option, index) => (
                      <option key={index} value={option} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
      ),
      showConfirmButton: false,
      showCancelButton: false,
      width: '1000px',
      customClass: {
        popup: 'bg-transparent',
        content: 'p-0'
      },
      footer: `
        <div class="w-full flex justify-center space-x-4 pb-4">
          <button id="close-btn" class="bg-transparent border text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
          <button id="confirm-btn" class="bg-transparent border text-white w-12 h-12 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </button>
          ${!transfer.showBoxIcon && !transfer.isGroup ? `
          <button id="delete-btn" class="bg-transparent border text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
          ` : ''}
        </div>
      `,
      didRender: () => {
        document.getElementById('close-btn').addEventListener('click', () => {
          MySwal.close();
        });
        
        document.getElementById('confirm-btn').addEventListener('click', () => {
          const convertFromDateInput = (dateInput) => {
            if (!dateInput) return '';
            const [year, month, day] = dateInput.split('-');
            return `${day}/${month}/${year}`;
          };

          const formElements = MySwal.getPopup().querySelectorAll('input, select');
          const values = {};
          
          formElements.forEach(el => {
            if (el.type === 'date') {
              values.date = el.value;
            } else if (el.type === 'number') {
              values.quantity = Number(el.value);
            } else {
              values[el.name] = el.value;
            }
          });

          const updatedTransfer = transfer.showBoxIcon 
            ? {
                ...transfer,
                to: values.to || transfer.to,
                date: convertFromDateInput(values.date) || transfer.date,
                status: values.status || transfer.status
              }
            : {
                ...transfer,
                from: transfer.showBoxIcon ? '' : values.from || transfer.from,
                to: values.to || transfer.to,
                comment: values.comment || transfer.comment,
                quantity: values.quantity || transfer.quantity,
                documentNumber: values.documentNumber || transfer.documentNumber,
                status: values.status || transfer.status,
                date: convertFromDateInput(values.date) || transfer.date
              };

          if (updateTransfer) {
            updateTransfer(dayData, updatedTransfer);
          }
          
          MySwal.fire({
            background: 'transparent',
            title: '<span class="text-white">Confirmé !</span>',
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
        });
        
        // Add delete button event listener if it exists
        const deleteBtn = document.getElementById('delete-btn');
        if (deleteBtn) {
          deleteBtn.addEventListener('click', () => {
            MySwal.fire({
              title: 'Êtes-vous sûr ?',
              text: "Cette action ne peut pas être annulée !",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#3085d6',
              confirmButtonText: 'Oui, supprimer',
              cancelButtonText: 'Annuler'
            }).then((result) => {
              if (result.isConfirmed) {
                onDeleteTransfer(transfer._id, transfer.showBoxIcon);
                MySwal.close();
              }
            });
          });
        }
      }
    });
  };

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {Object.keys(transfersData).map((day, index) => (
            <th 
              key={index} 
              className={`p-3 border text-center font-normal ${
                parseInt(transfersData[day].date) === selectedDay ? 'bg-blue-50' : ''
              }`}
              style={{ 
                borderColor: '#e5e7eb',
                borderWidth: '1px'
              }}
              onClick={() => selectDay(parseInt(transfersData[day].date))}
            >
              <div>{day}</div>
              <div id='day_and_date'>{transfersData[day].date}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, transferRowIndex) => (
          <tr key={`transfer-row-${transferRowIndex}`}>
            {Object.keys(transfersData).map((day, dayIndex) => {
              const dayData = transfersData[day];
              const isSelectedDay = parseInt(dayData.date) === selectedDay;
              
              // Group transfers by from and to
              const groupedTransfers = groupTransfers(dayData.transfers);
              const transfer = groupedTransfers[transferRowIndex];

              return (
                <td 
                  key={`transfer-cell-${dayIndex}-${transferRowIndex}`}
                  className={`border ${isSelectedDay ? 'bg-blue-50' : ''}`}
                  style={{ 
                    height: '100px', 
                    borderColor: '#e5e7eb',
                    borderWidth: '1px',
                    verticalAlign: 'top',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onClick={() => selectDay(parseInt(dayData.date))}
                >
                {transfer && (
                  <div 
                    className={`p-4 m-2 border-l-4 rounded ${
                      transfer.showBoxIcon 
                        ? 'border-yellow-500 bg-yellow-100' 
                        : `${getBorderColor(transfer.type)} ${getBgColor(transfer.type)}`
                    } ${selectedTransfer === transfer ? 'ring-2 ring-blue-500' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (transfer.isGroup) {
                        // For groups, show the group details modal
                        handleTransferClick(transfer, dayData.date, e);
                        showGroupDetails(transfer, dayData, e);
                      } else {
                        // For individual transfers, show the edit modal
                        handleTransferClick(transfer, dayData.date, e);
                        showTransferDetails(transfer, dayData, e);
                      }
                    }}
                  >
                    {transfer.showBoxIcon ? (
                      // Inventory display (unchanged)
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <Boxes className="text-yellow-500 mr-2" size={25} />
                          <span className="text-sm font-medium">
                            {transfer.to}
                          </span>
                        </div>
                        {transfer.documentNumber && (
                          <div className="text-xs text-gray-600 mt-1">
                            N° {transfer.documentNumber}
                          </div>
                        )}
                      </div>
                    ) : transfer.isGroup ? (
                      // Grouped transfers display
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full ${getDotColor(transfer.type)} mr-1`}></div>
                            <div className="text-sm font-medium">De : {transfer.from}</div>
                          </div>
                          <button
                            onClick={(e) => toggleGroup(transfer.groupKey, e)}
                            className="p-1" id='viewdocument'
                          >
                            {expandedGroups[transfer.groupKey] ? 
                              <ChevronDown size={16} /> : 
                              <ChevronRight  size={16} />
                            }
                          </button>
                        </div>
                        <div className="text-sm ml-4">À : {transfer.to}</div>
                        <div className="text-xs text-gray-600 mt-1 flex justify-between">
                          <span>Quantité : {transfer.totalQuantity}</span>
                          <span>Transferts : {transfer.transfers.length}</span>
                        </div>
                        
                        {/* Status indicators for group */}
                        <div className="flex mt-2 space-x-1">
                          {Object.entries(transfer.statusCounts)
                            .filter(([_, count]) => count > 0)
                            .map(([status, count], i) => {
                              const statusColors = {
                                'En cours': 'bg-blue-500',
                                'Confirmé': 'bg-green-500',
                                'En attente': 'bg-orange-500',
                                'Annulé': 'bg-red-500'
                              };
                              return (
                                <div key={i} className="flex items-center">
                                  <div className={`w-2 h-2 rounded-full ${statusColors[status]}`}></div>
                                  <span className="text-xs ml-1">{count}</span>
                                </div>
                              );
                            })}
                        </div>
                        
                        {/* Show expanded details if group is toggled */}
                        {expandedGroups[transfer.groupKey] && (
                          <div className="mt-2 pt-2 border-t text-xs">
                            {transfer.transfers.slice(0, 3).map((item, i) => (
                              <div  id='All_calendar'  key={i} className="flex items-center justify-between mt-1">
                                <span>N° {item.documentNumber}</span>
                                <span>Qté: {item.quantity}</span>
                              </div>
                            ))}
                            {transfer.transfers.length > 3 && (
                              <div className="text-blue-500 text-center mt-1">
                                +{transfer.transfers.length - 3} plus...
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      // Regular single transfer display (unchanged)
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${getDotColor(transfer.type)} mr-1`}></div>
                          <div className="text-sm font-medium">De : {transfer.from}</div>
                        </div>
                        <div className="text-sm ml-4">À : {transfer.to}</div>
                        {transfer.documentNumber && (
                          <div className="text-xs text-gray-600 mt-1">
                            N° {transfer.documentNumber}
                          </div>
                        )}
                        {transfer.quantity && (
                          <div className="text-xs text-gray-600 mt-1">
                            Quantité : {transfer.quantity}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarGrid;

