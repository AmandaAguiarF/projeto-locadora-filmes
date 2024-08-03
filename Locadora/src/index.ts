import express, { Application } from "express";
import { AppDataSource } from "./db/data-source";
import Routes from "./routes/routes";
import cors, { CorsOptions } from "cors";


export default class Server {
    constructor(app: Application) {
        this.config(app);
        new Routes(app);
    }

    private config(app: Application): void {
        const corsOptions: CorsOptions = {
            origin: "http://localhost:8081"
        };

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
    }
}

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log(`Database is running.`);
    })
    .catch((error) => console.log(error))