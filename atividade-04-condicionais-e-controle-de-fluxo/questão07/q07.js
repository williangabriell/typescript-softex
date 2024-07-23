var caractere = (prompt('Digite apenas uma letra'));
switch (caractere.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("A letra ".concat(caractere, " \u00E9 uma vogal"));
        break;
    default:
        console.log("".concat(caractere, " is a consonant"));
        break;
}
