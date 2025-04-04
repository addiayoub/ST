import React, { useEffect, useState } from 'react';
import { CalendarDays, Upload, Boxes, HousePlus, UserCog, LogOut } from 'lucide-react';
import '../Css/SideToolsComponent.css';

const SideToolsComponent = ({ activeComponent, setActiveComponent, onLogout }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Récupérer les informations de l'utilisateur depuis localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Configuration des éléments du menu en fonction du rôle
  const getMenuItems = () => {
    if (!user) return [];
    
    // Base items for Admin role
    const baseItems = [
      { id: 'calendar', icon: CalendarDays, tooltip: 'Calendrier Transfert' },
      { id: 'upload', icon: Upload, tooltip: 'Importer Transfert' },
    ];

    // Additional items for Super Admin role
    const superAdminItems = [
      { id: 'boxes', icon: Boxes, tooltip: 'Inventaires' },
      { id: 'house', icon: HousePlus, tooltip: 'Magasin' },
      { id: 'user', icon: UserCog, tooltip: 'Utilisateurs' },
    ];

    // Return the appropriate items based on user role
    return user.role === 'Super Admin' ? [...baseItems, ...superAdminItems] : baseItems;
  };

  const menuItems = getMenuItems();

  // Vérifie si l'utilisateur a accès à un composant
  const hasAccess = (componentName) => {
    if (!user) return false;
    
    // Super Admin a accès à tout
    if (user.role === 'Super Admin') return true;
    
    // Admin a accès seulement au calendrier et à l'importation
    if (user.role === 'Admin') {
      return ['calendar', 'upload'].includes(componentName);
    }
    
    return false;
  };

  // Gère le clic sur un élément du menu
  const handleMenuClick = (componentId) => {
    // Vérifie si l'utilisateur a accès à ce composant
    if (hasAccess(componentId)) {
      setActiveComponent(componentId);
    } else {
      // Si pas d'accès, rediriger vers le calendrier (ou autre action)
      setActiveComponent('calendar');
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-3">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeComponent === item.id;
        
        return (
          <div key={item.id} className="relative group">
            <button 
              onClick={() => handleMenuClick(item.id)}
              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 relative ${
                isActive ? 'bg-blue-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 cursor-pointer'
              }`}
            >
              <Icon />
            </button>
            
            {/* Info-bulle */}
            <span className="
              hidden group-hover:block 
              absolute z-10 right-full top-1/2 transform -translate-y-1/2 
              bg-blue-900 text-white text-xs 
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

      {/* Bouton de déconnexion (toujours affiché en dernier) */}
      <div className="relative group">
        <button 
          onClick={onLogout}
          id='btn_logout'
          className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 bg-white text-gray-600 hover:bg-red-100"
        >
          <LogOut />
        </button>
        
        {/* Info-bulle pour la déconnexion */}
        <span className="
          hidden group-hover:block 
          absolute z-10 right-full top-1/2 transform -translate-y-1/2 
          bg-red-500 text-white text-xs 
          px-3 py-2 rounded 
          whitespace-nowrap 
          mr-2
          pointer-events-none
        ">
          Déconnexion
        </span>
      </div>
    </div>
  );
};

export default SideToolsComponent;