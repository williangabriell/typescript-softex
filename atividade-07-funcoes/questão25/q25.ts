function inverterString(s: string): string {
    return s.split('').reverse().join('');
}

// Exemplo de uso
const entrada = "hello";
const saida = inverterString(entrada);
console.log(saida);  // Saída: "olleh"
