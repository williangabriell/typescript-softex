let nome1 = (prompt('Digite um nome'))
let nome2 = (prompt('Digite outro nome'))

if (nome1.length > nome2.length) {
    console.log(`${nome1} tem mais caracteres que ${nome2}`)
} else if (nome2.length < nome1.length) {
    console.log(`${nome2} tem mais caracteres que ${nome1}`);
} else {
    console.log(`${nome1} and ${nome2} tem o mesmo número de caracteres`);
}