let numeroInteiro = 20

console.log(`Os divisores de ${numeroInteiro} são:`);
for (let i = 1; i <= numeroInteiro; i++) {
    if (numeroInteiro % i === 0) {
        console.log(i);
    }
}