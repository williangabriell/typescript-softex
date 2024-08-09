"use strict";
let numerosDigitasQ22 = 1;
let somaQ22 = 0;
let contadorNumerosQ22 = 0;
let mediaQ22 = 0;
while (numerosDigitasQ22 !== 0) {
    numerosDigitasQ22 = Number(prompt('NÚMEROS'));
    if (numerosDigitasQ22 >= 50 && numerosDigitasQ22 <= 100) {
        somaQ22 += numerosDigitasQ22;
        contadorNumerosQ22++;
    }
    mediaQ22 = somaQ22 / contadorNumerosQ22;
}
console.log(`A média dos números é de = ${mediaQ22}`);
