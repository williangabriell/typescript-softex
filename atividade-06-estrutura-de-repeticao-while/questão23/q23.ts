let numerosDigitadosQ23 = 1
let numeroEscolhido = 0

while (numerosDigitadosQ23 !== 0) {
    numerosDigitadosQ23 = Number(prompt('NÚMEROS'))

    if(numerosDigitadosQ23 <= 1 && numerosDigitadosQ23 % 2 !== 0){
        numeroEscolhido = numerosDigitadosQ23
    }
}

console.log(`O menor número positivo e ímpar é = ${numeroEscolhido}`)