// import React, { useState, useEffect } from 'react';
// import FilterComponent from './FilterComponents';
// import SideToolsComponent from './SideToolsComponent';
// import './calendriertransfer.css';
// import { ChevronLeft, ChevronRight, Boxes } from 'lucide-react';
// import ST from "/ST.png";
// import { 
//   daysOfWeek, 
//   transfersData as initialTransfersData, 
//   defaultDate, 
//   colorUtils, 
//   transferLegend
// } from './data';

// const CalendrierTransferts = () => {
//   const [currentDate, setCurrentDate] = useState(defaultDate);
//   const [currentMonth, setCurrentMonth] = useState(new Date(currentDate));
//   const [miniCalendarDays, setMiniCalendarDays] = useState([]);
//   const [selectedDay, setSelectedDay] = useState(defaultDate.getDate());
//   const [selectedDayEvents, setSelectedDayEvents] = useState([]);
//   const [selectedWeek, setSelectedWeek] = useState(null);
//   const [transfersData, setTransfersData] = useState(initialTransfersData);
//   const [selectedTransfer, setSelectedTransfer] = useState(null);
  
//   // Utilisation des fonctions importées depuis data.js
//   const { getDotColor, getBorderColor, getBgColor } = colorUtils;

//   // Générer les jours du mini-calendrier dynamiquement
//   const generateMiniCalendarDays = (date) => {
//     const days = [];
//     const year = date.getFullYear();
//     const month = date.getMonth();
    
//     // Premier jour du mois
//     const firstDay = new Date(year, month, 1);
//     // Jour de la semaine du premier jour (0-6)
//     const startingDay = firstDay.getDay();
    
//     // Nombre de jours dans le mois
//     const monthLength = new Date(year, month + 1, 0).getDate();
    
//     // Nombre de jours du mois précédent à afficher
//     const prevMonthDays = startingDay;
    
//     // Jours du mois précédent
//     const prevMonth = new Date(year, month, 0);
//     const prevMonthLength = prevMonth.getDate();
    
//     let day = 1;
//     let nextMonthDay = 1;
    
//     for (let i = 0; i < 6; i++) {
//       const week = [];
      
//       for (let j = 0; j < 7; j++) {
//         if (i === 0 && j < startingDay) {
//           // Jours du mois précédent
//           const prevDay = prevMonthLength - prevMonthDays + j + 1;
//           week.push({
//             day: prevDay,
//             month: 'prev',
//             hasEvent: false,
//             isCurrentDay: false
//           });
//         } else if (day > monthLength) {
//           // Jours du mois suivant
//           week.push({
//             day: nextMonthDay,
//             month: 'next',
//             hasEvent: false,
//             isCurrentDay: false
//           });
//           nextMonthDay++;
//         } else {
//           // Jours du mois courant
//           const currentDay = new Date(year, month, day);
          
//           // Vérifier si le jour a un événement
//           // Utilisez votre logique pour déterminer les événements
//           const hasEvent = hasTransfersForDay(day, month, year);
          
//           // Vérifier si c'est le jour sélectionné
//           const isCurrentDay = day === selectedDay && 
//                               currentDate.getMonth() === month && 
//                               currentDate.getFullYear() === year;
          
//           week.push({
//             day,
//             month: 'current',
//             hasEvent,
//             isCurrentDay
//           });
//           day++;
//         }
//       }
      
//       days.push(week);
      
//       // Si nous avons déjà traité tous les jours du mois et du mois suivant
//       if (day > monthLength && nextMonthDay > (7 - (day - monthLength) % 7) % 7) {
//         break;
//       }
//     }
    
//     return days;
//   };

//   // Vérifier si un jour a des transferts
//   const hasTransfersForDay = (day, month, year) => {
//     // Pour simplifier, on va juste vérifier dans les données actuelles
//     // Dans une vraie application, vous devriez vérifier dans votre base de données
//     const dayStr = String(day).padStart(2, '0');
    
//     return Object.values(transfersData).some(dayData => {
//       return parseInt(dayData.date) === day && dayData.transfers.length > 0;
//     });
//   };

