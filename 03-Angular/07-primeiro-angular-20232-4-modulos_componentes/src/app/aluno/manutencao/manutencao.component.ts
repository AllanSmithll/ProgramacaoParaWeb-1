import { Component } from '@angular/core';
import {Aluno} from "../../shared/model/aluno";
import {ALUNOS} from "../../shared/model/ALUNOS";

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.css']
})
export class ManutencaoComponent {

  alunos = ALUNOS;
  alunoTratamento: Aluno;
  mensagemErro = '';

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

  private ehMatriculaCadastrada(matricula: string): boolean {
    const alunosRetornados = this.alunos.filter(aluno => aluno.matricula === matricula);
    return alunosRetornados.length > 0;
  }

}
