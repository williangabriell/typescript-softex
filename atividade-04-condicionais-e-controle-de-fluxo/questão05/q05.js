var nota01Q05 = Number(prompt('Digite a 1ª Nota'));
var nota02Q05 = Number(prompt('Digite a 2ª Nota'));
var nota03Q05 = Number(prompt('Digite a 3ª Nota'));
var mediaq05 = (nota01Q05 + nota02Q05 + nota03Q05) / 3;
if (mediaq05 >= 7) {
    console.log("O aluno foi aprovado com m\u00E9dia ".concat(mediaq05));
}
else
    console.log("O aluno foi reprovado com m\u00E9dia ".concat(mediaq05));
