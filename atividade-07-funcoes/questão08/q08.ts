function imc(peso: number, altura: number): number {
    const formula = peso / (altura * altura);
    return formula;
}

const resultadoQ08 = imc(120, 1.71)
console.log(`O seu IMC é de ${resultadoQ08}`)