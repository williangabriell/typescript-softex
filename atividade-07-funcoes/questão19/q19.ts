function encontrarPalavraMaisLonga(frase: string): string {
    const palavras = frase.split(' ');
    let palavraMaisLonga = '';

    for (const palavra of palavras) {
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    }

    return palavraMaisLonga;
}

// Exemplo de uso
const frase = 'Tutorial de desenvolvimento da web';
const palavraMaisLonga = encontrarPalavraMaisLonga(frase);

console.log(`A palavra mais longa é: ${palavraMaisLonga}`); // A palavra mais longa é: desenvolvimento
