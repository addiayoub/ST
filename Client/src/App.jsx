import React, { useState, useEffect } from 'react';
import CalendrierTransferts from './calendrier_transfert/CalendrierTransferts';
import SideToolsComponent from './menu/SideToolsComponent';
import Loader from './Loader/Loader';
import LoaderNesk from './Loader NESK/LoaderNesk';
import Login from './Login/Login';
import "./App.css";
import Importer from './Importer/Importer';
import Inventaires from './Planification_Inventaires/Inventaires';
import Magasin from './Magasin/Magasin';
import Utilisateurs from './Utilisateurs/Utilisateurs';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
function App() {
  const [activeComponent, setActiveComponent] = useState('calendar');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoaderAfterLogin, setShowLoaderAfterLogin] = useState(false);
  const [showInitialLoader, setShowInitialLoader] = useState(true);
  const [showLogoutLoader, setShowLogoutLoader] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [showWakeUpLoader, setShowWakeUpLoader] = useState(false);

  // Vérifier la visibilité de l'onglet
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // L'onglet redevient visible (mode veille terminé)
        setShowWakeUpLoader(true); // Afficher LoaderNesk
        setTimeout(() => setShowWakeUpLoader(false), 3000); // Disparaît après 3s
      }
      setIsTabVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  // Vérification de l'expiration du token
  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const isExpired = payload.exp * 1000 < Date.now();

          if (isExpired) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
            MySwal.fire({
              title: 'Session expirée',
              text: 'Votre session a expiré, veuillez vous reconnecter',
              icon: 'warning'
            });
          }
        } catch (error) {
          console.error('Erreur lors de la vérification du token:', error);
          // En cas d'erreur, on déconnecte par sécurité
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
        }
      }
    }, 5 * 60 * 1000); // Vérification toutes les 5 minutes

    return () => clearInterval(interval);
  }, []);

  // Vérifier si l'utilisateur est déjà connecté
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const initialLoaderTimer = setTimeout(() => {
      setShowInitialLoader(false);
    }, 3000);

    return () => {
      clearTimeout(initialLoaderTimer);
    };
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLoaderAfterLogin(true);
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowLoaderAfterLogin(false);
    }, 5000);
  };

  const handleLogout = () => {
    setShowLogoutLoader(true);
    setTimeout(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setUser(null);
      setShowLogoutLoader(false);
    }, 3000);
  };

  const hasAccess = (componentName) => {
    if (!user) return false;
    if (user.role === 'Admin') return true;
    if (user.role === 'User') return ['calendar', 'upload'].includes(componentName);
    return false;
  };

  const renderActiveComponent = () => {
    if (!hasAccess(activeComponent)) {
      return user && user.role === 'User' ? <CalendrierTransferts /> : null;
    }

    switch(activeComponent) {
      case 'calendar':
        return <CalendrierTransferts />;
      case 'upload':
        return <div><Importer/></div>;
      case 'boxes':
        return <div><Inventaires/></div>;
      case 'house':
        return <div><Magasin/></div>;
      case 'user':
        return <div><Utilisateurs/></div>;
      default:
        return <CalendrierTransferts />;
    }
  };

  // Display logic with clear priorities
  
  // 1. Show logout loader if active
  if (showLogoutLoader) {
    return <LoaderNesk />;
  }
  
  // 2. If user is not logged in
  if (!user) {
    // 2a. Initial app loader
    if (showInitialLoader) {
      return <LoaderNesk />;
    }
    
    // 2b. Wake up loader
    if (showWakeUpLoader) {
      return <LoaderNesk />;
    }
    
    // 2c. No loaders active, show login
    return <Login onLogin={handleLogin} />;
  }
  
  // 3. User is logged in but still showing loader after login
  if (isLoading || showLoaderAfterLogin) {
    return <Loader user={user} />;
  }
  
  // 4. Normal logged-in state - show the app
  return (
    <div className="App">
      <div className="user-info">
      </div>
      {renderActiveComponent()}
      <SideToolsComponent 
        activeComponent={activeComponent} 
        setActiveComponent={setActiveComponent}
        onLogout={handleLogout}
        userRole={user.role}
      />
    </div>
  );
}

export default App;