interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    [key: string]: any; // Permite propriedades adicionais
}

function filtrarCarrosPorAno(carros: Carro[], anoEspecifico: number): Carro[] {
    return carros.filter(carro => carro.ano > anoEspecifico);
}

// Exemplo de uso
const carros: Carro[] = [
    { marca: "Toyota", modelo: "Corolla", ano: 2015 },
    { marca: "Honda", modelo: "Civic", ano: 2018 },
    { marca: "Ford", modelo: "Focus", ano: 2012 },
    { marca: "Chevrolet", modelo: "Cruze", ano: 2019 }
];

const carrosRecentes = filtrarCarrosPorAno(carros, 2015);

console.log(carrosRecentes);
