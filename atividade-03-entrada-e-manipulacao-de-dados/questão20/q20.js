var nomeUsuario = (prompt("Digite seu nome: "));
if (nomeUsuario.length > 5) {
    console.log("seu nome tem mais de 5 caracteres, que s\u00E3o: ".concat(nomeUsuario.length, " caracteres"));
}
