import React, { useState, useEffect } from 'react';
import CalendrierTransferts from './calendrier_transfert/CalendrierTransferts';
import SideToolsComponent from './menu/SideToolsComponent';
import Loader from './Loader/Loader';
import "./App.css"
import Importer from './Importer/Importer';
import Inventaires from './Planification_Inventaires/Inventaires';
import Magasin from './Magasin/Magasin';
import Utilisateurs from './Utilisateurs/Utilisateurs';

function App() {
  const [activeComponent, setActiveComponent] = useState('calendar');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Synchroniser avec l'animation GSAP du Loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500
    ); // Correspond à la durée totale de l'animation GSAP

    // Nettoyer le timer si le composant est démonté
    return () => clearTimeout(timer);
  }, []);

  const renderActiveComponent = () => {
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
      case 'list':
        return <div>List Component</div>;
      default:
        return <CalendrierTransferts />;
    }
  };

  // Si le chargement est en cours, afficher le Loader
  if (isLoading) {
   return <Loader />;
  }

  return (
    <div className="App">
      {renderActiveComponent()}
      <SideToolsComponent 
        activeComponent={activeComponent} 
        setActiveComponent={setActiveComponent} 
      />
    </div>
  );
}

export default App;