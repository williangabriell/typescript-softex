let numerosInteiros = prompt('Digite um número inteiro')

const arrayNumerosInteiros = numerosInteiros.split('');
let soma = 0

for (const value of arrayNumerosInteiros) {
    soma += Number(value)
}

console.log(`Soma = ${soma}`)