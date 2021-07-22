"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transaction_1 = require("../controllers/transaction");
const router = express_1.default.Router();
router.post("/client/:clientId/transaction", transaction_1.createTransaction);
exports.default = router;
//# sourceMappingURL=transaction.js.map