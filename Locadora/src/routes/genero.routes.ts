import { Router } from "express";
import generoController from "../controllers/genero.controller";


class GeneroRoutes {
    router = Router();
    controller = new generoController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {

        // Criar um novo genero.
        this.router.post("/genero", this.controller.create);

        // Retornar os generos já cadastrados.
        this.router.get("/generos", this.controller.findAll);

        // Retorna um genero específico pelo seu id
        this.router.get("/genero/:id", this.controller.findOne);


        //Retornar um genero específico pelo seu nome
        this.router.get("/genero/:nome", this.controller.findName);

        // Atualizar um genero pelo seu id
        this.router.put("/genero/:id", this.controller.update);

        // Deleta um genero pelo seu id
        this.router.delete("/genero/:id", this.controller.delete);

        // Deleta todos os generos
        this.router.delete("/generos/", this.controller.deleteAll);
    }
}

export default new GeneroRoutes().router;
