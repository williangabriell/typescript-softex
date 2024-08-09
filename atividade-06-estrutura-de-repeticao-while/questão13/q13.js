"use strict";
let num = 123;
let somaQ13 = 0;
let n = Math.abs(num); // Trabalhando com o valor absoluto do número
while (n > 0) {
    let digito = n % 10; // Extrai o último dígito
    soma += Math.pow(digito, 3); // Eleva o dígito ao cubo e adiciona à soma
    n = Math.floor(n / 10); // Remove o último dígito
}
console.log(`A soma dos dígitos de ${num} elevados ao cubo é: ${soma}`);
