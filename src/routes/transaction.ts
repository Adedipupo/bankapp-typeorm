import express from "express";
import { createTransaction } from "src/controllers/transaction";

const router = express.Router();

router.post("/client/:clientId/transaction", createTransaction);

export default router;
