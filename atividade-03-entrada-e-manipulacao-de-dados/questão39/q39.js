var idadeQuestão39 = Number(prompt('Digite sua idade'));
var diasPorAno = 365;
var mesesPorAno = 12;
// Calcula o tempo de vida em meses e dias
var diasVividos = idadeQuestão39 * diasPorAno;
var mesesVividos = idadeQuestão39 * mesesPorAno;
console.log("Voc\u00EA j\u00E1 viveu aproximadamente ".concat(mesesVividos, " meses e ").concat(diasVividos, " dias."));
