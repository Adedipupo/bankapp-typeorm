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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransaction = void 0;
const Client_1 = require("../entities/Client");
const Transaction_1 = require("../entities/Transaction");
const createTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clientId } = req.params;
    const { type, amount } = req.body;
    const client = yield Client_1.Client.findOne(parseInt(clientId));
    if (!client) {
        return res.status(400).json({
            msg: 'Client not found'
        });
    }
    const transaction = Transaction_1.Transaction.create({
        type,
        amount,
        client
    });
    yield transaction.save();
    if (type === Transaction_1.TransactionTypes.DEPOSIT) {
        client.balance = client.balance + amount;
    }
    else if (type === Transaction_1.TransactionTypes.WITHDRAW) {
        client.balance = client.balance - amount;
    }
    yield client.save();
    return res.status(201).json({
        msg: 'transaction added'
    });
});
exports.createTransaction = createTransaction;
//# sourceMappingURL=transaction.js.map