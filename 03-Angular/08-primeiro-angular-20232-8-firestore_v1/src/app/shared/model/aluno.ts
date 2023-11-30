export class Aluno {

  public id?: string;
  public matricula?: string;
  public nome?: string;
  public idade?: number;

  constructor(id?: string, aluno: Aluno = {} ) {
    this.id = id;
    this.matricula = aluno.matricula;
    this.nome = aluno.nome;
    this.idade = aluno.idade;
  }


}
