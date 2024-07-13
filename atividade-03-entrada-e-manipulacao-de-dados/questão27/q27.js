var data = prompt("Digite uma data no formato dd/mm/aaaa:");
if (data) {
    // Divide a data em dia, mês e ano
    var partes = data.split("/");
    // Converte as partes em números inteiros
    var dia = parseInt(partes[0], 10);
    var mes = parseInt(partes[1], 10);
    var ano = parseInt(partes[2], 10);
    // Exibe os valores extraídos no console
    console.log("Dia: ".concat(dia, ", M\u00EAs: ").concat(mes, ", Ano: ").concat(ano));
}
else {
    console.log("Nenhuma data foi inserida.");
}
