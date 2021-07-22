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
exports.deleteClient = exports.queryClient = exports.getAllClient = exports.createClient = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = require("../entities/Client");
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, cardNumber, balance } = req.body;
    const client = Client_1.Client.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        balance
    });
    yield client.save();
    res.status(200).json({ client });
});
exports.createClient = createClient;
const getAllClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield Client_1.Client.find();
    return res.status(200).json({ client });
});
exports.getAllClient = getAllClient;
const queryClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield typeorm_1.createQueryBuilder('client')
        .select('client.first_name')
        .addSelect('client.balance')
        .from(Client_1.Client, 'client')
        .where('client.balance >= :balance', { balance: 500 })
        .getMany();
    return res.json({ client });
});
exports.queryClient = queryClient;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clientId } = req.params;
    const response = yield Client_1.Client.delete(parseInt(clientId));
    return res.json({ response });
});
exports.deleteClient = deleteClient;
//# sourceMappingURL=client.js.map