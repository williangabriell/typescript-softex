function verificarPropriedade(obj: Record<string, any>, propriedade: string): boolean {
    return obj.hasOwnProperty(propriedade);
}

// Exemplo de uso
const objeto = { nome: "Willian", idade: 25, cidade: "São Paulo" };

console.log(verificarPropriedade(objeto, "nome")); // true
console.log(verificarPropriedade(objeto, "altura")); // false
