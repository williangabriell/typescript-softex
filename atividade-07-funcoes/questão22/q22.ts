interface Livro {
    titulo: string;
    autor: string;
    ano: number;
    [key: string]: any; // Permite propriedades adicionais
}

function filtrarLivrosPorAutor(livros: Livro[], autor: string): Livro[] {
    return livros.filter(livro => livro.autor === autor);
}

// Exemplo de uso
const livros: Livro[] = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
    { titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988 },
    { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", ano: 1881 },
    { titulo: "A Hora da Estrela", autor: "Clarice Lispector", ano: 1977 }
];

const livrosDoAutor = filtrarLivrosPorAutor(livros, "Machado de Assis");

console.log(livrosDoAutor);
