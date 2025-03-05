import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bfhlRoutes from "./src/routes/bfhlRoutes.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(cors({ origin: "*"}));
app.use(express.json());

// API Routes
app.use("/bfhl", bfhlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
