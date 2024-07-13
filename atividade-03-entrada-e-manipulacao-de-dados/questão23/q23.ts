const cidade = (prompt("Digite o nome da sua cidade: "))

if (cidade.charAt(0).toUpperCase() === 'R'){
    console.log(`A cidade ${cidade} começa com R`)
} else {
    console.log(`A cidade ${cidade} não começa com R`)
}