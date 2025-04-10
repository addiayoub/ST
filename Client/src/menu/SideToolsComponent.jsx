import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../Css/SideToolsComponent.css';
import { CalendarDays, Upload, Boxes, HousePlus, UserCog, LogOut } from 'lucide-react';

const SideToolsComponent = ({ activeComponent, setActiveComponent, onLogout, userRole }) => {
  const [user, setUser] = useState(null);
  const [menuVisible, setMenuVisible] = useState(true);
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const toggleMenu = () => {
    setRotating(true);
    setTimeout(() => {
      setRotating(false);
      setMenuVisible(!menuVisible);
    }, 300);
  };

  const getMenuItems = () => {
    if (!user) return [];
    const baseItems = [
      { id: 'calendar', icon: CalendarDays, tooltip: 'Calendrier Transfert' },
      { id: 'upload', icon: Upload, tooltip: 'Importer Transfert' },
    ];
    const superAdminItems = [
      { id: 'boxes', icon: Boxes, tooltip: 'Inventaires' },
      { id: 'house', icon: HousePlus, tooltip: 'Magasin' },
      { id: 'user', icon: UserCog, tooltip: 'Utilisateurs' },
    ];
    return user.role === 'Admin' ? [...baseItems, ...superAdminItems] : baseItems;
  };

  const handleMenuClick = (componentId) => {
    if (['calendar', 'upload'].includes(componentId) || user?.role === 'Admin') {
      setActiveComponent(componentId);
    } else {
      setActiveComponent('calendar');
    }
  };

  const menuItems = getMenuItems();
  const ToggleIcon = menuVisible ? X : Menu;

  return (
    <>
      {/* Bouton de Toggle avec tooltip */}
      <div className="fixed right-6 top-[30%] z-50">
        <div className="relative group">
          <button
            onClick={toggleMenu}
            className={`w-12 h-12  bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 cursor-pointer
              transition-transform duration-300 ${rotating ? 'rotate-180' : ''}`}
          >
            <ToggleIcon className="text-gray-700" />
          </button>
          <span className="hidden group-hover:block absolute z-10 right-full top-1/2 transform -translate-y-1/2 bg-blue-900 text-white text-xs px-3 py-2 rounded whitespace-nowrap mr-2 pointer-events-none">
            {menuVisible ? 'Masquer le menu' : 'Afficher le menu'}
          </span>
        </div>
      </div>

      {/* Menu latéral */}
      <div 
        className={`fixed right-6 z-40 transition-all duration-300 ease-in-out ${
          menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ top: '40%' }}
      >
        <div className="space-y-3">
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
                <span className="hidden group-hover:block absolute z-10 right-full top-1/2 transform -translate-y-1/2 bg-blue-900 text-white text-xs px-3 py-2 rounded whitespace-nowrap mr-2 pointer-events-none">
                  {item.tooltip}
                </span>
              </div>
            );
          })}

          {/* Logout button */}
          <div className="relative group">
            <button
              onClick={onLogout}
              id="btn_logout"
              className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 bg-white text-gray-600 hover:bg-red-100"
            >
              <LogOut />
            </button>
            <span className="hidden group-hover:block absolute z-10 right-full top-1/2 transform -translate-y-1/2 bg-red-500 text-white text-xs px-3 py-2 rounded whitespace-nowrap mr-2 pointer-events-none">
              Déconnexion
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideToolsComponent;