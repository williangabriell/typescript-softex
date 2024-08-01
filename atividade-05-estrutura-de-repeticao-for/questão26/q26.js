var input = prompt('Digite um número inteiro:');
var num = parseInt(input);
var numStr = num.toString();
var reversedStr = numStr.split('').reverse().join('');
var reversedNum = parseInt(reversedStr);
alert("O n\u00FAmero invertido \u00E9: ".concat(reversedNum));
