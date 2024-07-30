let notas: number[] = []

for (let c = 0; c < 5; c++) {
    const nota = Number(prompt(`Digite a ${c + 1}ª nota do aluno`))
    notas.push(nota)
}

let soma: number = 0;
for (let nota of notas) {
    soma += nota;
}

const mediaNotas: number = soma / notas.length;

console.log(`A média das notas é: ${mediaNotas}`);