let input = prompt('Digite um número inteiro:');

    let num: number = parseInt(input);

    let numStr: string = num.toString();

    let reversedStr: string = numStr.split('').reverse().join('');

    let reversedNum: number = parseInt(reversedStr);

    alert(`O número invertido é: ${reversedNum}`);
