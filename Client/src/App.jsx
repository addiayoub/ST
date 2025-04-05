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

function App() {
  const [activeComponent, setActiveComponent] = useState('calendar');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoaderAfterLogin, setShowLoaderAfterLogin] = useState(false);
  const [showInitialLoader, setShowInitialLoader] = useState(true);
  const [showLogoutLoader, setShowLogoutLoader] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true); // Nouvel état pour la visibilité de l'onglet
  const [showWakeUpLoader, setShowWakeUpLoader] = useState(false); // Nouvel état pour le loader après réveil

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

  // Vérifier si l'utilisateur est déjà connecté
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const initialLoaderTimer = setTimeout(() => {
      setShowInitialLoader(false);
    }, 3000);

    const loginLoaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(initialLoaderTimer);
      clearTimeout(loginLoaderTimer);
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

  // Afficher LoaderNesk après logout
  if (showLogoutLoader) {
    return <LoaderNesk />;
  }

  // Afficher LoaderNesk avant le login (si pas d'utilisateur)
  if (!user && showInitialLoader) {
    return <LoaderNesk />;
  }

  // Afficher LoaderNesk quand l'utilisateur revient après inactivité (mode veille)
  if (showWakeUpLoader && !user) {
    return <LoaderNesk />;
  }

  // Afficher le Loader normal après login
  if (isLoading || showLoaderAfterLogin) {
    return <Loader user={user} />;
  }

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

  // Si l'utilisateur n'est pas connecté et le loader initial est terminé, afficher Login
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

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