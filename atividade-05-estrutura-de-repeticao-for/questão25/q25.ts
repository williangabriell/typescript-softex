// Solicitar ao usuário que insira um número inteiro
let input = prompt('Digite um número inteiro:');

// Convertendo a entrada para número inteiro
let num = parseInt(input);

// Convertendo o número para uma string para facilitar a iteração sobre os dígitos
let numStr = num.toString();
let sum = 0;

// Iterando sobre cada caractere da string
for (let char of numStr) {
    // Convertendo o caractere de volta para número
    let digit = parseInt(char);

    // Verificando se o dígito é par
    if (digit % 2 === 0) {
        sum += digit;
    }
}

// Exibindo o resultado
alert(`A soma dos dígitos pares de ${num} é: ${sum}`);
