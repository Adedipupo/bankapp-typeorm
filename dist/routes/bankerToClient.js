"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bankerToClient_1 = require("../controllers/bankerToClient");
const router = express_1.default.Router();
router.put("/banker/:bankerId/client/:clientId", bankerToClient_1.createBankerToClient);
exports.default = router;
//# sourceMappingURL=bankerToClient.js.map