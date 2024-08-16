function advinheNumero(): void {
    // Gerar um número inteiro aleatório entre 1 e 100
    const numeroCorreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let palpite: number | null = null;

    while (palpite !== numeroCorreto) {
        palpite = parseInt(prompt("Adivinhe um número entre 1 e 100: ") || "0");
        tentativas++;

        if (palpite < numeroCorreto) {
            console.log("O número correto é maior!");
        } else if (palpite > numeroCorreto) {
            console.log("O número correto é menor!");
        } else {
            console.log(`Parabéns! Você acertou o número ${numeroCorreto} em ${tentativas} tentativas.`);
        }
    }
}

// Executa a função
advinheNumero();
