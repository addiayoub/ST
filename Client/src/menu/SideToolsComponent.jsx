import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../Css/SideToolsComponent.css';
import { CalendarDays, Upload, Boxes, HousePlus, UserCog, LogOut, DatabaseBackup, BarChart2, Zap, Database, RefreshCw } from 'lucide-react';

const SideToolsComponent = ({ activeComponent, setActiveComponent, onLogout, userRole }) => {
  const [user, setUser] = useState(null);
  const [menuVisible, setMenuVisible] = useState(true);
  const [rotating, setRotating] = useState(false);
  const [automateOpen, setAutomateOpen] = useState(false);
  const [subMenuRotating, setSubMenuRotating] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  // Track zoom level
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      // Calculate zoom level more accurately
      const currentZoom = window.devicePixelRatio || 1;
      setZoomLevel(currentZoom);
    };

    window.addEventListener('resize', handleResize);
    // Initialize zoom level
    setZoomLevel(window.devicePixelRatio || 1);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setRotating(true);
    setTimeout(() => {
      setRotating(false);
      setMenuVisible(!menuVisible);
    }, 300);
  };

  const toggleAutomate = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setSubMenuRotating(true);
    setTimeout(() => {
      setSubMenuRotating(false);
      setAutomateOpen(!automateOpen);
    }, 300);
  };

  // Close automate menu when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = () => {
      if (automateOpen) {
        setAutomateOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [automateOpen]);

  const getMenuItems = () => {
    if (!user) return [];
    
    // Define all possible menu items with their details and order
    const allMenuItems = [
      { id: 'calendar', icon: CalendarDays, tooltip: 'Calendrier Transfert', order: 1, adminOnly: false },
      { id: 'automate', icon: Zap, tooltip: 'Automate', order: 2, adminOnly: true, isAutomateButton: true },
      { id: 'upload', icon: Upload, tooltip: 'Importer Transfert', order: 3, adminOnly: false },
      { id: 'flagged', icon: DatabaseBackup, tooltip: 'Transferts intégrés', order: 4, adminOnly: false },
      { id: 'stats', icon: BarChart2, tooltip: 'Statistiques', order: 5, adminOnly: false },
      { id: 'boxes', icon: Boxes, tooltip: 'Inventaires', order: 6, adminOnly: true },
      { id: 'house', icon: HousePlus, tooltip: 'Magasin', order: 7, adminOnly: true },
      { id: 'user', icon: UserCog, tooltip: 'Utilisateurs', order: 8, adminOnly: true },
    ];
    
    // Filter items based on user role
    return allMenuItems
      .filter(item => !item.adminOnly || user.role === 'Admin')
      .sort((a, b) => a.order - b.order);
  };

  const handleMenuClick = (componentId) => {
    if (['calendar', 'upload', 'flagged', 'stats'].includes(componentId) || user?.role === 'Admin') {
      setActiveComponent(componentId);
      // Close automate menu when clicking other menu items
      if (automateOpen) {
        setAutomateOpen(false);
      }
    } else {
      setActiveComponent('calendar');
      if (automateOpen) {
        setAutomateOpen(false);
      }
    }
  };

  // Calculate button size based on zoom level
  const calculateButtonSize = () => {
    const baseSize = 48; // 3rem base size
    
    // Adjust size based on zoom level
    return baseSize * (1 / zoomLevel);
  };

  const buttonSize = calculateButtonSize();
  const buttonStyle = {
    width: `${buttonSize}px`,
    height: `${buttonSize}px`,
    fontSize: `${buttonSize * 0.5}px`,
    minWidth: `${buttonSize}px`, // Ensure minimum size
    minHeight: `${buttonSize}px` // Ensure minimum size
  };

  const menuItems = getMenuItems();
  const ToggleIcon = menuVisible ? X : Menu;

  // Render the automate submenu only if admin
  const renderAutomateSubMenu = (item) => {
    if (!item.isAutomateButton) return null;
    
    return (
      <div className="relative">
        <div className="relative group">
          <button
            onClick={(e) => toggleAutomate(e)}
            style={buttonStyle}
            className={`rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
              automateOpen ? 'bg-yellow-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 cursor-pointer'
            } ${subMenuRotating ? 'rotate-45' : ''}`}
          >
            <Zap style={{ width: `${buttonSize * 0.5}px`, height: `${buttonSize * 0.5}px` }} />
          </button>
          <span className="hidden group-hover:block absolute cursor-pointer z-10 right-full top-1/2 transform -translate-y-1/2 bg-blue-900 text-white text-xs px-3 py-2 rounded whitespace-nowrap mr-2 pointer-events-none">
            {item.tooltip}
          </span>
        </div>

        {/* Sous-menu Automate */}
        <div 
          className={`absolute right-full mr-2 top-0 transition-all duration-300 ease-in-out ${
            automateOpen ? 'opacity-100 translate-x-0 ' : 'opacity-0 translate-x-4 pointer-events-none '
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside submenu from closing it
        >
          <div className="flex flex-col space-y-3">
            {/* Bouton Insertion */}
            <div className="relative group">
              <button
                onClick={() => handleMenuClick('insert')}
                style={buttonStyle}
                className="rounded-full shadow-lg flex items-center justify-center bg-white text-gray-600 hover:bg-green-100 cursor-pointer transition-colors duration-200"
              >
                <Database style={{ width: `${buttonSize * 0.5}px`, height: `${buttonSize * 0.5}px` }} />
              </button>
              <span className="hidden group-hover:block absolute z-10 right-full top-1/2 transform -translate-y-1/2 bg-blue-900 text-white text-xs px-3 py-2 rounded whitespace-nowrap mr-2 pointer-events-none">
                Insertion dans la base
              </span>
            </div>

            {/* Bouton Batch */}
            <div className="relative group">
              <button
                onClick={() => handleMenuClick('batch')}
                style={buttonStyle}
                className="rounded-full shadow-lg flex items-center justify-center bg-white text-gray-600 hover:bg-purple-100 cursor-pointer transition-colors duration-200"
              >
                <RefreshCw style={{ width: `${buttonSize * 0.5}px`, height: `${buttonSize * 0.5}px` }} />
              </button>
              <span className="hidden group-hover:block absolute z-10 right-full top-1/2 transform -translate-y-1/2 bg-blue-900 text-white text-xs px-3 py-2 rounded whitespace-nowrap mr-2 pointer-events-none">
                Executer le batch
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render regular menu button
  const renderRegularButton = (item) => {
    if (item.isAutomateButton) return null;
    
    const Icon = item.icon;
    const isActive = activeComponent === item.id;

    return (
      <div className="relative group">
        <button
          onClick={() => handleMenuClick(item.id)}
          style={buttonStyle}
          className={`rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 relative ${
            isActive ? 'bg-blue-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 cursor-pointer'
          }`}
        >
          <Icon style={{ width: `${buttonSize * 0.5}px`, height: `${buttonSize * 0.5}px` }} />
        </button>
        <span className="hidden group-hover:block absolute z-10 right-full top-1/2 transform -translate-y-1/2 bg-blue-900 text-white text-xs px-3 py-2 rounded whitespace-nowrap mr-2 pointer-events-none">
          {item.tooltip}
        </span>
      </div>
    );
  };

  return (
    <>
      {/* Bouton de Toggle avec tooltip */}
      <div className="fixed right-6 top-[30%] z-50">
        <div className="relative group">
          <button
            onClick={toggleMenu}
            style={buttonStyle}
            className={`bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 cursor-pointer
              transition-transform duration-300 ${rotating ? 'rotate-180' : ''}`}
          >
            <ToggleIcon className="text-gray-700" style={{ width: `${buttonSize * 0.5}px`, height: `${buttonSize * 0.5}px` }} />
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
        style={{ top: '37%' }}
      >
        <div className="space-y-3">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.isAutomateButton ? renderAutomateSubMenu(item) : renderRegularButton(item)}
            </div>
          ))}

          {/* Logout button */}
          <div className="relative group">
            <button
              onClick={onLogout}
              id="btn_logout"
              style={buttonStyle}
              className="rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 bg-white text-gray-600 hover:bg-red-100"
            >
              <LogOut style={{ width: `${buttonSize * 0.5}px`, height: `${buttonSize * 0.5}px` }} />
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