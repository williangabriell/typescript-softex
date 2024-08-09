let numerosDigitadosQ20 = 1
let divPorTresQ20 = 0
let contadordivPorTresQ20 = 0



while (numerosDigitadosQ20 !== 0) {
    numerosDigitadosQ20 = Number(prompt('NÚMEROS'))

    if(numerosDigitadosQ20 % 3 == 0){
        divPorTresQ20 += numerosDigitadosQ20
        contadordivPorTresQ20++
    }
}

let mediaDivPorTresQ20 = divPorTresQ20 / contadordivPorTresQ20
console.log(`Média dos números divisíveis por 3 = ${mediaDivPorTresQ20}`)