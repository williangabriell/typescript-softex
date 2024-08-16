function imprimirEmQuadro(lista: string[]): void {
    // Encontrar o comprimento da string mais longa na lista
    const comprimentoMaximo = Math.max(...lista.map(str => str.length));

    // Construir a linha superior e inferior do quadro
    const borda = '*'.repeat(comprimentoMaximo + 4);

    console.log(borda);

    // Imprimir cada string com bordas laterais
    for (const str of lista) {
        const espacosRestantes = comprimentoMaximo - str.length;
        console.log(`* ${str}${' '.repeat(espacosRestantes)} *`);
    }

    console.log(borda);
}

// Exemplo de uso
const lista = ["Hello", "World", "in", "a", "frame"];
imprimirEmQuadro(lista);
