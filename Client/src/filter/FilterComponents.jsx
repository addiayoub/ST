import React from 'react';
import { Warehouse, ChevronLeft, ChevronRight, Funnel, Boxes } from 'lucide-react';

const FilterComponent = ({ 
  goToPrevWeek, 
  goToNextWeek, 
  goToCurrentWeek,
  onFilterAll,
  onFilterInventory,
  onFilterTransfers,
  activeFilter,
  formatSelectedDate  
}) => {
  return (
    <div className="flex items-center p-3 bg-white">
      {/* Week Navigation Buttons */}
      <div className="flex items-center mr-6">
        <button 
          id='Today1' 
          className="px-3 py-1 group relative" 
          onClick={goToPrevWeek}
        >
          <ChevronLeft />
          <span className="
            hidden group-hover:block 
            absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 
            bg-blue-800 text-white text-xs 
            px-2 py-1 rounded 
            whitespace-nowrap 
            mb-2
          ">
Go to previous week          </span>
        </button>
        
        <button 
          id='Today1' 
          className="px-3 py-1 group relative" 
          onClick={goToCurrentWeek}
        >
          THIS WEEK
          <span className="
            hidden group-hover:block 
            absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 
            bg-blue-800 text-white text-xs 
            px-2 py-1 rounded 
            whitespace-nowrap 
            mb-2
          ">
Return to current week          </span>
        </button>
        
        <button 
          id='Today1' 
          className="px-3 py-1 group relative" 
          onClick={goToNextWeek}
        >
          <ChevronRight />
          <span className="
            hidden group-hover:block 
            absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 
            bg-blue-800 text-white text-xs 
            px-2 py-1 rounded 
            whitespace-nowrap 
            mb-2
          ">
Go to next week          </span>
        </button>
      </div>
      
      {/* Selected Date */}
      <div className='flex items-center ml-auto text-lg font-bold'>
        {formatSelectedDate()}
      </div> 
      
      {/* Filter Buttons */}
      <div className='flex items-center ml-auto'>
        <div className="flex"> 
          {/* All Filter Button */}
          <button 
            id='All1' 
            className={`px-3 py-1 rounded-md transition-all group relative ${
              activeFilter === 'all' 
                ? 'border-2 border-blue-500 shadow-md shadow-blue-200 bg-blue-50' 
                : 'border border-blue-200'
            }`}
            onClick={onFilterAll}
          >
            ALL
            <span className="
              hidden group-hover:block 
              absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 
              bg-blue-800 text-white text-xs 
              px-2 py-1 rounded 
              whitespace-nowrap 
              mb-2
            ">
              Show All Items
            </span>
          </button>
          
          {/* Inventory Filter Button */}
          <button 
            id='All1' 
            className={`p-2 mx-1 rounded-md transition-all group relative ${
              activeFilter === 'inventory' 
                ? 'border-2 border-blue-500 shadow-md shadow-blue-200 bg-blue-50' 
                : 'border border-blue-200'
            }`}
            onClick={onFilterInventory}
          >
            <Boxes />
            <span className="
              hidden group-hover:block 
              absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 
              bg-blue-800 text-white text-xs 
              px-2 py-1 rounded 
              whitespace-nowrap 
              mb-2
            ">
Filter inventory            </span>
          </button>
          
          {/* Transfers Filter Button */}
          <button 
            id='All1' 
            className={`px-3 py-1 rounded-md transition-all group relative ${
              activeFilter === 'transfers' 
                ? 'border-2 border-blue-500 shadow-md shadow-blue-200 bg-blue-50' 
                : 'border border-blue-200'
            }`}
            onClick={onFilterTransfers}
          >
            Transfers
            <span className="
              hidden group-hover:block 
              absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 
              bg-blue-800 text-white text-xs 
              px-2 py-1 rounded 
              whitespace-nowrap 
              mb-2
            ">
Filter transfers            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;