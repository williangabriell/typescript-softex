function calcularPrecoProduto(valorCusto: number, margemLucro: number, valorFrete: number): number {
    const lucro = valorCusto * (margemLucro / 100);
    const precoVenda = valorCusto + lucro + valorFrete;
    return precoVenda;
}

// Exemplo de uso
const valorCusto = 100; // Valor de custo do produto
const margemLucro = 20; // Margem de lucro desejada em percentual
const valorFrete = 15; // Valor do frete

const precoVenda = calcularPrecoProduto(valorCusto, margemLucro, valorFrete);
console.log(`O preço de venda do produto é: R$ ${precoVenda.toFixed(2)}`); // O preço de venda do produto é: R$ 135.00
