let peso = Number(prompt("Qual o seu peso? "))
let altura = Number(prompt("Qual a sua altura? "))

let imc = peso / altura ** 2

console.log(`O seu IMC é de: ${imc.toFixed(2)}`)