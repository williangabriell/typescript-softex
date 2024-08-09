var numero;
var contagemPares = 0;
var encontrouImpar = false;
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
console.log("Voc\u00EA digitou ".concat(contagemPares, " n\u00FAmeros pares antes do primeiro n\u00FAmero \u00EDmpar."));
