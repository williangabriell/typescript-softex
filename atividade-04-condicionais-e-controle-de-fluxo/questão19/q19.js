var numeroInteiro1 = Number(prompt('Digite um número inteiro'));
var numeroInteiro2 = Number(prompt('Digite outro número inteiro'));
var opção = Number(prompt('Digite a opção que deseja 1 - SOMA || 2 - SUBTRAÇÃO || 3 - MULTIPLICAÇÃO || 4 - DIVISÃO'));
switch (opção) {
    case 1:
        console.log("O resultado da soma ".concat(numeroInteiro1 + numeroInteiro2));
        break;
    case 2:
        console.log("O resultado da subtra\u00E7\u00E3o ".concat(numeroInteiro1 - numeroInteiro2));
        break;
    case 3:
        console.log("O resultado da multiplica\u00E7\u00E3o ".concat(numeroInteiro1 * numeroInteiro2));
        break;
    case 4:
        console.log("O resultado da divis\u00E3o ".concat(numeroInteiro1 / numeroInteiro2));
        break;
}
