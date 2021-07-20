import {Request,Response} from 'express';
import { Client } from '../entities/Client';
import { Banker } from '../entities/Banker';

export const createBankerToClient = async(req:Request, res:Response)=>{
    const {bankerId,clientId} = req.params;

    const client = await Client.findOne(parseInt(clientId));
    const banker = await Banker.findOne(parseInt(bankerId));
}