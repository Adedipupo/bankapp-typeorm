import {Request,Response} from 'express';
import { Client } from 'src/entities/Client';
import { Transaction } from '../entities/Transaction';


export const createTransaction = async(req:Request, res:Response)=>{
    const {clientId} = req.params;
    const {type,amount} = req.body;

    const client = await Client.findOne(parseInt(clientId))
    res.status(200).json({})
}