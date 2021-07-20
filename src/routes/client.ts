import express from "express";
import { createClient } from "../controllers/client";

const router = express.Router();

router.post("/", createClient);

export default router;
