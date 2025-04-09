  // src/components/CalendarGrid.js
  import React, { useState, useEffect } from 'react';
  import { Boxes } from 'lucide-react';
  import Swal from 'sweetalert2';
  import withReactContent from 'sweetalert2-react-content';
  import { getMagasins } from '../les apis/magasinService';
  import '../Css/calendriertransfer.css';

  const MySwal = withReactContent(Swal);

  export const useTransferOptions = () => {
    const [transferOptions, setTransferOptions] = useState({
      fromOptions: [],
      toOptions: [],
      statusOptions: ['En cours', 'Confirmé', 'En attente', 'annulé']
    });

    useEffect(() => {
      const fetchActiveWarehouses = async () => {
        try {
          const response = await getMagasins();
          
          // Ajouter un console.log pour voir la structure de la réponse
          
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
            // Supprime "stradi " si déjà présent pour éviter les doublons
            const nom = magasin.nomMagasin.replace(/^stradi\s+/i, '');
            return `stradi ${nom}`;
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
  const CalendarGrid = ({ 
    transfersData, 
    selectedDay, 
    selectDay, 
    handleTransferClick, 
    selectedTransfer,
    getDotColor,
    getBorderColor,
    getBgColor,
    updateTransfer
  }) => {
    const transferOptions = useTransferOptions();

    const showTransferDetails = (transfer, dayData) => {
      if (!transfer) return;

      const convertToDateInput = (dateStr) => {
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
                const transfer = dayData.transfers[transferRowIndex];

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
                        handleTransferClick(transfer, dayData.date, e);
                        showTransferDetails(transfer, dayData);
                      }}
                    >
                      {transfer.showBoxIcon ? (
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
                      ) : (
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