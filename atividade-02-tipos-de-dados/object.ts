// Questão 1

type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
}

const pessoa1: Pessoa = {
    nome:"Willian",
    idade: 29,
    endereco: "Rua Havai",
}

// Questão 2

console.log(pessoa1.nome); 

// Questão 3

type PessoaQuestao3 = {
    nome: string;
    idade: number;
    endereco: string;
    profissao: string;
}

const pessoa2: PessoaQuestao3 = {
    nome:"Willian",
    idade: 29,
    endereco: "Rua Havai",
    profissao: "Atendente",
}

// Questão 4

pessoa2.idade = 30; 
console.log(pessoa2.idade)


// Questão 5

type Animal = {
    nome: string;
    especie: string;
    cor: string;
}

const cachorro: Animal = {
    nome: "Tobi",
    especie: "vira-lata",
    cor:"caramelo",
}

// Questão 6

type Livro = {
    titulo: string;
    autor: string;
    ano: number;
}

const livro1: Livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K Rowling",
    ano: 1997
}

// Questão 7

console.log(livro1.autor)

// Questão 8

livro1.ano = 2001
console.log(livro1.ano)

// Questão 9

// delete livro1.titulo;

// Questão 10

type Carro = {
    marca: string;
    modelo: string;
    ano: number;
}

let carro1:Carro = {
    marca:"FIAT",
    modelo: "Cronos",
    ano: 2024,
}

console.log(carro1)

// Questão 11

type CarroQuestao11 = {
    marca: string;
    modelo?: "", // ou modelo?: string(faz a mesma função) 
    ano: number;
}

let carro2:CarroQuestao11 = {
    marca:"FIAT",
    modelo: "",
    ano: 2024,
}

carro2.modelo = undefined;
console.log(carro2)




