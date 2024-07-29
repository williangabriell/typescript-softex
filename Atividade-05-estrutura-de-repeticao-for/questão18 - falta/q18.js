for (var c = 0; c <= 2; c++) {
    var numero1 = Number(prompt('Digite um número'));
    var numero2 = Number(prompt('Digite um número'));
    var nMaior = (numero1 > numero2) || (numero2 > numero1);
    console.log("Esse foi o maior n\u00FAmero digitado - ".concat(nMaior));
}
