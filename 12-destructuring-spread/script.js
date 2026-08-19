/*
  EXERCÍCIO 12 — DESTRUCTURING E SPREAD
*/

const aluno = {
  nome: "Marina",
  idade: 22,
  curso: "Desenvolvimento Web",
  notas: [8.5, 7.0, 9.0],
  situacao: "Em análise",
};

// TODO:
// Extraia nome, curso e notas utilizando destructuring.
const {nome,curso,notas} = aluno

// TODO:
// Calcule a média das notas.

const media = (notas.reduce((soma,nota) => soma + nota, 0) / notas.length).toFixed(2)
console.log(media)

// TODO:
// Crie um NOVO objeto chamado alunoAtualizado usando spread.

const alunoAtualizado = {
  ...aluno,
  media: media,
  situacao: media >=0?"Aprovado": Reprovado
}
console.log(alunoAtualizado)

// alunoAtualizado deve:
// - manter os dados anteriores;
// - adicionar a propriedade media;
// - alterar a situacao.

// IMPORTANTE:
// Não modifique o objeto aluno diretamente.

// TODO:
// Exiba os dois objetos para comparação.
