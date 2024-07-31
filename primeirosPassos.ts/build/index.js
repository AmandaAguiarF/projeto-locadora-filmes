"use strict";
// console.log("Ola Mundo! Curso de NodeJS com TypeScript.");
let nome = "Danilo Farias";
let idade = 37;
// var está descontinuado
var naturalidade = "Gravatá-PE";
const dataNasc = "07/09/1986";
// nome = 56; (ERRO)
// idade = "Danilo"; (ERRO)
let cursos = [];
cursos.push("ADS");
cursos.push("Redes");
cursos.push("Mestrado em CC");
console.log(cursos.push("Especialização em Informática em Saúde"));
cursos.pop();
cursos.shift();
console.log(cursos);
// define our tuple
let ourTuple;
// initialize incorrectly throws an error
//ourTuple = [false, 'Coding God was mistaken', 5];
ourTuple = [5, false, 'Coding God was mistaken'];
console.log(ourTuple);
console.log(ourTuple[2]);
// Objeto JS
const carro = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// Objeto TS
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// console.log(car);
console.table(car);
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["Domingo"] = 1] = "Domingo";
    diasDaSemana[diasDaSemana["Segunda"] = 2] = "Segunda";
    diasDaSemana["terca"] = "Ter\u00E7a-feira";
})(diasDaSemana || (diasDaSemana = {}));
console.log(diasDaSemana.terca);
const coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
class Genero {
    constructor(nome) {
        this.nome = nome;
    }
}
let genero1 = new Genero("Drama");
console.table(genero1);
class Filme {
    constructor(titulo, duracao, preco, geneco) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.preco = preco;
        this.genero = geneco;
    }
}
let primeiroFilme = new Filme("300", 182, 3.5, genero1);
console.table(primeiroFilme);
