import { Component } from '@angular/core';
import {ALUNOS} from "../../shared/model/ALUNOS";
import {Aluno} from "../../shared/model/aluno";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  alunos = ALUNOS;
  alunosPesquisa: Array<Aluno> = [];

  remover(alunoARemover: Aluno): void {
    const indxARemover = this.alunos.findIndex(aluno =>
      aluno.matricula === alunoARemover.matricula);

    if (indxARemover >= 0) {
      this.alunos.splice(indxARemover, 1);
    }

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
