"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("../controllers/client");
const router = express_1.default.Router();
router.get("/", client_1.getAllClient);
router.get("/q", client_1.queryClient);
router.post("/create", client_1.createClient);
router.delete("/delete/:clientId", client_1.deleteClient);
exports.default = router;
//# sourceMappingURL=client.js.map