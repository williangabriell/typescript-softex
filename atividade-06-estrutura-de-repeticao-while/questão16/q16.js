"use strict";
let contadorQ16 = 1;
let notasAlunos = [];
let notaMinima = 7;
while (contadorQ16 <= 5) {
    let notas = Number(prompt(`Digite a nota do aluno ${contadorQ16}`));
    notasAlunos.push(notas);
    contadorQ16++;
}
for (let i = 0; i < notasAlunos.length; i++) {
    let nota = notasAlunos[i];
    if (nota >= notaMinima) {
        console.log(`Aluno ${i + 1} aprovado com nota ${nota}`);
    }
    else {
        console.log(`Aluno ${i + 1} reprovado com nota ${nota}`);
    }
}
