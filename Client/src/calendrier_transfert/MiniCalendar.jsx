import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CircleCheckBig, CircleX } from 'lucide-react';
import '../Css/calendriertransfer.css';

const MiniCalendar = ({ 
  currentMonth, 
  miniCalendarDays, 
  selectedDay, 
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
            hover:bg-gray-400 
            transition-colors 
            duration-200'
          onClick={() => setShowMonthYearSelector(!showMonthYearSelector)}
          title="Select Month and Year"
        >
          {!showMonthYearSelector ? (
            <>
              <span>{formatMonth(currentMonth).split(' ')[0]} </span>
              <span className="text-blue-500">{formatMonth(currentMonth).split(' ')[1]}</span>
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
             bg-blue-500 
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
            Select Month and Year
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
             bg-blue-500 
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
             bg-blue-500 
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
                className={`py-1 rounded text-sm hover:bg-blue-500 hover:text-white cursor-pointer transition-colors ${
                  selectedMonth === i ? 'bg-blue-500 text-white font-medium' : ''
                }`}
                onClick={() => handleMonthSelect(i)}
              >
                {new Date(0, i).toLocaleString('default', { month: 'short' })}
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
              className="text-sm px-3 py-1 rounded hover:bg-gray-500"
              onClick={handleValidation}
            >
              <CircleCheckBig className='text-green-500' size={30}/>
            </button>
          </div>
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
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
          <div className="relative">
            <span className={`
              inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-600
              ${day.isCurrentDay ? 'bg-blue-500 text-white' : ''}
              ${day.month !== 'current' && !day.isCurrentDay ? "text-gray-400" : ""}
              ${day.hasEvent && !day.isCurrentDay ? "text-blue-500 font-semibold" : ""}
            `}>
              {day.day}
            </span>
            {day.hasEvent && !day.isCurrentDay && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
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