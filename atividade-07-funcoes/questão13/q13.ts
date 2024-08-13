type Aluno = {
    nome: string;
    nota: number;
};

function calcularMediaAlunos(alunos: Aluno[]): number {

    let somaNotas = 0;
    for (let i = 0; i < alunos.length; i++) {
        somaNotas += alunos[i].nota;
    }

    const media = somaNotas / alunos.length;
    return media;
}

// Exemplo de uso:
const alunos: Aluno[] = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Pedro", nota: 7.5 },
    { nome: "Ana", nota: 8.0 }
];

const mediaQ13 = calcularMediaAlunos(alunos);
console.log(`A média das notas dos alunos é: ${mediaQ13.toFixed(2)}`);
