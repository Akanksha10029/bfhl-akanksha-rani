import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bfhlRoutes from "./src/routes/bfhlRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});
app.use("/bfhl", bfhlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
