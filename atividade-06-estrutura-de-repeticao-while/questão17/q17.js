"use strict";
let numero;
let contagemPares = 0;
let encontrouImpar = false;
while (true) {
    numero = Number(prompt("Digite um número inteiro (ou 0 para parar):"));
    if (numero === 0) {
        break; // Sai do loop se o número for 0
    }
    if (numero % 2 !== 0) {
        encontrouImpar = true; // Marca que encontrou o primeiro ímpar
        break; // Sai do loop ao encontrar o primeiro ímpar
    }
    contagemPares++; // Incrementa o contador de números pares
}
console.log(`Você digitou ${contagemPares} números pares antes do primeiro número ímpar.`);
