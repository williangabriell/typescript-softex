interface Pessoa {
    nome: string;
    idade: number;
    [key: string]: any; // Permite propriedades adicionais
}

function encontrarPessoaMaisVelha(pessoas: Pessoa[]): string {
    // Verifica se o array está vazio
    if (pessoas.length === 0) {
        throw new Error("O array de pessoas está vazio.");
    }

    // Usa o método reduce para encontrar a pessoa com a maior idade
    const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoaAtual) => {
        return (pessoaAtual.idade > maisVelha.idade) ? pessoaAtual : maisVelha;
    });

    return pessoaMaisVelha.nome;
}

// Exemplo de uso
const pessoas: Pessoa[] = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Carlos", idade: 40 },
    { nome: "Diana", idade: 35 }
];

const nomeMaisVelha = encontrarPessoaMaisVelha(pessoas);

console.log(`A pessoa mais velha é: ${nomeMaisVelha}`); // A pessoa mais velha é: Carlos
