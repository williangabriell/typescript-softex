const nomeUsuario = (prompt("Digite seu nome: "))

if(nomeUsuario.length > 5){
    console.log(`seu nome tem mais de 5 caracteres, que são: ${nomeUsuario.length} caracteres`)
}