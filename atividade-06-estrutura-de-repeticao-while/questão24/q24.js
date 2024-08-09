var numeroQ24;
var primeiroNumero = null;
var ultimoNumero = null;
var contadorPares = 0;
var contadorImpares = 0;
while (true) {
    numeroQ24 = Number(prompt('Digite um número (0 para parar):'));
    if (numeroQ24 === 0) {
        break;
    }
    if (primeiroNumero === null) {
        primeiroNumero = numeroQ24; // Armazena o primeiro número
    }
    ultimoNumero = numeroQ24; // Atualiza o último número digitado
}
// Se o usuário digitou números válidos, realiza a contagem
if (primeiroNumero !== null && ultimoNumero !== null) {
    for (var i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 2 === 0) {
            contadorPares++;
        }
        else {
            contadorImpares++;
        }
    }
    console.log("Quantidade de n\u00FAmeros pares: ".concat(contadorPares));
    console.log("Quantidade de n\u00FAmeros \u00EDmpares: ".concat(contadorImpares));
}
else {
    console.log("Nenhum número válido foi digitado.");
}
