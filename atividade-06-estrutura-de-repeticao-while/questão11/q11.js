"use strict";
let numerosInteiros = 1;
let numeros = [];
let maiorNumero = 0;
let menorNumero = 0;
while (numerosInteiros !== 0) {
    numeros.push(numerosInteiros);
    numerosInteiros = Number(prompt("Digite os números: "));
}
maiorNumero = Math.max(...numeros);
console.log(`O maior número é ${maiorNumero}`);
menorNumero = Math.min(...numeros);
console.log(`O menor número é ${menorNumero}`);
