var peso = Number(prompt('Digite o seu peso'));
var altura = Number(prompt('Digite sua altura'));
var imc = peso / Math.pow(altura, 2);
if (imc >= 18.50 && imc <= 24.99) {
    console.log("O seu IMC \u00E9 de ".concat(imc.toFixed(), " e voc\u00EA est\u00E1 com peso normal"));
}
else if (imc >= 25 && imc <= 29.99) {
    console.log("O seu IMC \u00E9 de ".concat(imc.toFixed(), " e voc\u00EA est\u00E1 com pre-obesidade"));
}
else if (imc >= 30.00 && imc <= 34.99) {
    console.log("O seu IMC \u00E9 de ".concat(imc.toFixed(), " e voc\u00EA est\u00E1 com Obesidade grau I"));
}
else if (imc >= 35.00 && imc <= 39.99) {
    console.log("O seu IMC \u00E9 de ".concat(imc.toFixed(), " e voc\u00EA est\u00E1 com Obesidade grau II"));
}
else
    console.log("O seu IMC \u00E9 de ".concat(imc.toFixed(), " e voc\u00EA est\u00E1 com Obesidade grau III"));
