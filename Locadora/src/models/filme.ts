import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Genero } from "./genero";

@Entity()
export class Filme {
    @PrimaryGeneratedColumn({ type: "int" })
    idFilme?: number;

    @Column({ length: 80 })
    tituloOriginal?: string;

    @Column({ length: 80, nullable: true })
    tituloPT?: string;

    @Column({ type: "decimal", precision: 3, scale: 2 })
    preco: number;

    @Column({ type: "time" })
    duracao: string;

    @Column({ type: "year" })
    ano: number;

    @Column({ length: 5 })
    faixaEtaria: string;

    //@OneToMany(() => Midia, midia => midia.filme)
    // midias: Midia[];

    @ManyToMany(() => Genero)
    @JoinTable()
    generos?: Genero[];

    constructor(tituloOriginal: string, tituloPT: string, preco: number, duracao: string, ano: number, faixaEtaria: string) {
        this.tituloOriginal = tituloOriginal;
        this.tituloPT = tituloPT;
        this.preco = preco;
        this.duracao = duracao;
        this.ano = ano;
        this.faixaEtaria = faixaEtaria;

    }
}