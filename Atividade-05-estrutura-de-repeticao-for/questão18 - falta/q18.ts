for (let c = 0; c <= 2; c++) {
    let numero1 = Number(prompt('Digite um número'))
    let numero2 = Number(prompt('Digite um número'))

    let nMaior = (numero1 > numero2) || (numero2 > numero1)

    console.log(`Esse foi o maior número digitado - ${nMaior}`)

}