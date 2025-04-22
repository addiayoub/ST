
import React, { useState, useEffect } from 'react';
import { Boxes, ChevronDown, ChevronRight, Edit, AlertCircle, FilePenLine } from 'lucide-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { getMagasins, isMagasinActive } from '../les apis/magasinService';
import '../Css/calendriertransfer.css';

const MySwal = withReactContent(Swal);

export const useTransferOptions = () => {
  const [transferOptions, setTransferOptions] = useState({
    fromOptions: [],
    toOptions: [],
    statusOptions: ['En cours', 'Confirmé', 'En attente', 'Annulé'],
    activeWarehouses: []
  });

  useEffect(() => {
    const fetchActiveWarehouses = async () => {
      try {
        const response = await getMagasins();
        let warehouseData = [];
        
        if (response && response.data) {
          if (Array.isArray(response.data.data)) {
            warehouseData = response.data.data;
          } else if (Array.isArray(response.data)) {
            warehouseData = response.data;
          }
        } else if (Array.isArray(response)) {
          warehouseData = response;
        } else if (response && response.results && Array.isArray(response.results)) {
          warehouseData = response.results;
        }
        
        const activeWarehouses = warehouseData.filter(warehouse => warehouse.statut === 'active');
        
        // Normalisation des noms des magasins
        const magasinNames = activeWarehouses.map(magasin => {
          const nom = magasin.nomMagasin.trim().replace(/^Stradi\s+/i, '');
          return `Stradi ${nom}`;
        });
        
        // Suppression des doublons avec Set
        const uniqueMagasinNames = [...new Set(magasinNames)];
        
        setTransferOptions(prev => ({
          ...prev,
          fromOptions: uniqueMagasinNames,
          toOptions: uniqueMagasinNames,
          activeWarehouses
        }));
      } catch (error) {
        console.error('Erreur lors du chargement des magasins:', error);
        setTransferOptions(prev => ({
          ...prev,
          fromOptions: [],
          toOptions: [],
          activeWarehouses: []
        }));
      }
    };

    fetchActiveWarehouses();
  }, []);

  return transferOptions;
};

