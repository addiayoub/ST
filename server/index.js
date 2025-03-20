import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.log(err));

// Route de test
app.get("/", (req, res) => {
  res.send("Bienvenue sur mon API MERN !");
});

app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
