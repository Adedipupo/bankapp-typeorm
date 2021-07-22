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
exports.createBanker = void 0;
const Banker_1 = require("../entities/Banker");
const createBanker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, cardNumber, employeeNumber } = req.body;
    const banker = Banker_1.Banker.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        employee_number: employeeNumber
    });
    yield banker.save();
    res.status(200).json({ banker });
});
exports.createBanker = createBanker;
//# sourceMappingURL=banker.js.map