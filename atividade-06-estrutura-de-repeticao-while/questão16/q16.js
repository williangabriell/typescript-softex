var contadorQ16 = 1;
var notasAlunos = [];
var notaMinima = 7;
while (contadorQ16 <= 5) {
    var notas = Number(prompt("Digite a nota do aluno ".concat(contadorQ16)));
    notasAlunos.push(notas);
    contadorQ16++;
}
for (var i = 0; i < notasAlunos.length; i++) {
    var nota = notasAlunos[i];
    if (nota >= notaMinima) {
        console.log("Aluno ".concat(i + 1, " aprovado com nota ").concat(nota));
    }
    else {
        console.log("Aluno ".concat(i + 1, " reprovado com nota ").concat(nota));
    }
}