const groupTransfers = (transfers) => {
  if (!transfers || !Array.isArray(transfers)) return [];
  
  const inventories = transfers.filter(t => t.showBoxIcon);
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
        type: transfer.type,
        statusCounts: {
          'En cours': 0,
          'Confirmé': 0,
          'En attente': 0,
          'Annulé': 0
        },
        totalQuantity: 0
      };
    }
    
    transferGroups[key].transfers.push(transfer);
    transferGroups[key].statusCounts[transfer.status]++;
    transferGroups[key].totalQuantity += parseInt(transfer.quantity || 0);
    
    const typePriority = {
      'orange': 1,
      'red': 2,
      'blue': 3,
      'green': 4
    };
    
    if (typePriority[transfer.type] < typePriority[transferGroups[key].type]) {
      transferGroups[key].type = transfer.type;
    }
  });
  
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

  const checkMagasinExists = (magasinName) => {
    if (!magasinName) return true;
    return transferOptions.fromOptions.some(option => 
      option.toLowerCase() === magasinName.toLowerCase()
    );
  };

  const showNonStradiAlert = (magasinName, type) => {
    MySwal.fire({
      icon: 'warning',
      title: 'Magasin non référencé',
      html: `<div class="text-center">
              <p>Le magasin ${type === 'source' ? 'source' : 'destination'} <strong>"${magasinName}"</strong> n'appartient pas aux magasins Stradi actifs.</p>
              <p class="mt-2">Veuillez vérifier l'orthographe ou contacter l'administrateur pour ajouter ce magasin.</p>
            </div>`,
      showConfirmButton: true,
      confirmButtonText: 'Compris',
      confirmButtonColor: '#3085d6',
    });
  };

  const toggleGroup = (groupKey, e) => {
    e.stopPropagation();
    setExpandedGroups(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));
  };

  const showGroupDetails = (groupData, dayData, e) => {
    e.stopPropagation();
    
    const fromExists = checkMagasinExists(groupData.from);
    const toExists = checkMagasinExists(groupData.to);
    
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
          
          {!fromExists && (
            <div className="flex items-center p-2 mb-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
              <AlertCircle className="mr-2" size={20} />
              <span>Le magasin source "{groupData.from}" n'appartient pas aux magasins Stradi actifs.</span>
            </div>
          )}
          
          {!toExists && (
            <div className="flex items-center p-2 mb-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
              <AlertCircle className="mr-2" size={20} />
              <span>Le magasin destination "{groupData.to}" n'appartient pas aux magasins Stradi actifs.</span>
            </div>
          )}
          
          <div className="mt-4 divide-y border rounded-lg">
            {groupData.transfers.map((transfer, index) => (
              <div key={index} className="py-4 px-3 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${getDotColor(transfer.type)} mr-2`}></div>
                    <span className="font-medium">N° {transfer.Document_Number}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      className="p-2 edit_trans text-gray-500 hover:text-blue-500"
                      onClick={() => {
                        MySwal.close();
                        showTransferDetails(transfer, dayData, e);
                      }}
                    >
                      <Edit size={25} />
                    </button>
                  </div>
                </div>
                <div className="mt-2 text-gray-600 text-sm grid grid-cols-2 gap-2">
                  <div>Quantité: {transfer.quantity}</div>
                  <div className="flex items-center">
                    Statut: 
                    <span className={`w-3 h-3 rounded-full ${getDotColor(transfer.type)} ml-2`}></span>
                    {transfer.status}
                  </div>
                  <div>Date: {transfer.date}</div>
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

const showTransferDetails = (transfer, dayData, e) => {
  if (!transfer) return;
  e && e.stopPropagation();

  const isManualTransfer = transfer.isManualTransfer;
  const fromExists = transfer.showBoxIcon ? true : checkMagasinExists(transfer.from);
  const toExists = checkMagasinExists(transfer.to);

  const convertToDateInput = (dateStr) => {
    if (!dateStr) return '';
    if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) return dateStr;
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  // Normaliser le nom du magasin pour correspondre à transferOptions.toOptions
  const normalizeMagasinName = (name) => {
    if (!name) return '';
    return `Stradi ${name.trim().replace(/^Stradi\s+/i, '')}`;
  };

  const totalQuantity = isManualTransfer
    ? transfer.items?.reduce((total, item) => total + (item.quantity || 0), 0) || transfer.quantity || 0
    : transfer.quantity || 0;

  const barcodeCounts = {};
  if (isManualTransfer && transfer.items) {
    transfer.items.forEach(item => {
      barcodeCounts[item.barcode] = (barcodeCounts[item.barcode] || 0) + (item.quantity || 0);
    });
  }

  MySwal.fire({
    background: transfer.showBoxIcon ? '#fff' : '#FFF',
    html: (
      <div className="p-4 space-y-4">
        <div className="text-transfer font-semibold mb-4 text-black">
          Détails {transfer.showBoxIcon ? "de l'Inventaire" : isManualTransfer ? "du Transfert Manuel" : "du Transfert"}
        </div>

        {!transfer.showBoxIcon && !fromExists && (
          <div className="flex items-center p-2 mb-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <AlertCircle className="mr-2" size={20} />
            <span>Le magasin source "{transfer.from}" n'appartient pas aux magasins Stradi actifs.</span>
          </div>
        )}
        {!toExists && (
          <div className="flex items-center p-2 mb-2 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <AlertCircle className="mr-2" size={20} />
            <span>Le magasin {transfer.showBoxIcon ? "" : "destination "} "{transfer.to}" n'appartient pas aux magasins Stradi actifs.</span>
          </div>
        )}

{transfer.showBoxIcon ? (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <strong className="block mb-1 text-black">Emplacement :</strong>
      <select
        name="to"
        defaultValue={normalizeMagasinName(transfer.to) || ''}
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
                    {/* Ajouter l'option actuelle si elle n'existe pas dans fromOptions */}
                    {!transferOptions.fromOptions.includes(transfer.from) && transfer.from && (
                      <option value={transfer.from} className="text-black">
                        {transfer.from}
                      </option>
                    )}
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
                    {/* Ajouter l'option actuelle si elle n'existe pas dans toOptions */}
                    {!transferOptions.toOptions.includes(transfer.to) && transfer.to && (
                      <option value={transfer.to} className="text-black">
                        {transfer.to}
                      </option>
                    )}
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
                  <strong className="block mb-1 text-black">Date :</strong>
                  <input
                    type="date"
                    name="date"
                    defaultValue={convertToDateInput(transfer.date || '')}
                    className="w-full p-2 border border-black text-black bg-transparent rounded"
                  />
                </div>
                <div>
                  <strong className="block mb-1 text-black">Quantité totale :</strong>
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={totalQuantity}
                    readOnly
                    className="w-full p-2 border border-black text-black bg-transparent rounded"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
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
              {isManualTransfer && transfer.items && (
                <>
                  <div className="mt-4">
                    <strong className="block mb-1 text-black">Codes-barres ( {Object.keys(barcodeCounts).length} uniques) :</strong>
                    <div className="flex flex-wrap gap-2 p-2 border overflow-auto max-h-48 border-black rounded bg-gray-50">
                      {transfer.items.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-200 text-black rounded-full">
                          {item.barcode}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <strong className="block mb-1 text-black">Détails des codes-barres :</strong>
                    <div className="overflow-auto max-h-48 border border-black rounded">
                      <table className="w-full text-black">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="p-2 border-b">Code-barres</th>
                            <th className="p-2 border-b">Quantité</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(barcodeCounts).map(([barcode, qty], index) => (
                            <tr key={index} className="border-b">
                              <td className="p-2">{barcode}</td>
                              <td className="p-2">{qty}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      ),
      showConfirmButton: false,
      showCancelButton: false,
      width: '1000px',
      customClass: {
        popup: 'bg-transparent',
        content: 'p-0',
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
        </div>
      `,
      didRender: () => {
        document.getElementById('close-btn').addEventListener('click', () => {
          MySwal.close();
        });
  
        document.getElementById('confirm-btn').addEventListener('click', () => {
          const formElements = MySwal.getPopup().querySelectorAll('input, select');
          const values = {};
  
          formElements.forEach((el) => {
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
                date: values.date,
                status: values.status || transfer.status,
              }
            : {
                ...transfer,
                from: transfer.showBoxIcon ? '' : values.from || transfer.from,
                to: values.to || transfer.to,
                quantity: values.quantity || transfer.quantity,
                Document_Number: values.Document_Number || transfer.Document_Number,
                status: values.status || transfer.status,
                date: values.date,
                items: transfer.items, // Conserver les items pour les transferts manuels
              };
  
          const newFromExists = transfer.showBoxIcon ? true : checkMagasinExists(updatedTransfer.from);
          const newToExists = checkMagasinExists(updatedTransfer.to);
  
          if (!transfer.showBoxIcon && !newFromExists) {
            showNonStradiAlert(updatedTransfer.from, 'source');
          }
          if (!newToExists) {
            showNonStradiAlert(updatedTransfer.to, 'destination');
          }
  
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
              content: 'text-white',
            },
          });
        });
  
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
              cancelButtonText: 'Annuler',
            }).then((result) => {
              if (result.isConfirmed) {
                onDeleteTransfer(transfer._id, transfer.showBoxIcon);
                MySwal.close();
              }
            });
          });
        }
      },
    });
  };

  const handleTransferItemClick = (transfer, dayData, e) => {
    e.stopPropagation();
    
    const fromExists = transfer.showBoxIcon ? true : checkMagasinExists(transfer.from);
    const toExists = checkMagasinExists(transfer.to);
    
    if ((!transfer.showBoxIcon && !fromExists) || !toExists) {
      let alertMessage = "";
      let nonExistingMagasin = "";
      
      if (!transfer.showBoxIcon && !fromExists && !toExists) {
        alertMessage = `<p>Les magasins source <strong>"${transfer.from}"</strong> et destination <strong>"${transfer.to}"</strong> ne font pas partie des magasins Stradi actifs.</p>`;
        nonExistingMagasin = `${transfer.from}, ${transfer.to}`;
      } else if (!transfer.showBoxIcon && !fromExists) {
        alertMessage = `<p>Le magasin source <strong>"${transfer.from}"</strong> ne fait pas partie des magasins Stradi actifs.</p>`;
        nonExistingMagasin = transfer.from;
      } else if (!toExists) {
        alertMessage = `<p>Le magasin ${transfer.showBoxIcon ? "" : "destination "}<strong>"${transfer.to}"</strong> ne fait pas partie des magasins Stradi actifs.</p>`;
        nonExistingMagasin = transfer.to;
      }
      
      const userStr = localStorage.getItem('user');
      const user = userStr ? JSON.parse(userStr) : { role: 'User' };
      
      MySwal.fire({
        icon: 'warning',
        title: 'Magasin non référencé',
        html: `<div class="text-center">
                ${alertMessage}
                <p class="mt-3">Qu'est-ce que vous voulez faire?</p>
              </div>`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Continuer l\'édition',
        denyButtonText: 'Ajouter le magasin',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#28a745',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          if (transfer.isGroup) {
            showGroupDetails(transfer, dayData, e);
          } else {
            showTransferDetails(transfer, dayData, e);
          }
          handleTransferClick(transfer, dayData.date, e);
        } else if (result.isDenied) {
          if (user.role === 'Admin') {
            localStorage.setItem('magasinToAdd', nonExistingMagasin);
            const appRoot = document.querySelector('.App');
            if (appRoot) {
              const event = new CustomEvent('changeComponent', { 
                detail: { component: 'house', magasinName: nonExistingMagasin } 
              });
              appRoot.dispatchEvent(event);
              window.location.href = '/magasin?add=' + encodeURIComponent(nonExistingMagasin);
            }
          } else {
            MySwal.fire({
              icon: 'error',
              title: 'Accès interdit',
              text: 'Vous n\'avez pas les droits pour ajouter un magasin. Veuillez contacter l\'administrateur de l\'application Stradivarius.',
              confirmButtonColor: '#3085d6'
            });
          }
        }
      });
    } else {
      if (transfer.isGroup) {
        showGroupDetails(transfer, dayData, e);
      } else {
        showTransferDetails(transfer, dayData, e);
      }
      handleTransferClick(transfer, dayData.date, e);
    }
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
              const groupedTransfers = groupTransfers(dayData.transfers);
              const transfer = groupedTransfers[transferRowIndex];
              const showFromWarning = transfer && !transfer.showBoxIcon && !checkMagasinExists(transfer.from);
              const showToWarning = transfer && !checkMagasinExists(transfer.to);

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
                      } ${selectedTransfer === transfer ? 'ring-2 ring-blue-500' : ''} 
                        ${(showFromWarning || showToWarning) ? 'border-dashed border border-red-300' : ''}`}
                      onClick={(e) => handleTransferItemClick(transfer, dayData, e)}
                    >
                      {transfer.showBoxIcon ? (
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <Boxes className="text-yellow-500 mr-2" size={25} />
                            <span className="text-sm font-medium">
                              {transfer.to}
                            </span>
                          </div>
                          {transfer.Document_Number && (
                            <div className="text-xs text-gray-600 mt-1">
                              N° {transfer.Document_Number}
                            </div>
                          )}
                          {showToWarning && (
                            <div className="flex items-center text-red-600 mt-1 text-xs">
                              <AlertCircle className="mr-1" size={14} />
                              <span>Magasin non Stradi</span>
                            </div>
                          )}
                        </div>
                      ) : transfer.isGroup ? (
                        <div className="flex flex-col">
                           {transfer.transfers.some(t => t.isManualTransfer) && (
                                  <FilePenLine className="text-black text-center" size={25} />
                                )}
                      <div className="flex items-center justify-between">
                        
                              <div className="flex items-center">
                             
                                <div className={`w-3 h-3 rounded-full ${getDotColor(transfer.type)} mr-1`}></div>
                                <div className="text-sm font-medium">De : {transfer.from}</div>
                                
                              </div>
                              <div className="flex">
                                
                                <button
                                  onClick={(e) => toggleGroup(transfer.groupKey, e)}
                                  className="p-1" id='viewdocument'
                                >
                                  {expandedGroups[transfer.groupKey] ? 
                                    <ChevronDown size={16} /> : 
                                    <ChevronRight size={16} />
                                  }
                                </button>
                              </div>
                            </div>
                          <div className="text-sm ml-4">À : {transfer.to}</div>
                          <div className="text-xs text-gray-600 mt-1 flex justify-between">
                            <span>Quantité : {transfer.totalQuantity}</span>
                            <span>Transferts : {transfer.transfers.length}</span>
                          </div>
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
                          {(showFromWarning || showToWarning) && (
                            <div className="flex items-center text-red-600 mt-2 text-xs">
                              <AlertCircle className="mr-1" size={14} />
                              <span>Magasin(s) non actif chez Stradi.</span>
                            </div>
                          )}
                      {expandedGroups[transfer.groupKey] && (
  <div className="mt-2 pt-2 border-t text-xs">
    {transfer.transfers.slice(0, 3).map((item, i) => (
      <div id='All_calendar' key={i} className="flex flex-col mt-1">
        {!item.isManualTransfer && (
          <span>N° {item.Document_Number}</span>
        )}
        {item.isManualTransfer && item.items && (
          <div className="flex flex-wrap gap-1">
            {item.items.map((barcodeItem, idx) => (
              <span key={idx} className="px-1 py-0.5 bg-gray-100 text-gray-800 rounded text-xs">
                {barcodeItem.barcode}
              </span>
            ))}
          </div>
        )}
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
                        <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full ${getDotColor(transfer.type)} mr-1`}></div>
                            <div className="text-sm font-medium">De : {transfer.from}</div>
                          </div>
                          {transfer.isManualTransfer && (
                            <FilePenLine className="text-gray-500" size={16} />
                          )}
                        </div>
                        <div className="text-sm ml-4">À : {transfer.to}</div>
                        {transfer.Document_Number && (
                          <div className="text-xs text-gray-600 mt-1">
                            N° {transfer.Document_Number}
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