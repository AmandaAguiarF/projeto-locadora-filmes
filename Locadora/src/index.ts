import { AppDataSource } from "./db/data-source";
import { Genero } from "./models/genero";
import generoRepository from "./repositories/genero.repository";


AppDataSource.initialize()
    .then(() => {
        console.log(`Database is running!`);
    })
    .catch((error) => console.log(error))


