// Solicitar ao usuário que insira um número inteiro
var input = prompt('Digite um número inteiro:');
// Convertendo a entrada para número inteiro
var num = parseInt(input);
// Convertendo o número para uma string para facilitar a iteração sobre os dígitos
var numStr = num.toString();
var sum = 0;
// Iterando sobre cada caractere da string
for (var _i = 0, numStr_1 = numStr; _i < numStr_1.length; _i++) {
    var char = numStr_1[_i];
    // Convertendo o caractere de volta para número
    var digit = parseInt(char);
    // Verificando se o dígito é par
    if (digit % 2 === 0) {
        sum += digit;
    }
}
// Exibindo o resultado
alert("A soma dos d\u00EDgitos pares de ".concat(num, " \u00E9: ").concat(sum));
