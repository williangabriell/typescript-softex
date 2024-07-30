var numerais = []; // criando array para armazenas os 10 números
for (var i = 0; i < 10; i++) { // contador para que seja solicitado os 10 números
    var numeros = Number(prompt("Digite o ".concat(i + 1, "\u00BA n\u00FAmero:")));
    numerais.push(numeros); // adiciona os números dentro do array
}
var maiorValor = Math.max.apply(Math, numerais); //Esta linha de código encontra o maior valor em um array de números, Math.max é um método embutido em JavaScript que retorna o maior número entre os argumentos passados para ele
var menorValor = Math.min.apply(Math, numerais); // Similar à linha anterior, esta linha encontra o menor valor em um array de números chamado numeros, Math.min é um método embutido em JavaScript que retorna o menor número entre os argumentos passados para ele
// Exibe os resultados
console.log("O maior valor digitado foi: ".concat(maiorValor));
console.log("O menor valor digitado foi: ".concat(menorValor));
