let caractere = (prompt('Digite apenas uma letra'))

switch (caractere.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`A letra ${caractere} é uma vogal`)
        break;
    default:
        console.log(`${caractere} is a consonant`);
        break;
}