//   // Générer les données du calendrier pour une semaine spécifique
//   const generateWeekData = (weekStartDate) => {
//     const result = {};
//     const currentDate = new Date(weekStartDate);
    
//     // Créer des données pour chaque jour de la semaine
//     for (let i = 0; i < 7; i++) {
//       const dayOfWeek = daysOfWeek[currentDate.getDay()];
//       const dayNum = currentDate.getDate();
      
//       // Vérifier si nous avons des données de transfert pour ce jour dans nos données initiales
//       let dayTransfers = [];
//       const matchingDay = Object.keys(initialTransfersData).find(key => 
//         initialTransfersData[key].date === String(dayNum)
//       );
      
//       if (matchingDay) {
//         dayTransfers = initialTransfersData[matchingDay].transfers;
//       }
      
//       result[dayOfWeek] = {
//         date: String(dayNum),
//         transfers: dayTransfers
//       };
      
//       // Passer au jour suivant
//       currentDate.setDate(currentDate.getDate() + 1);
//     }
    
//     return result;
//   };

//   // Mettre à jour le mini-calendrier quand le mois change
//   useEffect(() => {
//     setMiniCalendarDays(generateMiniCalendarDays(currentMonth));
//   }, [currentMonth, selectedDay]);

//   // Mettre à jour le calendrier principal quand la semaine change
//   useEffect(() => {
//     if (selectedWeek) {
//       const newTransfersData = generateWeekData(selectedWeek);
//       setTransfersData(newTransfersData);
//     }
//   }, [selectedWeek]);

//   // Initialiser la semaine sélectionnée au chargement
//   useEffect(() => {
//     // Par défaut, on sélectionne la semaine qui contient le 25 février 2021
//     const initialWeek = new Date(2021, 1, 21); // 21 février 2021 (dimanche)
//     setSelectedWeek(initialWeek);
    
//     // Sélectionnez le 25 février comme dans l'image
//     setSelectedDay(25);
//   }, []);

//   // Simuler les événements pour le jour sélectionné
//   useEffect(() => {
//     // Trouver les événements pour le jour sélectionné
//     const events = findEventsForDay(selectedDay);
//     setSelectedDayEvents(events);
//   }, [selectedDay, transfersData]);

//   // Trouver les événements pour un jour spécifique
//   const findEventsForDay = (day) => {
//     // Chercher le jour dans les données de transfert
//     const dayEntry = Object.entries(transfersData).find(([_, dayData]) => 
//       parseInt(dayData.date) === day
//     );
    
//     if (dayEntry) {
//       return dayEntry[1].transfers;
//     }
    
//     return [];
//   };

//   // Format de la date sélectionnée
//   const formatSelectedDate = () => {
//     const date = new Date(currentMonth);
//     date.setDate(selectedDay);
    
//     const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//     const dayName = dayNames[date.getDay()];
    
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
    
//     return `${dayName} ${day} / ${month} / ${year}`;
//   };

//   // Navigation du mois dans le mini-calendrier
//   const goToPrevMonth = () => {
//     const newMonth = new Date(currentMonth);
//     newMonth.setMonth(newMonth.getMonth() - 1);
//     setCurrentMonth(newMonth);
//   };

//   const goToNextMonth = () => {
//     const newMonth = new Date(currentMonth);
//     newMonth.setMonth(newMonth.getMonth() + 1);
//     setCurrentMonth(newMonth);
//   };

//   // Navigation de la semaine dans le calendrier principal
//   const goToPrevWeek = () => {
//     if (selectedWeek) {
//       const newWeek = new Date(selectedWeek);
//       newWeek.setDate(newWeek.getDate() - 7);
//       setSelectedWeek(newWeek);
//     }
//   };

//   const goToNextWeek = () => {
//     if (selectedWeek) {
//       const newWeek = new Date(selectedWeek);
//       newWeek.setDate(newWeek.getDate() + 7);
//       setSelectedWeek(newWeek);
//     }
//   };

//   // Sélection d'un jour dans le mini-calendrier ou le calendrier principal
//   const selectDay = (day, monthType) => {
//     let targetDate = new Date(currentMonth);
    
