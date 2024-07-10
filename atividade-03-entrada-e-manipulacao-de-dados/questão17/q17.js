var numeroPositNegat = Number(prompt("Digite um número inteiro: "));
if (numeroPositNegat > 0) {
    console.log("O n\u00FAmero ".concat(numeroPositNegat, " \u00E9 positivo"));
}
else if (numeroPositNegat === 0) {
    console.log("O n\u00FAmero ".concat(numeroPositNegat, " neutro"));
}
else {
    console.log("O n\u00FAmero ".concat(numeroPositNegat, " negativo"));
}
