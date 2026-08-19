/*
  EXERCÍCIO 06 — ARROW FUNCTIONS
*/

// TODO:
// Reescreva as funções abaixo utilizando arrow functions.

const somar = (a, b) =>  a + b;
const subtrair = (a, b) =>  a - b;
const multiplicar = (a, b) =>  a * b;
const dividir = (a, b) => {
  if (a === 0 || b === 0) {
    return "Não é possível dividir por zero";
  }
  return a / b;
}

// TODO:
// Identifique quais funções podem utilizar retorno implícito.

export const calculadora = (a, b, operacao) => {
  switch (operacao) {
    case "Somar": somar(a,b) 
    break;
    case "Subtração": subtrair(a,b)
    break;
    case "Multiplicação":multiplicar(a,b)
    break;
    case "Divisão":dividir(a,b)
    break;
    default: console.log("Nenhuma operação valida selecionada")
    break;
  }
}
