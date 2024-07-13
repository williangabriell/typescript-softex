var peso = Number(prompt("Qual o seu peso? "));
var altura = Number(prompt("Qual a sua altura? "));
var imc = peso / Math.pow(altura, 2);
console.log("O seu IMC \u00E9 de: ".concat(imc.toFixed(2)));
