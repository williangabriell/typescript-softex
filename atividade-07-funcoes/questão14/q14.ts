function calcularIdade(anoNasc: number, anoAtual: number = 2024): number {
    const idade = anoAtual - anoNasc
    return idade;
}

const anoNasc = 1995
const idadeAtual = calcularIdade(anoNasc)
console.log(`A sua idade é de ${idadeAtual} anos`)