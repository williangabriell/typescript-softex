function calcularMediaArredondada(numeros: number[]): number {
    if (numeros.length === 0) {
        throw new Error("A lista de números não pode estar vazia.");
    }

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    const media = soma / numeros.length;
    const mediaArredondada = Math.round(media);

    return mediaArredondada;
}

// Exemplo de uso:
const numeros = [7.5, 8.0, 9.0, 6.7];
const mediaArredondada = calcularMediaArredondada(numeros);
console.log(`A média arredondada é: ${mediaArredondada}`);
