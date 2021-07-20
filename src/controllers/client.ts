import {Request,Response} from 'express';


export const createClient = async(req:Request, res:Response)=>{
    const name = req.body;

    res.status(200).json({name})
}