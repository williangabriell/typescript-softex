var notasQ20 = []; // declarando array de notas (o number indica que se trata de um array de conterá elementos number)
for (var c = 0; c < 5; c++) { // loop for que irá solicitar 5 notas
    var notasAlunos = Number(prompt("Digite a ".concat(c + 1, "\u00AA nota"))); // solicita as notas do aluno convertendo em número o resultado recebido
    notasQ20.push(notasAlunos); // armazena os números recebidos no array notasQ20
}
var somaNotas = 0; //essa variável será usada para acumular a soma das notas armazenadas no array notasQ20.
for (var _i = 0, notasQ20_1 = notasQ20; _i < notasQ20_1.length; _i++) { // loop for of que irá iterar sobre o array notasQ20 atualizando o valor atual do array a cada loop
    var notasAlunos = notasQ20_1[_i];
    somaNotas += notasAlunos; // atalho para "somaNotas = somaNotas + notasAlunos" que vai armazenando o valor atual e adicionando os novo valores
}
var mediaNotasQ20 = somaNotas / notasQ20.length; // calcula a média dos alunos de acordo com a quantidade de notas que foi digitada dentro do array
console.log("Sua m\u00E9dia \u00E9 de ".concat(mediaNotasQ20.toFixed(2))); // informa a média do aluno
if (mediaNotasQ20 >= 7) { // condição para ser aprovado
    console.log("Aluno Aprovado!");
}
else
    console.log("Aluno Reprovado!");
