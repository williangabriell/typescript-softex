const idadeQuestão39 = Number(prompt('Digite sua idade'))

const diasPorAno = 365
const mesesPorAno = 12

// Calcula o tempo de vida em meses e dias
const diasVividos= idadeQuestão39 * diasPorAno
const mesesVividos= idadeQuestão39 * mesesPorAno

console.log(`Você já viveu aproximadamente ${mesesVividos} meses e ${diasVividos} dias.`)