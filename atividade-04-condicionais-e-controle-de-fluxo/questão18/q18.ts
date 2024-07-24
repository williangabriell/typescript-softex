let estadoCivil = (prompt('Qual o seu estado civil'))

switch (estadoCivil.toLowerCase()) {
    case 'solteiro':
    case 'solteira':
        console.log("Você é solteiro(a).");
        break;
    case 'casado':
    case 'casada':
        console.log("Você é casado(a).");
        break;
    case 'divorciado':
    case 'divorciada':
        console.log("Você é divorciado(a).");
        break;
    case 'viúvo':
    case 'viúva':
        console.log("Você é viúvo(a).");
        break;
    default:
        console.log("Estado civil não reconhecido.");
}
