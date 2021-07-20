import { createConnection } from "typeorm";



const main = async() =>{
    const connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5431,
        username: "macuser",
        password: "1234",
        database: "typeorm"
    })
}

main();