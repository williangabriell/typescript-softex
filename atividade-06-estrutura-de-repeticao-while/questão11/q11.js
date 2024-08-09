var numerosInteiros = 1;
var numeros = [];
var maiorNumero = 0;
var menorNumero = 0;
while (numerosInteiros !== 0) {
    numeros.push(numerosInteiros);
    numerosInteiros = Number(prompt("Digite os números: "));
}
maiorNumero = Math.max.apply(Math, numeros);
console.log("O maior n\u00FAmero \u00E9 ".concat(maiorNumero));
menorNumero = Math.min.apply(Math, numeros);
console.log("O menor n\u00FAmero \u00E9 ".concat(menorNumero));
