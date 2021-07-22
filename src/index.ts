import express from 'express';
import dotenv from 'dotenv';
import { createConnection } from "typeorm";
import clientRoutes  from './routes/client';
import bankerRoutes  from './routes/banker';
import transactionRoutes  from './routes/transaction';
import bankerToClientRoutes from './routes/bankerToClient';
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";

dotenv.config();
const app = express();

const port = process.env.PORT || 8080;
const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: process.env.Host,
      port: process.env.PORT as unknown as number,
      username: process.env.Username,
      password: process.env.Password,
      database: process.env.Database,
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    console.log("Connected to postgres");
    app.use(express.json());
    app.use('/client',clientRoutes)
    app.use('/banker',bankerRoutes)
    app.use('/api',transactionRoutes)
    app.use('/api',bankerToClientRoutes)
    app.listen(port,()=>{
        console.log(`Now runing on port ${port}`)
    })
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to postgres");
  }
};

main();
