const lista: string[] = ["banana", "Café", "Uva"]

lista.push("Melão")  // add itens na lista
lista.unshift("Água") // add item como primeiro da lista

console.log(lista)

// Questão 1

let numeros: number[] = [];

// Questão 2

let numerosQuestao2: number[] = [1, 2, 3, 4];

// Questão 3

console.log("Esse é o segundo elemento " + numerosQuestao2[1]); 

// Questão 4

let numerosQuestao4: number[] = [1, 2, 3, 4];
numerosQuestao4[2] = 10;
console.log("3ª elemento atualizado " + numerosQuestao4); 

// Questão 5

let numerosQuestao5: number[] = [1, 2, 3, 4];

numerosQuestao5.pop() // remove último elemento de um array
console.log("Último elemento deletado " + numerosQuestao5)

// Questão 6

console.log("Tamanho do array numeros da questão 2 - " + numerosQuestao2.length)

// Questão 7

const frutas: string[] = ["maçã", "banana", "laranja"]

// Questão 8

console.log("valor do primeiro elemento do array frutas é - " + frutas[0])

// Questão 9 

frutas.push("uva")
console.log("Adicionado item uva a lista - " + frutas)

// Questão 10

type Aluno = {
    nome: string
    idade: number
}

const aluno1: Aluno = {
    nome: "Willian",
    idade: 29
}

const aluno2: Aluno = {
    nome: "Carolina",
    idade: 28
}

const alunos = [aluno1];

console.log(alunos);

// Questão 11

console.log(aluno1.nome)

// Questão 12

const aluno3: Aluno = {
    nome: "Turin",
    idade: 70
}

const aluno4: Aluno = {
    nome: "Figorfin",
    idade: 460
}

const alunosQuestão12 = [aluno1, aluno2, aluno3, aluno4]

// Questão 14

const produtos: string[] = ["macarrão", "arroz", "feijão", "carne", "verduras", "frutas", "café", "limpeza", "higiene", "superfluos" ]

console.log(produtos[0], produtos[2], produtos[4], produtos[6], produtos[8]);



