var valor = Number(prompt('Digite o valor em Reais'));
var cotaçãoDolar = Number(prompt('Digite a cotação atual do Dolar$'));
var valorEmDolar = valor * cotaçãoDolar;
console.log("O valor de ".concat(valor, "R$ em Dolar \u00E9 de ").concat(valorEmDolar, "$"));
