function media(nota1: number, nota2: number, nota3: number): number {
    const soma = nota1 + nota2 + nota3;
    const mediaAritmetica = soma / 3;
    return mediaAritmetica;
}


const resultado = media(7.5, 8.0, 9.0);
console.log(`A média aritmética é: ${resultado}`);
