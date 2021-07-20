import {Request,Response} from 'express';
import { createQueryBuilder } from 'typeorm';
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
export const getAllClient = async(req:Request, res:Response)=>{
    const client = await Client.find()

    return res.status(200).json({client})
}

export const queryClient = async(req:Request, res:Response)=>{
    const client = createQueryBuilder(
        'client'
    )
    .select('client')
    .from(Client,'client')
    .where('client.id = :clientId', {clientId: 3})
    .getOne()
}

export const deleteClient = async(req:Request, res:Response)=>{
    const {clientId} = req.params;

   const response = await Client.delete(parseInt(clientId))

   return res.json({response})
}