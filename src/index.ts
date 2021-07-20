import express from 'express';
import { createConnection } from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";

const app = express();

const port = process.env.PORT || 8080;
const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5431,
      username: "macuser",
      password: "1234",
      database: "typeorm",
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    console.log("Connected to postgres");
    app.use(express.json());
    app.listen(8080,()=>{
        console.log(`Now runing on port ${port}`)
    })
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to postgres");
  }
};

main();