//     if (monthType === 'prev') {
//       targetDate.setMonth(targetDate.getMonth() - 1);
//       targetDate.setDate(day);
//       setCurrentMonth(new Date(targetDate));
//     } else if (monthType === 'next') {
//       targetDate.setMonth(targetDate.getMonth() + 1);
//       targetDate.setDate(day);
//       setCurrentMonth(new Date(targetDate));
//     } else {
//       targetDate.setDate(day);
//     }
    
//     setSelectedDay(day);
//     setCurrentDate(new Date(targetDate)); // Update the current date to match selected
    
//     // Si le jour sélectionné n'est pas dans la semaine actuelle, changer de semaine
//     const dayOfWeek = targetDate.getDay(); // 0 pour dimanche, 6 pour samedi
//     const weekStart = new Date(targetDate);
//     weekStart.setDate(targetDate.getDate() - dayOfWeek); // Revenir au dimanche de la semaine
    
//     setSelectedWeek(weekStart);
    
//     // Réinitialiser le transfert sélectionné lorsqu'on change de jour
//     setSelectedTransfer(null);
//   };

//   // Gestion des clics sur un transfert spécifique
//   const handleTransferClick = (transfer, date, e) => {
//     e.stopPropagation(); // Empêcher la propagation pour ne pas déclencher selectDay
    
//     // Sélectionner d'abord le jour correspondant
//     selectDay(parseInt(date));
    
//     // Ensuite, définir le transfert sélectionné
//     setSelectedTransfer(transfer);
    
//     // Vous pourriez ajouter ici une logique supplémentaire comme afficher un modal
//     console.log('Transfert sélectionné:', transfer);
//   };

//   // Formater le nom du mois
//   const formatMonth = (date) => {
//     const months = [
//       'January', 'February', 'March', 'April', 'May', 'June',
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ];
//     return `${months[date.getMonth()]} ${date.getFullYear()}`;
//   };

//   // Liste des jours de la semaine pour le header du calendrier principal
//   const dayHeaders = Object.keys(transfersData).map(day => ({
//     day,
//     date: transfersData[day].date
//   }));
  
//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <div id='rediusboxes' className="w-80 bg-black text-white overflow-y-auto">
//         <div className="px-5 py-4 flex items-center justify-between">
//           <div className='date-minicalendrier'>
//             <span>{formatMonth(currentMonth).split(' ')[0]} </span>
//             <span className="text-blue-500">{formatMonth(currentMonth).split(' ')[1]}</span>
//           </div>
//           <div className="flex space-x-2">
//             <button className="text-xl" onClick={goToPrevMonth}><ChevronLeft /></button>
//             <button className="text-xl" onClick={goToNextMonth}><ChevronRight /></button>
//           </div>
//         </div>
        
//         {/* Mini Calendar */}
//         <div className="px-2">
//           <table className="w-full">
//             <thead>
//               <tr>
//                 {daysOfWeek.map((day, index) => (
//                   <th key={index} className="text-xs py-1">{day}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {miniCalendarDays.map((week, weekIndex) => (
//                 <tr key={weekIndex}>
//                   {week.map((day, dayIndex) => (
//                     <td 
//                       key={dayIndex} 
//                       className={`text-center py-2 cursor-pointer relative ${
//                         day.isCurrentDay ? 'font-bold' : ''
//                       }`}
//                       onClick={() => selectDay(day.day, day.month)}
//                     >
//                       <div className="relative">
//                         <span className={`
//                           inline-flex items-center justify-center w-8 h-8 rounded-full
//                           ${day.isCurrentDay ? 'bg-blue-500 text-white' : ''}
//                           ${day.month !== 'current' && !day.isCurrentDay ? "text-gray-400" : ""}
//                           ${day.hasEvent && !day.isCurrentDay ? "text-blue-500 font-semibold" : ""}
//                         `}>
//                           {day.day}
//                         </span>
//                         {/* Indicateur pour les jours avec événements */}
//                         {day.hasEvent && !day.isCurrentDay && (
//                           <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
//                         )}
//                       </div>
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
//         {/* Selected Date */}
//         <div className="px-5 py-4">
//           <div className="text-blue-500 text-lg font-medium">
//             {formatSelectedDate()}
//           </div>
//         </div>
        
