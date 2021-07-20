import express from "express";
import { createClient } from "../controllers/client";
import { deleteClient } from "../controllers/client";

const router = express.Router();

router.post("/create", createClient);
router.delete("/delete/:clientId", deleteClient)
export default router;
