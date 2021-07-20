import {Request,Response} from 'express';
import { Client } from 'src/entities/Client';
import { Transaction } from '../entities/Transaction';


export const createTransaction = async(req:Request, res:Response)=>{
    const {clientId} = req.params;
    const {type,amount} = req.body;

    const client = await Client.findOne(parseInt(clientId))

    if(!client){
        return res.status(400).json({
            msg: 'Client not found'
        })
    }

    const transaction = Transaction.create({
        type,
        amount,
        client
    })

    await transaction.save()
    res.status(200).json({transaction})
}