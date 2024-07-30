let alturas: number[] = [];
for (let i = 0; i < 5; i++) {
    const userInput: string | null = prompt(`Digite a altura da pessoa ${i + 1} em metros (ex: 1.75):`)
}

let soma: number = 0;
for (let altura of alturas) {
    soma += altura;
}


const media: number = soma / alturas.length;

console.log(`A média de altura das 5 pessoas é: ${media.toFixed(2)} metros.`);