//         {/* Events for Selected Date */}
//         <div className="px-5 space-y-4">
//           {selectedDayEvents.length > 0 ? (
//             selectedDayEvents.map((event, index) => (
//               <div 
//                 key={index} 
//                 className={`flex cursor-pointer p-2 rounded ${
//                   selectedTransfer === event ? 'bg-blue-900 bg-opacity-20' : ''
//                 }`}
//                 onClick={() => setSelectedTransfer(event)}
//               >
//                 <div className={`w-3 h-3 rounded-full ${getDotColor(event.type)} mt-1.5 mr-2`}></div>
//                 <div>
//                   {event.from && <div className="font-medium">{event.from}</div>}
//                   {event.to && <div className="text-sm ml-1">{event.to}</div>}
//                   {event.label && (
//                     <div className="flex items-center">
//                       <span>{event.label}</span>
//                       {event.showBoxIcon && <Boxes className="ml-2 text-blue-500" size={16} />}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-gray-400">Aucun transfert prévu pour ce jour</div>
//           )}
//         </div>
        
//         {/* Legend */}
//         <div className="px-5 py-8 space-y-3">
//           <div className="text-sm mb-2 text-gray-400">Légende</div>
//           {transferLegend.map((item, index) => (
//             <div key={index} className="flex items-center">
//               <div className={`w-3 h-3 rounded-full ${getDotColor(item.type)} mr-2`}></div>
//               <div>{item.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between p-5 bg-white">
//           <div>
//             <h1 className="calendrier_text">Calendrier des transferts</h1>
           
//           </div>
//           <div className="w-100 h-10 rounded-full flex items-center justify-center font-bold">
//             <img src={ST} alt="" />
//           </div>
//         </div>
        
//         {/* Filtre */}
//         <FilterComponent goToPrevWeek={goToPrevWeek} goToNextWeek={goToNextWeek} />
        
//         {/* Calendar Grid */}
//         <div className="flex-1 overflow-auto">
//           {/* Calendar Table */}
//           <table className="w-full border-collapse">
//             {/* Day Headers Row */}
//             <thead>
//               <tr>
//                 {dayHeaders.map((header, index) => (
//                   <th 
//                     key={index} 
//                     className={`p-3 border text-center font-normal ${
//                       parseInt(header.date) === selectedDay ? 'bg-blue-50 border-blue-500' : ''
//                     }`}
//                     style={{ 
//                       borderColor: parseInt(header.date) === selectedDay ? '#3b82f6' : '#e5e7eb',
//                       borderWidth: parseInt(header.date) === selectedDay ? '2px' : '1px'
//                     }}
//                     onClick={() => selectDay(parseInt(header.date))}
//                   >
//                     <div>{header.day}</div>
//                     <div id='day_and_date'>{header.date}</div>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {/* First row with transfers */}
//               <tr>
//                 {Object.keys(transfersData).map((day, index) => {
//                   const dayData = transfersData[day];
//                   const isSelectedDay = parseInt(dayData.date) === selectedDay;
                  
//                   return (
//                     <td 
//                       key={index}
//                       className={`border ${isSelectedDay ? 'bg-blue-50' : ''}`}
//                       style={{ 
//                         height: 'auto', 
//                         borderColor: isSelectedDay ? '#3b82f6' : '#e5e7eb',
//                         borderWidth: isSelectedDay ? '2px' : '1px',
//                         verticalAlign: 'top',
//                         position: 'relative',
//                         cursor: 'pointer'
//                       }}
//                       onClick={() => selectDay(parseInt(dayData.date))}
//                     >
//                       {/* Indicateur visuel pour le jour sélectionné */}
//                       {isSelectedDay && (
//                         <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
//                       )}
                      
