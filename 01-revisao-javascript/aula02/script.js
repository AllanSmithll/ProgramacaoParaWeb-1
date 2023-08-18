// 18/08/2023 - Sistemas de cadastro de alunos
const alunos = [];

function cadastrar() {
  const nomeElemento = document.querySelector("#nome");
  const idadeElemento = document.querySelector("#idade");
  const idadeAluno = Number(idadeElemento.value);
  const alunoACadastrar = {nome: nomeElemento.value, idade: idadeAluno};
  alunos.push(alunoACadastrar);
  const listaAlunosElemento = document.querySelector("#listaAlunos");
  inserirAlunoNoHtml(alunoACadastrar, listaAlunosElemento);
}

function inserirAlunoNoHtml(aluno, elementoDestino) {
    const alunoElemento = document.createElement("li");   
    alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade}`;
    elementoDestino.appendChild(alunoElemento);
}

function listarAlunosMenoresIdade() {
  const alunosMenores = alunos.filter(aluno => aluno.idade < 18);
  const listaAlunosMenoresElemento = document.querySelector("#listaAlunosMenores");
  alunosMenores.forEach(menor => inserirAlunoNoHtml(menor, listaAlunosMenoresElemento));
  
}