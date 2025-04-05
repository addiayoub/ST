import React, { useState, useEffect, useRef } from 'react';
import FilterComponent from '../filter/FilterComponents';
import SideToolsComponent from '../menu/SideToolsComponent';
import '../Css/calendriertransfer.css';
import { PanelLeft, PanelLeftOpen } from 'lucide-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import logo from "/Logo-nesk-investment@2x.png";
import { 
  daysOfWeek, 
  transfersData as initialTransfersData, 
  defaultDate, 
  colorUtils, 
  transferLegend
} from './data';
import MiniCalendar from './MiniCalendar';
import TransferLegend from './TransferLegend';
import MainCalendarHeader from './MainCalendarHeader';
import CalendarGrid from './CalendarGrid';

const MySwal = withReactContent(Swal);

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
  const hoverAreaRef = useRef(null);
  const sidebarRef = useRef(null);
  const [selectedWarehouses, setSelectedWarehouses] = useState([]);
  const { getDotColor, getBorderColor, getBgColor } = colorUtils;
  const [filter, setFilter] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeLegend, setActiveLegend] = useState(null);

  const updateTransfer = (date, updatedTransfer) => {
    setTransfersData(prevData => {
      const dateStr = formatDateToKey(date);
      if (!prevData[dateStr]) return prevData;
  
      return {
        ...prevData,
        [dateStr]: {
          ...prevData[dateStr],
          transfers: prevData[dateStr].transfers.map(t => 
            t.from === selectedTransfer?.from && 
            t.to === selectedTransfer?.to && 
            t.date === selectedTransfer?.date
              ? {...t, ...updatedTransfer}
              : t
          )
        }
      };
    });
  };

  const formatDateToKey = (date) => {
    if (!date) return '';
    
    try {
      if (typeof date === 'string') {
        const [day, month, year] = date.split('/');
        const formattedDate = new Date(`${year}-${month}-${day}`);
        return isNaN(formattedDate.getTime()) ? '' : formattedDate.toISOString().split('T')[0];
      }
      
      const d = new Date(date);
      return isNaN(d.getTime()) ? '' : d.toISOString().split('T')[0];
    } catch {
      return '';
    }
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsMiniCalendarVisible(true);
    };

    const handleMouseLeave = (e) => {
      if (e.relatedTarget === sidebarRef.current || 
          sidebarRef.current.contains(e.relatedTarget)) {
        return;
      }
      setIsMiniCalendarVisible(false);
    };

    const hoverArea = hoverAreaRef.current;
    if (hoverArea) {
      hoverArea.addEventListener('mouseenter', handleMouseEnter);
      hoverArea.addEventListener('mouseleave', handleMouseLeave);
    }
   
    return () => {
      if (hoverArea) {
        hoverArea.removeEventListener('mouseenter', handleMouseEnter);
        hoverArea.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleFilterWarehouse = (warehouses) => {
    setSelectedWarehouses(warehouses);
  };
  
  const generateMiniCalendarDays = (date) => {
    const days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startingDay = firstDay.getDay();
    const monthLength = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = startingDay;
    const prevMonth = new Date(year, month, 0);
    const prevMonthLength = prevMonth.getDate();
    
    let day = 1;
    let nextMonthDay = 1;
    
    for (let i = 0; i < 6; i++) {
      const week = [];
      
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          week.push({
            day: prevMonthLength - prevMonthDays + j + 1,
            month: 'prev',
            hasEvent: false,
            hasInventory: false,
            isCurrentDay: false
          });
        } else if (day > monthLength) {
          week.push({
            day: nextMonthDay,
            month: 'next',
            hasEvent: false,
            hasInventory: false,
            isCurrentDay: false
          });
          nextMonthDay++;
        } else {  const dateStr = formatDateToKey(new Date(year, month, day));
          const dayTransfers = initialTransfersData[dateStr]?.transfers || [];
          const hasEvent = dayTransfers.length > 0;
          const hasInventory = dayTransfers.some(t => t.showBoxIcon);
          const isCurrentDay = day === selectedDay && 
                               month === currentMonth.getMonth() && 
                               year === currentMonth.getFullYear();
          
          // Compter les transferts et inventaires
          const transferCount = dayTransfers.filter(t => !t.showBoxIcon).length;
          const inventoryCount = dayTransfers.filter(t => t.showBoxIcon).length;
      
          week.push({
            day,
            month: 'current',
            hasEvent,
            hasInventory,
            isCurrentDay,
            transferCount,
            inventoryCount,
            dateStr // Ajouté pour référence
          });
          day++;
        }
      }
      
      days.push(week);
      
      if (day > monthLength && nextMonthDay > (7 - (day - monthLength) % 7) % 7) {
        break;
      }
    }
    
    return days;
  };



  const handleLegendClick = (legendType) => {
    setActiveLegend(prev => prev === legendType ? null : legendType);
    setActiveFilter('all');
  };

  const generateWeekData = (weekStartDate) => {
    const result = {};
    const currentDate = new Date(weekStartDate);
    
    for (let i = 0; i < 7; i++) {
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const dateStr = formatDateToKey(currentDate);
      const dayData = initialTransfersData[dateStr] || { date: String(currentDate.getDate()), transfers: [] };
      
      const filteredTransfers = dayData.transfers.filter(transfer => {
        if (activeLegend && transfer.type !== activeLegend) return false;
        if (activeFilter === 'inventory' && !transfer.showBoxIcon) return false;
        if (activeFilter === 'transfers' && transfer.showBoxIcon) return false;
        
        if (selectedWarehouses && selectedWarehouses.length > 0) {
          if (transfer.showBoxIcon) {
            return filterDirection.to && 
                   selectedWarehouses.some(warehouse => transfer.to?.includes(warehouse));
          } else {
            const fromMatch = filterDirection.from && 
                             selectedWarehouses.some(warehouse => transfer.from?.includes(warehouse));
            const toMatch = filterDirection.to && 
                            selectedWarehouses.some(warehouse => transfer.to?.includes(warehouse));
            return fromMatch || toMatch;
          }
        }
        return true;
      }).map(transfer => transfer.showBoxIcon ? { ...transfer, from: '', to: transfer.to.trim() } : transfer);
      
      result[dayOfWeek] = {
        ...dayData,
        transfers: filteredTransfers,
        date: String(currentDate.getDate()),
        fullDate: dateStr
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
    const currentWeekStart = getCurrentWeekStart();
    setSelectedWeek(new Date(currentWeekStart));
    setSelectedDay(new Date().getDate());
    setCurrentMonth(new Date());
  }, []);

  useEffect(() => {
    setMiniCalendarDays(generateMiniCalendarDays(currentMonth));
  }, [currentMonth, selectedDay]);

  useEffect(() => {
    if (selectedWeek) {
      const newTransfersData = generateWeekData(new Date(selectedWeek));
      setTransfersData(newTransfersData);
    }
  }, [selectedWeek, filter, activeFilter, activeLegend, selectedWarehouses, filterDirection]);

  useEffect(() => {
    const events = findEventsForDay(selectedDay);
    setSelectedDayEvents(events);
  }, [selectedDay, transfersData]);

  const findEventsForDay = (day) => {
    const date = new Date(currentMonth);
    date.setDate(day);
    const dateStr = formatDateToKey(date);
    return initialTransfersData[dateStr]?.transfers || [];
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
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const goToCurrentWeek = () => {
    const currentWeekStart = getCurrentWeekStart();
    setSelectedWeek(new Date(currentWeekStart));
    setSelectedDay(new Date().getDate());
    setCurrentMonth(new Date());
  };

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
            updateTransfer={updateTransfer}
          />
        </div>
      </div>
      
      <SideToolsComponent />
    </div>
  );
};

export default CalendrierTransferts;