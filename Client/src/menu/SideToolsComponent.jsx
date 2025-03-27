import React from 'react';
import { CalendarDays, Upload, Boxes, HousePlus, UserCog, List } from 'lucide-react';

const SideToolsComponent = ({ activeComponent, setActiveComponent }) => {
  // Menu items configuration with tooltips
  const menuItems = [
    { id: 'calendar', icon: CalendarDays, tooltip: 'Calendar Tranfert' },
    { id: 'upload', icon: Upload, tooltip: 'Upload Tranfert' },
    { id: 'boxes', icon: Boxes, tooltip: 'Inventory' },
    { id: 'house', icon: HousePlus, tooltip: 'Add Location' },
    { id: 'user', icon: UserCog, tooltip: 'User Settings' },
    { id: 'list', icon: List, tooltip: 'List View' }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-3">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeComponent === item.id;
        
        return (
          <div 
            key={item.id} 
            className="relative group"
          >
            <button 
              onClick={() => setActiveComponent(item.id)}
              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 relative ${
                isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 cursor-pointer'
              }`}
            >
              <Icon />
            </button>
            
            {/* Hover Tooltip */}
            <span className="
              hidden group-hover:block 
              absolute z-10 right-full top-1/2 transform -translate-y-1/2 
              bg-blue-800 text-white text-xs 
              px-3 py-2 rounded 
              whitespace-nowrap 
              mr-2
              pointer-events-none
            ">
              {item.tooltip}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SideToolsComponent;