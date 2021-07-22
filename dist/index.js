"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const client_1 = __importDefault(require("./routes/client"));
const banker_1 = __importDefault(require("./routes/banker"));
const transaction_1 = __importDefault(require("./routes/transaction"));
const bankerToClient_1 = __importDefault(require("./routes/bankerToClient"));
const Banker_1 = require("./entities/Banker");
const Client_1 = require("./entities/Client");
const Transaction_1 = require("./entities/Transaction");
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.PORT || 8080;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield typeorm_1.createConnection({
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [Client_1.Client, Banker_1.Banker, Transaction_1.Transaction],
            synchronize: true,
            ssl: {
                rejectUnauthorized: false,
            }
        });
        console.log("Connected to postgres");
        app.use(express_1.default.json());
        app.use('/client', client_1.default);
        app.use('/banker', banker_1.default);
        app.use('/api', transaction_1.default);
        app.use('/api', bankerToClient_1.default);
        app.listen(port, () => {
            console.log(`Now runing on port ${port}`);
        });
    }
    catch (error) {
        console.error(error);
        throw new Error("Unable to connect to postgres");
    }
});
main();
//# sourceMappingURL=index.js.map