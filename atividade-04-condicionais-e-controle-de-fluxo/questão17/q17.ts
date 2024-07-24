let idade = Number(prompt('Digite a sua idade'))

if (idade >= 0 && idade === 1) {
    console.log(`Você é um bebê`)
} else if (idade >= 13 && idade === 18) {
    console.log(`Você é um adolescente`)
} else console.log(`Você é um adulto`)