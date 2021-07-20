import express from "express";
import { createBankerToClient } from "../controllers/bankerToClient";

const router = express.Router();

router.put("/banker/:bankerId/client/:clientId", createBankerToClient);

export default router;
