import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CircleCheckBig, CircleX } from 'lucide-react';
import '../Css/calendriertransfer.css';

const MiniCalendar = ({ 
  currentMonth, 
  miniCalendarDays, 
  goToPrevMonth, 
  goToNextMonth, 
  selectDay,
  formatMonth,
  onMonthYearChange
}) => {
  const [showMonthYearSelector, setShowMonthYearSelector] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth.getMonth());
  
  const [availableYears] = useState(() => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 5; i <= currentYear + 5; i++) {
      years.push(i);
    }
    return years;
  });

  const handleMonthSelect = (monthIndex) => {
    setSelectedMonth(monthIndex);
    const newDate = new Date(currentMonth);
    newDate.setMonth(monthIndex);
    onMonthYearChange(newDate);
  };

  const handleYearSelect = (year) => {
    const newDate = new Date(currentMonth);
    newDate.setFullYear(year);
    onMonthYearChange(newDate);
  };

  const handleValidation = () => {
    setShowMonthYearSelector(false);
  };

  return (
    <div className="px-2">
      <div className="px-5 py-4 flex items-center justify-between">
        <div 
          className='date-minicalendrier 
            cursor-pointer 
            rounded 
            px-2 
            py-1 
            relative 
            group 
            hover:bg-gray-500 
            transition-colors 
            duration-200'
          onClick={() => setShowMonthYearSelector(!showMonthYearSelector)}
          title="Sélectionner le mois et l'année"
        >
          {!showMonthYearSelector ? (
            <>
              <span>{formatMonth(currentMonth).split(' ')[0]} </span>
              <span className="text-white">{formatMonth(currentMonth).split(' ')[1]}</span>
            </>
          ) : (
            <span></span>
          )}
          
          <span className="
              absolute 
             z-10 
             top-full 
             left-1/2 
             transform 
             -translate-x-1/2 
             bg-blue-900 
             bg-opacity-70 
             text-white 
             text-xs 
             px-2 
             py-1 
             rounded 
             whitespace-nowrap 
             mt-2
             pointer-events-none
             opacity-0 
             group-hover:opacity-100 
             transition-opacity
          ">
            Sélectionner le mois et l'année
          </span>
        </div>
        
        {!showMonthYearSelector && (
         <div className="flex space-x-2">
         <div className="relative group">
           <button 
             onClick={goToPrevMonth} 
             className="p-1 rounded-full hover:bg-gray-500 cursor-pointer"
             aria-label="Mois précédent"
           >
             <ChevronLeft size={20} />
           </button>
           <span className="
             absolute 
             z-10 
             top-full 
             left-1/2 
             transform 
             -translate-x-1/2 
             bg-blue-900 
             bg-opacity-70 
             text-white 
             text-xs 
             px-2 
             py-1 
             rounded 
             whitespace-nowrap 
             mt-2
             pointer-events-none
             opacity-0 
             group-hover:opacity-100 
             transition-opacity
           ">
             Mois précédent
           </span>
         </div>
       
         <div className="relative group">
           <button 
             onClick={goToNextMonth} 
             className="p-1 rounded-full hover:bg-gray-500 cursor-pointer"
             aria-label="Mois suivant"
           >
             <ChevronRight size={20} />
           </button>
           <span className="
             absolute 
             z-10 
             top-full 
             left-1/2 
             transform 
             -translate-x-1/2 
             bg-blue-900 
             bg-opacity-70 
             text-white 
             text-xs 
             px-2 
             py-1 
             rounded 
             whitespace-nowrap 
             mt-2
             pointer-events-none
             opacity-0 
             group-hover:opacity-100 
             transition-opacity
           ">
             Mois suivant
           </span>
         </div>
       </div>
        )}
      </div>
      
      {showMonthYearSelector ? (
        <div className="px-4 py-2">
          <div className="grid grid-cols-4 gap-2 mb-3">
            {Array.from({ length: 12 }, (_, i) => (
              <button
                key={i}
                className={`py-1 rounded text-sm hover:bg-blue-900 hover:text-white cursor-pointer transition-colors ${
                  selectedMonth === i ? 'bg-blue-900 text-white font-medium' : ''
                }`}
                onClick={() => handleMonthSelect(i)}
              >
                {new Date(0, i).toLocaleString('fr-FR', { month: 'short' })}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center">
            <select
              className="border rounded px-2 py-1 text-sm bg-white dark:bg-gray-800"
              value={currentMonth.getFullYear()}
              onChange={(e) => handleYearSelect(parseInt(e.target.value))}
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex justify-center mt-3">
            <button
              className="text-sm px-3 py-1 rounded hover: cursor-pointer"
              onClick={handleValidation}
            >
              <CircleCheckBig className='check' size={30}/>
            </button>
          </div>
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              {['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'].map((day, index) => (
                <th key={index} className="text-xs py-1">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {miniCalendarDays.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td 
                    key={dayIndex} 
                    className={`text-center py-2 cursor-pointer relative ${
                      day.isCurrentDay ? 'font-bold' : ''
                    }`}
                    onClick={() => selectDay(day.day, day.month)}
                  >
                    <div className="relative group">
                      <span className={`
                        inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-600
                        ${day.isCurrentDay ? 'bg-blue-900 text-white' : ''}
                        ${day.month !== 'current' && !day.isCurrentDay ? "text-gray-400" : ""}
                        ${day.hasEvent && !day.isCurrentDay ? "text-white font-semibold" : ""}
                        ${day.hasInventory ? "border-2 border-yellow-500" : ""}
                      `}>
                        {day.day}
                      </span>
                      
                      {/* Points indicateurs */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex justify-center space-x-1">
                        {day.hasEvent && !day.isCurrentDay && (
                          <span className="w-1 h-1 bg-blue-900 rounded-full"></span>
                        )}
                        {/* {day.hasInventory && !day.isCurrentDay && (
                          <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                        )} */}
                      </div>
                      
                      {/* Tooltip */}
                      {(day.transferCount > 0 || day.inventoryCount > 0) && (
                        <div className="
                          absolute z-50 bottom-full  transform -translate-x-1/2
                          bg-gray-800 text-white text-xs px-3 py-2 rounded whitespace-nowrap
                          mb-2 pointer-events-none opacity-0 group-hover:opacity-100
                          transition-opacity duration-200 shadow-lg
                        ">
                          <div className="flex flex-col items-start">
                            {day.transferCount > 0 && (
                              <div className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                <span>{day.transferCount} transfert{day.transferCount > 1 ? 's' : ''}</span>
                              </div>
                            )}
                            {day.inventoryCount > 0 && (
                              <div className="flex items-center mt-1">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                                <span>{day.inventoryCount} inventaire{day.inventoryCount > 1 ? 's' : ''}</span>
                              </div>
                            )}
                          </div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MiniCalendar;