var notas = [];
for (var c = 0; c < 5; c++) {
    var nota = Number(prompt("Digite a ".concat(c + 1, "\u00AA nota do aluno")));
    notas.push(nota);
}
var soma = 0;
for (var _i = 0, notas_1 = notas; _i < notas_1.length; _i++) {
    var nota = notas_1[_i];
    soma += nota;
}
var mediaNotas = soma / notas.length;
console.log("A m\u00E9dia das notas \u00E9: ".concat(mediaNotas));
