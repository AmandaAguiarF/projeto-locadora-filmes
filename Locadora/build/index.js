"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./db/data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log(`Database is running!`);
})
    .catch((error) => console.log(error));
// // Teste dos Respositórios
// let acao: Genero = new Genero(1, "Ação");
// let terror: Genero = new Genero(2, "Terror");
// let drama: Genero = new Genero(3, "Drama");
// let comedia: Genero = new Genero(4, "Comedia");
// // Inserindo os Generos
// generoRepository.create(acao);
// generoRepository.create(terror);
// generoRepository.create(drama);
// generoRepository.create(comedia);
