const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');
const magasins = require('./routes/magasinRoutes');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');


// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données
connectDB();

const app = express();

// Middleware pour parser le JSON
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL, // Utilisez la variable d'environnement
    credentials: true // Si vous utilisez des cookies/sessions
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/magasins', magasins);
// Middleware de gestion des erreurs
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Serveur lancé sur http://${HOST}:${PORT}`);
});

app.listen(PORT, () => console.log(`Serveur en marche sur le port ${PORT}`));//