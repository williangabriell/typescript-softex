let contador = 1
let tabuada = 6

function gerarTabuada() {
    for (let contador = 1; contador <= 10; contador++) {
        let valorTabuada = tabuada * contador
        
        console.log(`${tabuada} X ${contador} = ${valorTabuada}`)
    }
    
}

console.log(`Tabuada de ${tabuada}`)
gerarTabuada()