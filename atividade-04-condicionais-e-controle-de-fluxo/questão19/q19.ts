let numeroInteiro1 = Number(prompt('Digite um número inteiro'))
let numeroInteiro2 = Number(prompt('Digite outro número inteiro'))
let opção = Number(prompt('Digite a opção que deseja 1 - SOMA || 2 - SUBTRAÇÃO || 3 - MULTIPLICAÇÃO || 4 - DIVISÃO'))


switch (opção) {
    case 1:
        console.log(`O resultado da soma ${numeroInteiro1 + numeroInteiro2}`)
        break;
    case 2:
        console.log(`O resultado da subtração ${numeroInteiro1 - numeroInteiro2}`)
        break;
    case 3:
        console.log(`O resultado da multiplicação ${numeroInteiro1 * numeroInteiro2}`)
        break;
    case 4:
        console.log(`O resultado da divisão ${numeroInteiro1 / numeroInteiro2}`)
        break;
}
