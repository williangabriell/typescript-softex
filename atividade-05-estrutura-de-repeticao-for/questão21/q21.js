var numerosInteiros = prompt('Digite um número inteiro');
var arrayNumerosInteiros = numerosInteiros.split('');
var soma = 0;
for (var _i = 0, arrayNumerosInteiros_1 = arrayNumerosInteiros; _i < arrayNumerosInteiros_1.length; _i++) {
    var value = arrayNumerosInteiros_1[_i];
    soma += Number(value);
}
console.log("Soma = ".concat(soma));
