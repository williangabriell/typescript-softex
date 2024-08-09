"use strict";
let numerosRecebidosQ18 = 1;
let numerosPares = 0;
let numerosImpares = 0;
while (true) {
    numerosRecebidosQ18 = Number(prompt('NÚMEROS'));
    if (numerosRecebidosQ18 !== 0) {
        break;
    }
    if (numerosRecebidosQ18 % 2 == 0) {
        numerosPares++;
    }
    else {
        numerosImpares++;
    }
}
console.log(`Números Pares = ${numerosPares}`);
console.log(`Números Ímpares = ${numerosImpares}`);
