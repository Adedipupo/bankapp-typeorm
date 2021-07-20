import {Request,Response} from 'express';
import { Transaction } from '../entities/Transaction';


export const createTransaction = async(req:Request, res:Response)=>{

    const transaction = Transaction.create({
        
    })
    await transaction.save()
    res.status(200).json({transaction})
}