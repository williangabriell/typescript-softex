function contarDigitosParesImpares(numero: number): { pares: number, impares: number } {
    let pares = 0;
    let impares = 0;

    const numeroString = (numero).toString(); // Convertendo o número para string para iterar pelos dígitos

    for (let i = 0; i < numeroString.length; i++) {
        const digito = parseInt(numeroString[i], 10);
        
        if (digito % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}

// Exemplo de uso:
const numero = 123456;
const resultadoQ12 = contarDigitosParesImpares(numero);
console.log(`Dígitos pares: ${resultadoQ12.pares}, Dígitos ímpares: ${resultadoQ12.impares}`);