//                       {/* Display first transfer (if any) */}
//                       {dayData.transfers.length > 0 && (
//                         <div 
//                           className={`p-2 m-2 border-l-4 rounded ${getBorderColor(dayData.transfers[0].type)} ${getBgColor(dayData.transfers[0].type)} ${
//                             selectedTransfer === dayData.transfers[0] ? 'ring-2 ring-blue-500' : ''
//                           }`}
//                           onClick={(e) => handleTransferClick(dayData.transfers[0], dayData.date, e)}
//                         >
//                           {dayData.transfers[0].from && (
//                             <div className="flex items-center">
//                               <div className={`w-3 h-3 rounded-full ${getDotColor(dayData.transfers[0].type)} mr-1`}></div>
//                               <div className="text-sm font-medium">{dayData.transfers[0].from}</div>
//                             </div>
//                           )}
//                           {dayData.transfers[0].to && (
//                             <div className="text-sm ml-4">{dayData.transfers[0].to}</div>
//                           )}
//                           {dayData.transfers[0].label && (
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center">
//                                 <div className={`w-3 h-3 rounded-full ${getDotColor(dayData.transfers[0].type)} mr-1`}></div>
//                                 <div className="text-sm font-medium">{dayData.transfers[0].label}</div>
//                               </div>
//                               {dayData.transfers[0].showBoxIcon && (
//                                 <Boxes className="text-blue-500" size={16} />
//                               )}
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </td>
//                   );
//                 })}
//               </tr>
              
//               {/* Second row with transfers */}
//               <tr>
//                 {Object.keys(transfersData).map((day, index) => {
//                   const dayData = transfersData[day];
//                   const isSelectedDay = parseInt(dayData.date) === selectedDay;
                  
//                   return (
//                     <td 
//                       key={index}
//                       className={`border ${isSelectedDay ? 'bg-blue-50' : ''}`}
//                       style={{ 
//                         height: 'auto', 
//                         borderColor: isSelectedDay ? '#3b82f6' : '#e5e7eb',
//                         borderWidth: isSelectedDay ? '2px' : '1px',
//                         verticalAlign: 'top'
//                       }}
//                       onClick={() => selectDay(parseInt(dayData.date))}
//                     >
//                       {/* Display second transfer (if any) */}
//                       {dayData.transfers.length > 1 && (
//                         <div 
//                           className={`p-2 m-2 border-l-4 rounded ${getBorderColor(dayData.transfers[1].type)} ${getBgColor(dayData.transfers[1].type)} ${
//                             selectedTransfer === dayData.transfers[1] ? 'ring-2 ring-blue-500' : ''
//                           }`}
//                           onClick={(e) => handleTransferClick(dayData.transfers[1], dayData.date, e)}
//                         >
//                           {dayData.transfers[1].from && (
//                             <div className="flex items-center">
//                               <div className={`w-3 h-3 rounded-full ${getDotColor(dayData.transfers[1].type)} mr-1`}></div>
//                               <div className="text-sm font-medium">{dayData.transfers[1].from}</div>
//                             </div>
//                           )}
//                           {dayData.transfers[1].to && (
//                             <div className="text-sm ml-4">{dayData.transfers[1].to}</div>
//                           )}
//                           {dayData.transfers[1].label && (
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center">
//                                 <div className={`w-3 h-3 rounded-full ${getDotColor(dayData.transfers[1].type)} mr-1`}></div>
//                                 <div className="text-sm font-medium">{dayData.transfers[1].label}</div>
//                               </div>
//                               {dayData.transfers[1].showBoxIcon && (
//                                 <Boxes className="text-blue-500" size={16} />
//                               )}
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </td>
//                   );
//                 })}
//               </tr>
              
//               {/* Empty rows for the rest of the calendar */}
//               {Array.from({ length: 5 }).map((_, rowIndex) => (
//                 <tr key={`empty-row-${rowIndex}`}>
//                   {Object.keys(transfersData).map((day, colIndex) => {
//                     const isSelectedDay = parseInt(transfersData[day].date) === selectedDay;
//                     return (
//                       <td 
//                         key={`empty-cell-${rowIndex}-${colIndex}`}
//                         className={`border ${isSelectedDay ? 'bg-blue-50' : ''}`}
//                         style={{ 
//                           height: '100px', 
//                           borderColor: isSelectedDay ? '#3b82f6' : '#e5e7eb',
//                           borderWidth: isSelectedDay ? '2px' : '1px'
//                         }}
//                         onClick={() => selectDay(parseInt(transfersData[day].date))}
//                       ></td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Side Tools */}
//       <SideToolsComponent />
//     </div>
//   );
// };

// export default CalendrierTransferts;//stop