let notasQ20: number[] = [];  // declarando array de notas (o number indica que se trata de um array de conterá elementos number)

for (let c = 0; c < 5; c++) { // loop for que irá solicitar 5 notas
    const notasAlunos = Number(prompt(`Digite a ${c + 1}ª nota`)) // solicita as notas do aluno convertendo em número o resultado recebido
    notasQ20.push(notasAlunos)  // armazena os números recebidos no array notasQ20
}

let somaNotas = 0 //essa variável será usada para acumular a soma das notas armazenadas no array notasQ20.
for (let notasAlunos of notasQ20) {  // loop for of que irá iterar sobre o array notasQ20 atualizando o valor atual do array a cada loop
    somaNotas += notasAlunos; // atalho para "somaNotas = somaNotas + notasAlunos" que vai armazenando o valor atual e adicionando os novo valores
}

let mediaNotasQ20 = somaNotas / notasQ20.length  // calcula a média dos alunos de acordo com a quantidade de notas que foi digitada dentro do array

console.log(`Sua média é de ${mediaNotasQ20.toFixed(2)}`) // informa a média do aluno
if(mediaNotasQ20 >= 7) {  // condição para ser aprovado
    console.log(`Aluno Aprovado!`)
} else console.log(`Aluno Reprovado!`)