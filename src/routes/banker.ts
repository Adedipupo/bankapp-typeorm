import express from "express";
import { createBanker } from "../controllers/banker";

const router = express.Router();

router.post("/create", createBanker);

export default router;
