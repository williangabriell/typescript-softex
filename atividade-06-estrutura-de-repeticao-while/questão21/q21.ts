let numerosQ21 = 1
let contadorMaisTresDigitos = 0

while (numerosQ21 !== 0) {
    numerosQ21 = Number(prompt('NÚMEROS'))
    if(numerosQ21 > 999){
        contadorMaisTresDigitos++
    }
}

console.log(`Números com mais de três digitos = ${contadorMaisTresDigitos}`)