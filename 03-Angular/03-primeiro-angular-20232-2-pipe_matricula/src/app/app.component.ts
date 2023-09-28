import { Component } from '@angular/core';
import {Aluno} from "./shared/model/aluno";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-angular-20232';
  alunos: Aluno[] = [];
  alunoTratamento: Aluno;
  mensagemErro = '';
  alunosPesquisa: Array<Aluno> = [];

  constructor() {
    this.alunoTratamento = new Aluno('', '', 0);
  }

  cadastrar(): void {
    if (!this.ehMatriculaCadastrada(this.alunoTratamento.matricula)) {
      this.alunos.push(this.alunoTratamento);
      this.alunoTratamento = new Aluno('', '', 0);
      this.mensagemErro = '';
    } else {
      this.mensagemErro = `Matrícula ${this.alunoTratamento.matricula} já cadastrada!`;
    }
  }

  remover(alunoARemover: Aluno): void {
    const indxARemover = this.alunos.findIndex(aluno =>
      aluno.matricula === alunoARemover.matricula);

    if (indxARemover >= 0) {
      this.alunos.splice(indxARemover, 1);
    }

  }

  private ehMatriculaCadastrada(matricula: string): boolean {
    const alunosRetornados = this.alunos.filter(aluno => aluno.matricula === matricula);
    return alunosRetornados.length > 0;
  }

  pesquisar(pedacoNome: string) {
    if (pedacoNome.length == 0) {
      this.alunosPesquisa = [];
    }
    this.alunos.forEach(aluno => {
      if (aluno.nome.startsWith(pedacoNome)) {
        this.alunosPesquisa.push(aluno);
      }
    });
  }
}
