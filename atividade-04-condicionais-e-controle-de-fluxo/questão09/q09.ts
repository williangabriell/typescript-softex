let peso = Number(prompt('Digite o seu peso'))
let altura = Number(prompt('Digite sua altura'))

let imc = peso / altura **2

if (imc >= 18.50 && imc <= 24.99) {
    console.log(`O seu IMC é de ${imc.toFixed()} e você está com peso normal`)
} else if (imc >= 25 && imc <= 29.99) {
    console.log(`O seu IMC é de ${imc.toFixed()} e você está com pre-obesidade`)
} else if (imc >= 30.00 && imc <= 34.99) {
    console.log(`O seu IMC é de ${imc.toFixed()} e você está com Obesidade grau I`)
} else if (imc >= 35.00 && imc <=39.99) {
    console.log(`O seu IMC é de ${imc.toFixed()} e você está com Obesidade grau II`)
} else 
    console.log(`O seu IMC é de ${imc.toFixed()} e você está com Obesidade grau III`)