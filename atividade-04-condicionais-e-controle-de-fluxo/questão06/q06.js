var nome1 = (prompt('Digite um nome'));
var nome2 = (prompt('Digite outro nome'));
if (nome1.length > nome2.length) {
    console.log("".concat(nome1, " tem mais caracteres que ").concat(nome2));
}
else if (nome2.length < nome1.length) {
    console.log("".concat(nome2, " tem mais caracteres que ").concat(nome1));
}
else {
    console.log("".concat(nome1, " and ").concat(nome2, " tem o mesmo n\u00FAmero de caracteres"));
}
