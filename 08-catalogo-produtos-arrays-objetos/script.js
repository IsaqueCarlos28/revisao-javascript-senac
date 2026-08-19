/*
  EXERCÍCIO 08 — CATÁLOGO DE PRODUTOS
*/

// TODO:
// Crie um array chamado produtos com pelo menos 5 objetos.
//
// Cada produto deve possuir:
// id
// nome
// preco
// categoria
// emEstoque

const produtos = [
  {
      id: 1,
      nome: "Teclado",
      preco: 599.90,
      categoria: "Instrumentos",
      emEstoque: true
  },
  {
      id: 2,
      nome: "Violão",
      preco: 899.90,
      categoria: "Instrumentos",
      emEstoque: true
  },
  {
      id: 3,
      nome: "Microfone",
      preco: 249.90,
      categoria: "Áudio",
      emEstoque: false
  },
  {
      id: 4,
      nome: "Fone de Ouvido",
      preco: 199.90,
      categoria: "Áudio",
      emEstoque: false
  },
  {
      id: 5,
      nome: "Suporte para Violão",
      preco: 89.90,
      categoria: "Acessórios",
      emEstoque: true
  }
];

export const visualisarProdutos = () => {
  produtos.forEach(e => {
    console.log(`id: ${e.id};\n nome: ${e.nome};\n preço: ${e.preco}; \n categoria: ${e.categoria};\n Status: ${e.emEstoque?"Disponivel": "Esgotado" }\n`)
  });
}
visualisarProdutos();

// TODO:
// Percorra o array com for, for...of ou forEach().

// TODO:
// Para cada item, mostre no console uma frase formatada
// contendo as informações do produto.
