let numerais: number[] = []  // criando array para armazenas os 10 números

for (let i = 0; i < 10; i++) {  // contador para que seja solicitado os 10 números
    const numeros = Number(prompt(`Digite o ${i + 1}º número:`))
    numerais.push(numeros)  // adiciona os números dentro do array
}


const maiorValor = Math.max(...numerais); //Esta linha de código encontra o maior valor em um array de números, Math.max é um método embutido em JavaScript que retorna o maior número entre os argumentos passados para ele
const menorValor = Math.min(...numerais); // Similar à linha anterior, esta linha encontra o menor valor em um array de números chamado numeros, Math.min é um método embutido em JavaScript que retorna o menor número entre os argumentos passados para ele

// Exibe os resultados
console.log(`O maior valor digitado foi: ${maiorValor}`);
console.log(`O menor valor digitado foi: ${menorValor}`);
