"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const banker_1 = require("../controllers/banker");
const router = express_1.default.Router();
router.post("/create", banker_1.createBanker);
exports.default = router;
//# sourceMappingURL=banker.js.map