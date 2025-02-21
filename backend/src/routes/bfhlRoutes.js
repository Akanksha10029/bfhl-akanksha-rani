import express from "express";
import { processData, getOperationCode } from "../controllers/bfhlController.js";

const router = express.Router();

router.post("/", processData);
router.get("/", getOperationCode);

export default router;
