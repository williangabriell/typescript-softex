let numerosDigitadosQ19 = 1
let divPorDois = 0
let divPorTres = 0
let divPorCinco = 0

while (numerosDigitadosQ19 !== 0) {
    numerosDigitadosQ19 = Number(prompt('NÚMEROS'))

    if (numerosDigitadosQ19 % 2 == 0) {
        divPorDois++
    } else if (numerosDigitadosQ19 % 3 == 0) {
        divPorTres++
    } else if (numerosDigitadosQ19 % 5 == 0) {
        divPorCinco++
    }
}

console.log(`Números divisíveis por 2 = ${divPorDois}`)
console.log(`Números divisíveis por 3 = ${divPorTres}`)
console.log(`Números divisíveis por 5 = ${divPorCinco}`)