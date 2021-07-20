import {Request,Response} from 'express';
import { Client } from '../entities/Client';


export const createClient = async(req:Request, res:Response)=>{
    const {firstName, lastName,email,cardNumber,balance} = req.body;

    const client = Client.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        balance
    })
    await client.save()
    res.status(200).json({client})
}