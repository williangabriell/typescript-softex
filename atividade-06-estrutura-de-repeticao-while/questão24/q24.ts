let numeroQ24: number;
let primeiroNumero: number | null = null;
let ultimoNumero: number | null = null;
let contadorPares = 0;
let contadorImpares = 0;

while (true) {
    numeroQ24 = Number(prompt('Digite um número (0 para parar):'));

    if (numeroQ24 === 0) {
        break;
    }

    if (primeiroNumero === null) {
        primeiroNumero = numeroQ24;  // Armazena o primeiro número
    }
    ultimoNumero = numeroQ24;  // Atualiza o último número digitado
}

// Se o usuário digitou números válidos, realiza a contagem
if (primeiroNumero !== null && ultimoNumero !== null) {
    for (let i = primeiroNumero; i <= ultimoNumero; i++) {
        if (i % 2 === 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }
    }

    console.log(`Quantidade de números pares: ${contadorPares}`);
    console.log(`Quantidade de números ímpares: ${contadorImpares}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}
