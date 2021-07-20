import { createConnection } from "typeorm";



const main = async() =>{
    try {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5431,
            username: "macuser",
            password: "1234",
            database: "typeorm"
        })
        console.log('Connected to postgres');
    } catch (error) {
        console.error('Unable to connect to postgres')
    }
}

main();