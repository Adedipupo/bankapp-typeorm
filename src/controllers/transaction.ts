import {Request,Response} from 'express';
import { Client } from '../entities/Client';
import { Transaction, TransactionTypes } from '../entities/Transaction';


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

    if(type === TransactionTypes.DEPOSIT){
        client.balance = client.balance + amount;
    }else if(type === TransactionTypes.WITHDRAW){
        client.balance = client.balance - amount
    }
    await client.save()

    return res.status(201).json({
        msg:'transaction added'
    })

}