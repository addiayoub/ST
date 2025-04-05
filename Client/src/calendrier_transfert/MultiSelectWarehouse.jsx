import React, { useState, useRef, useEffect } from 'react';
import { Warehouse, X, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { destinations } from '../calendrier_transfert/data';

const MultiSelectWarehouse = ({ 
  selectedWarehouses = [], 
  onChange,
  placeholder = "Sélectionner magasins",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  
  const filteredWarehouses = destinations.filter(
    warehouse => warehouse.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleWarehouse = (warehouse) => {
    const updatedSelection = selectedWarehouses.includes(warehouse)
      ? selectedWarehouses.filter(item => item !== warehouse)
      : [...selectedWarehouses, warehouse];
    
    onChange(updatedSelection);
  };

  const toggleSelectAll = () => {
    onChange(selectedWarehouses.length === destinations.length ? [] : [...destinations]);
  };

  const removeWarehouse = (warehouse, e) => {
    e.stopPropagation();
    onChange(selectedWarehouses.filter(item => item !== warehouse));
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Main dropdown button */}
      <div
        className={`flex items-center justify-between p-3 border rounded-lg bg-white cursor-pointer transition-all duration-200 ${
          isOpen ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300 hover:border-blue-400"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-2 items-center flex-1 min-h-8 overflow-hidden">
          {selectedWarehouses.length === 0 ? (
            <span className="text-gray-500 truncate">{placeholder}</span>
          ) : selectedWarehouses.length <= 3 ? (
            selectedWarehouses.map(warehouse => (
              <div 
                key={warehouse} 
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1 transition-all hover:bg-blue-200"
              >
                <span className="truncate max-w-[120px]">{warehouse}</span>
                <X 
                  size={14} 
                  className="flex-shrink-0 cursor-pointer text-blue-600 hover:text-blue-800" 
                  onClick={(e) => removeWarehouse(warehouse, e)}
                />
              </div>
            ))
          ) : (
            <div className="text-blue-800 font-medium">
              {selectedWarehouses.length} magasins sélectionnés
            </div>
          )}
        </div>
        
        <div className="flex items-center ml-2">
          <Warehouse size={18} className="text-blue-600" />
          {isOpen ? (
            <ChevronUp size={20} className="text-gray-600 ml-1" />
          ) : (
            <ChevronDown size={20} className="text-gray-600 ml-1" />
          )}
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden animate-fadeIn">
          {/* Search input */}
          <div className="p-3 border-b border-gray-100 bg-gray-50">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full p-2 pl-9 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
              <svg
                className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Select all option */}
          <div 
            className="p-2 hover:bg-blue-50 cursor-pointer transition-colors"
            onClick={toggleSelectAll}
          >
            <label className="flex items-center cursor-pointer px-2 py-1.5">
              <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${
                selectedWarehouses.length === destinations.length 
                  ? "bg-blue-500 border-blue-500" 
                  : "border-gray-300"
              }`}>
                {selectedWarehouses.length === destinations.length && (
                  <Check size={14} className="text-white" />
                )}
              </div>
              <span className="text-sm font-medium">Sélectionner tout</span>
            </label>
          </div>

          {/* List of warehouses */}
          <div className="max-h-60 overflow-y-auto divide-y divide-gray-100">
            {filteredWarehouses.length > 0 ? (
              filteredWarehouses.map((warehouse) => (
                <div 
                  key={warehouse} 
                  className={`px-2 py-1.5 hover:bg-blue-50 cursor-pointer transition-colors ${
                    selectedWarehouses.includes(warehouse) ? "bg-blue-50" : ""
                  }`}
                  onClick={() => toggleWarehouse(warehouse)}
                >
                  <div className="flex items-center px-2 py-1.5">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${
                      selectedWarehouses.includes(warehouse)
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}>
                      {selectedWarehouses.includes(warehouse) && (
                        <Check size={14} className="text-white" />
                      )}
                    </div>
                    <span className="text-sm flex-1">{warehouse}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500 text-sm">
                Aucun magasin trouvé
              </div>
            )}
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MultiSelectWarehouse;