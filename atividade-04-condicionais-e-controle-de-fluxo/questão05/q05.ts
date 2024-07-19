let nota01Q05 = Number(prompt('Digite a 1ª Nota'))
let nota02Q05 = Number(prompt('Digite a 2ª Nota'))
let nota03Q05 = Number(prompt('Digite a 3ª Nota'))

let mediaq05 = (nota01Q05 + nota02Q05 + nota03Q05) / 3

if(mediaq05 >= 7){
    console.log(`O aluno foi aprovado com média ${mediaq05}`)
} else console.log(`O aluno foi reprovado com média ${mediaq05}`)