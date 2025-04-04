import React, { useState, useEffect } from 'react';
import CalendrierTransferts from './calendrier_transfert/CalendrierTransferts';
import SideToolsComponent from './menu/SideToolsComponent';
import Loader from './Loader/Loader';
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

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Synchroniser avec l'animation GSAP du Loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Correspond à la durée totale de l'animation GSAP

    // Nettoyer le timer si le composant est démonté
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLoaderAfterLogin(true); // Activer le loader après login
    setIsLoading(true);
    
    // Désactiver le loader après 5 secondes
    setTimeout(() => {
      setIsLoading(false);
      setShowLoaderAfterLogin(false);
    }, 5000);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  // Fonction pour vérifier si l'utilisateur a accès à un composant spécifique
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

  if (isLoading || showLoaderAfterLogin) {
    return <Loader user={user} />;
  }

  const renderActiveComponent = () => {
    // Si l'utilisateur n'a pas accès au composant actif, rediriger vers le calendrier
    if (!hasAccess(activeComponent)) {
      // Rediriger vers le calendrier si c'est un Admin, ou ne rien afficher
      return user && user.role === 'Admin' ? <CalendrierTransferts /> : null;
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

  // Si l'utilisateur n'est pas connecté, afficher la page de connexion
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