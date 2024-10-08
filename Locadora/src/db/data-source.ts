import "reflect-metadata"
import { DataSource } from "typeorm"
import { config, dialect } from "../config/db.config"
import { Genero } from "../models/genero"
import { Filme } from "../models/filme"

export const AppDataSource = new DataSource({
    type: dialect,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    entities: [Genero, Filme],
    // após usar o npm run dev pela primeira vez, trocar o synchronize para false
    synchronize: false,
    logging: false,
})


