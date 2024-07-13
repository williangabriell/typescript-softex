const data = prompt("Digite uma data no formato dd/mm/aaaa:");

if (data) {
    // Divide a data em dia, mês e ano
    const partes = data.split("/");

    // Converte as partes em números inteiros
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const ano = parseInt(partes[2], 10);

    // Exibe os valores extraídos no console
    console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);
} else {
    console.log("Nenhuma data foi inserida.");
}
