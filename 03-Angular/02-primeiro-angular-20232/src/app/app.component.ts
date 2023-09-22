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

  constructor() {
    this.alunoTratamento = new Aluno('', '', 0);
  }

  cadastrar(): void {
    this.alunos.push(this.alunoTratamento);
    this.alunoTratamento = new Aluno('', '', 0);
  }

  remover(alunoARemover: Aluno): void {
    const indxARemover = this.alunos.findIndex(aluno =>
      aluno.matricula === alunoARemover.matricula);

    if (indxARemover >= 0) {
      this.alunos.splice(indxARemover, 1);
    }

  }

}
