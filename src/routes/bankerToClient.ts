import express from "express";
import { createBankerToClient } from "../controllers/bankerToClient";

const router = express.Router();

router.post("/client/:clientId/transaction", createBankerToClient);

export default router;
