import express from "express";
import { createClient, getAllClient, queryClient } from "../controllers/client";
import { deleteClient } from "../controllers/client";

const router = express.Router();

router.get("/",getAllClient)
router.get("/q",queryClient)
router.post("/create", createClient);
router.delete("/delete/:clientId", deleteClient)
export default router;
