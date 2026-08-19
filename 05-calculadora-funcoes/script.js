/*
  EXERCÍCIO 05 — CALCULADORA UTILIZANDO FUNÇÕES
*/

function somar(a, b) {
  return console.log(`${a} + ${b} = ${a + b}`)
}

function subtrair(a, b) {
  return console.log(`${a} - ${b} = ${a - b}`)
}

function multiplicar(a, b) {
  return console.log(`${a} * ${b} = ${a * b}`)
}

function dividir(a, b) {
  if(a === 0 || b === 0){
    return console.log("Não é possivel realizar divisão por zero")
  }
  return console.log(`${a} % ${b} = ${a % b}`)
}

export function calcular(a, b, operacao) {
  switch (operacao) {
    case "Somar":
      somar(a,b)
    break;
    
    case "Subtração":
      subtrair(a,b)
    break;

    case "Multiplicação":
      multiplicar(a,b)
    break;

    case "Divisão":
      dividir(a,b)
    break;
  
    default:
      console.log("Nenhuma operação valida selecionada")
      break;
  }
}
