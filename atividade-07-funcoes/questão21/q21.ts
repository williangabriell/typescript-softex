function filtrarStringsLongas(array: string[]): string[] {
    return array.filter(str => str.length > 5);
}

// Exemplo de uso
const lista = ["apple", "banana", "kiwi", "watermelon", "grape"];
const resultado = filtrarStringsLongas(lista);

console.log(resultado); // ["banana", "watermelon"]
