var cidade = (prompt("Digite o nome da sua cidade: "));
if (cidade.charAt(0).toUpperCase() === 'R') {
    console.log("A cidade ".concat(cidade, " come\u00E7a com R"));
}
else {
    console.log("A cidade ".concat(cidade, " n\u00E3o come\u00E7a com R"));
}
