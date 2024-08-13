function calcularImpostoRenda(salarioBruto: number): number {
    let imposto = 0;

    if (salarioBruto <= 1903.98) {
        imposto = 0;
    } else if (salarioBruto <= 2826.65) {
        imposto = (salarioBruto - 1903.98) * 0.075;
    } else if (salarioBruto <= 3751.05) {
        imposto = (2826.65 - 1903.98) * 0.075 + (salarioBruto - 2826.65) * 0.15;
    } else if (salarioBruto <= 4664.68) {
        imposto = (2826.65 - 1903.98) * 0.075 + (3751.05 - 2826.65) * 0.15 + (salarioBruto - 3751.05) * 0.225;
    } else {
        imposto = (2826.65 - 1903.98) * 0.075 + (3751.05 - 2826.65) * 0.15 + (4664.68 - 3751.05) * 0.225 + (salarioBruto - 4664.68) * 0.275;
    }

    return imposto;
}

// Exemplo de uso:
const salarioBruto = 5000;
const imposto = calcularImpostoRenda(salarioBruto);
console.log(`O imposto de renda a ser pago é: R$${imposto.toFixed(2)}`);
