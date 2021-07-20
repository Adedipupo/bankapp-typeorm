import {Request,Response} from 'express';
import { Client } from 'src/entities/Client';


export const createClient = async(req:Request, res:Response)=>{
    const {firstName, lastName,email,cardNumber,balance} = req.body;

    const client = Client.create({
        first_name: firstName,
        last_name: lastName,
        email: email,
        card_number: cardNumber,
        balance: balance,
    })
    res.status(200).json({name})
}