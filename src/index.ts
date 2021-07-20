import { createConnection } from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";



const main = async() =>{
    try {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5431,
            username: "macuser",
            password: "1234",
            database: "typeorm",
            entities: [Client,Banker],
            synchronize: true
        })
        console.log('Connected to postgres');
    } catch (error) {
        console.error(error)
        throw new Error('Unable to connect to postgres')
    }
}

main();