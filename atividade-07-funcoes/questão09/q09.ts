function calcularDesconto(valorProduto: number, percentualDesconto: number): number {
    const desconto = (valorProduto * percentualDesconto) / 100;
    const valorFinal = valorProduto - desconto;
    return valorFinal;
}

// Exemplo de uso:
const valorProduto = 100; // em reais
const percentualDesconto = 20; // 20% de desconto
const valorComDesconto = calcularDesconto(valorProduto, percentualDesconto);
console.log(`O valor com desconto é: R$${valorComDesconto.toFixed(2)}`);
