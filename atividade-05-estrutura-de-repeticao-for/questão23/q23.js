var alturas = [];
for (var i = 0; i < 5; i++) {
    var userInput = prompt("Digite a altura da pessoa ".concat(i + 1, " em metros (ex: 1.75):"));
}
var soma = 0;
for (var _i = 0, alturas_1 = alturas; _i < alturas_1.length; _i++) {
    var altura = alturas_1[_i];
    soma += altura;
}
var media = soma / alturas.length;
console.log("A m\u00E9dia de altura das 5 pessoas \u00E9: ".concat(media.toFixed(2), " metros."));
