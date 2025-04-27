import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from './les apis/api';
import { getMagasins } from './les apis/magasinService';
import { List, Truck, ClipboardList } from 'lucide-react';  
import {DatabaseBackup} from 'lucide-react'
export default function FlaggedTransfersComponent() {
  const [regularTransfers, setRegularTransfers] = useState([]);
  const [manualTransfers, setManualTransfers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stores, setStores] = useState([]);
  const [activeTab, setActiveTab] = useState('tous');
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Filtres locaux
  const [fromStoreFilter, setFromStoreFilter] = useState('');
  const [toStoreFilter, setToStoreFilter] = useState('');

  // Couleurs inspirées du logo NESK Investment
  const colors = {
    darkTeal: '#155E63',
    mediumTeal: '#2D8C8C',
    lightTeal: '#6EB9B3',
    gray: '#A0A9A9',
    darkGray: '#4A5859',
    white: '#FFFFFF'
  };
  

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      await Promise.all([
        fetchStores(),
        fetchAllTransfers()
      ]);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors du chargement des données');
    }
  };

  const fetchStores = async () => {
    try {
      const data = await getMagasins();
      setStores(data.data);
    } catch (err) {
      console.error('Erreur lors du chargement des magasins:', err);
    }
  };

  const fetchAllTransfers = async () => {
    setLoading(true);
    setIsRefreshing(true);
    try {
      await Promise.all([
        fetchRegularTransfers(),
        fetchManualTransfers()
      ]);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors du chargement des transferts');
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  const fetchRegularTransfers = async () => {
    try {
      const response = await api.get('/api/transfers/flagged');
      setRegularTransfers(response.data.success ? response.data.data : []);
    } catch (err) {
      console.error('Erreur transferts standards:', err);
      setRegularTransfers([]);
    }
  };

  const fetchManualTransfers = async () => {
    try {
      const response = await api.get('/api/transfers-manuel/flagged');
      setManualTransfers(response.data.success ? response.data.data : []);
    } catch (err) {
      console.error('Erreur transferts manuels:', err);
      setManualTransfers([]);
    }
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Fonction pour filtrer localement les transferts
  const getFilteredTransfers = () => {
    let transfers = [];
    
    // Combiner les transferts selon l'onglet actif
    switch (activeTab) {
      case 'regular':
        transfers = [...regularTransfers.map(t => ({ ...t, transferType: 'regular' }))];
        break;
      case 'manual':
        transfers = [...manualTransfers.map(t => ({ ...t, transferType: 'manual' }))];
        break;
      default:
        transfers = [
          ...regularTransfers.map(t => ({ ...t, transferType: 'regular' })),
          ...manualTransfers.map(t => ({ ...t, transferType: 'manual' }))
        ];
    }

    // Appliquer les filtres locaux
    if (fromStoreFilter) {
      transfers = transfers.filter(transfer => {
        const fromStoreName = (transfer.from && transfer.from.nomMagasin) || 
                            (transfer.fromLocation && transfer.fromLocation.nomMagasin);
        return fromStoreName === fromStoreFilter;
      });
    }

    if (toStoreFilter) {
      transfers = transfers.filter(transfer => {
        const toStoreName = (transfer.to && transfer.to.nomMagasin) || 
                          (transfer.toLocation && transfer.toLocation.nomMagasin);
        return toStoreName === toStoreFilter;
      });
    }

    // Trier par date (plus récent d'abord)
    return transfers.sort((a, b) => new Date(b.Date || b.transferDate) - new Date(a.Date || a.transferDate));
  };

  const totalRegularTransfers = regularTransfers.length;
  const totalManualTransfers = manualTransfers.length;
  const totalTransfers = totalRegularTransfers + totalManualTransfers;
  const filteredTransfers = getFilteredTransfers();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flagged-transfers-container flex flex-col w-full bg-gray-50 p-4 md:p-6"
    >
      {/* En-tête */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-full p-4 mb-6 rounded-lg shadow-md relative overflow-hidden"
        style={{ background: `linear-gradient(to right, ${colors.darkTeal}, ${colors.mediumTeal})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10"></div>
        <div className="relative z-10 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">Transferts intégrés</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchAllTransfers}
            className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
            disabled={isRefreshing}
          >
          <DatabaseBackup />
          </motion.button>
        </div>
      </motion.div>

      {/* Filtres et options */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-6 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Filtre par magasin source */}
          <motion.div variants={itemVariants}>
            <label htmlFor="fromStoreFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Magasin source
            </label>
            <select
              id="fromStoreFilter"
              value={fromStoreFilter}
              onChange={(e) => setFromStoreFilter(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              style={{ borderColor: colors.gray }}
            >
              <option value="">Tous les magasins</option>
              {Array.from(new Set(stores.map(store => store.nomMagasin))).map((nomMagasin, index) => (
                <option key={`from-${index}`} value={nomMagasin}>{nomMagasin}</option>
              ))}
            </select>
          </motion.div>

          {/* Filtre par magasin destination */}
          <motion.div variants={itemVariants}>
            <label htmlFor="toStoreFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Magasin destination
            </label>
            <select
              id="toStoreFilter"
              value={toStoreFilter}
              onChange={(e) => setToStoreFilter(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              style={{ borderColor: colors.gray }}
            >
              <option value="">Tous les magasins</option>
              {Array.from(new Set(stores.map(store => store.nomMagasin))).map((nomMagasin, index) => (
                <option key={`to-${index}`} value={nomMagasin}>{nomMagasin}</option>
              ))}
            </select>
          </motion.div>

          {/* Bouton pour réinitialiser les filtres */}
          <motion.div variants={itemVariants} className="flex items-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setFromStoreFilter('');
                setToStoreFilter('');
              }}
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              disabled={!fromStoreFilter && !toStoreFilter}
            >
              Réinitialiser les filtres
            </motion.button>
          </motion.div>
        </div>

        {/* Tabs pour choisir le type de transfert */}
        <motion.div variants={itemVariants} className="flex rounded-md shadow-sm overflow-hidden">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => changeTab('tous')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'tous' 
                ? 'bg-white text-gray-800' 
                : 'text-white'
            }`}
            style={{ 
              backgroundColor: activeTab === 'tous' ? 'white' : colors.mediumTeal,
            }}
          >
            Tous ({totalTransfers})
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => changeTab('regular')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'regular' 
                ? 'bg-white text-gray-800' 
                : 'text-white'
            }`}
            style={{ 
              backgroundColor: activeTab === 'regular' ? 'white' : colors.lightTeal,
            }}
          >
            Transferts standards ({totalRegularTransfers})
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => changeTab('manual')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'manual' 
                ? 'bg-white text-gray-800' 
                : 'text-white'
            }`}
            style={{ 
              backgroundColor: activeTab === 'manual' ? 'white' : colors.darkTeal,
            }}
          >
            Transferts manuels ({totalManualTransfers})
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div 
  variants={containerVariants}
  className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
>
  <motion.div 
    variants={itemVariants}
    className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
  >
    <div className="flex items-center gap-2">
      <List size={30} className="text-gray-400" />
      <p className="text-m font-medium text-gray-500">Transferts affichés</p>
    </div>
    <motion.p 
      key={`filtered-${filteredTransfers.length}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="mt-1 text-2xl font-semibold"
      style={{ color: colors.darkTeal }}
    >
      {filteredTransfers.length}
    </motion.p>
  </motion.div>
  
  <motion.div 
    variants={itemVariants}
    className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
  >
    <div className="flex items-center gap-2">
      <Truck size={30} className="text-gray-400" />
      <p className="text-m font-medium text-gray-500">Transferts standards</p>
    </div>
    <motion.p 
      key={totalRegularTransfers}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="mt-1 text-2xl font-semibold"
      style={{ color: colors.mediumTeal }}
    >
      {totalRegularTransfers}
    </motion.p>
  </motion.div>
  
  <motion.div 
    variants={itemVariants}
    className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
  >
    <div className="flex items-center gap-2">
      <ClipboardList size={30} className="text-gray-400" />
      <p className="text-m font-medium text-gray-500">Transferts manuels</p>
    </div>
    <motion.p 
      key={totalManualTransfers}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="mt-1 text-2xl font-semibold"
      style={{ color: colors.darkTeal }}
    >
      {totalManualTransfers}
    </motion.p>
  </motion.div>
</motion.div>
      <br />
      {/* Contenu principal */}
      <motion.div 
        variants={containerVariants}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        {loading ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center p-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="rounded-full h-12 w-12 border-t-2 border-b-2"
              style={{ borderColor: colors.mediumTeal }}
            ></motion.div>
          </motion.div>
        ) : error ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 text-center text-red-600"
          >
            <p>{error}</p>
          </motion.div>
        ) : filteredTransfers.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 text-center text-gray-500"
          >
            <p>Aucun transfert trouvé avec les critères sélectionnés.</p>
          </motion.div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead style={{ backgroundColor: colors.lightTeal }}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Numéro</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">De</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Vers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Quantité</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <AnimatePresence>
                  {filteredTransfers.map((transfer) => (
                    <motion.tr
                      key={`${transfer.transferType}-${transfer._id}`}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0 }}
                      whileHover={{ backgroundColor: 'rgba(110, 185, 179, 0.05)' }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full text-white"
                          style={{ 
                            backgroundColor: transfer.transferType === 'manual' ? colors.darkTeal : colors.mediumTeal
                          }}
                        >
                          {transfer.transferType === 'manual' ? 'Manuel' : 'Standard'}
                        </motion.span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transfer.Document_Number || `TM-${transfer._id.slice(-6)}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(transfer.Date || transfer.transferDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {(transfer.from && transfer.from.nomMagasin) || 
                          (transfer.fromLocation && transfer.fromLocation.nomMagasin) || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {(transfer.to && transfer.to.nomMagasin) || 
                          (transfer.toLocation && transfer.toLocation.nomMagasin) || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transfer.quantity || transfer.totalQuantity || 0}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-white" 
                          style={{ 
                            backgroundColor: 
                              (transfer.status === 'Confirmé' || transfer.status === 'confirmed') ? colors.darkTeal :
                              (transfer.status === 'En cours' || transfer.status === 'processing') ? colors.mediumTeal :
                              (transfer.status === 'En attente' || transfer.status === 'pending') ? colors.gray :
                              (transfer.status === 'Annulé' || transfer.status === 'cancelled') ? '#DC2626' :
                              colors.lightTeal
                          }}
                        >
                          {transfer.status}
                        </motion.span>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

     
    </motion.div>
  );
}