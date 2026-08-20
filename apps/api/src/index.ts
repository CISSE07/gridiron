import express from "express";
import cors from "cors";

// On crée l'application Express (le "réceptionniste")
const app = express();

app.use(cors());          // autorise web/mobile à appeler l'API
app.use(express.json());  // sait lire le JSON envoyé dans les requêtes

// Notre premier endpoint : une route de "santé"
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "gridiron-api" });
});

// On démarre le serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🏈 API GridIron démarrée sur http://localhost:${PORT}`);
});
