import {Component, OnInit} from '@angular/core';
import {ALUNOS} from "../../shared/model/ALUNOS";
import {Aluno} from "../../shared/model/aluno";
import {AlunoService} from "../../shared/services/aluno.service";
import {Router} from "@angular/router";
import {AlunoFirestoreService} from "../../shared/services/aluno-firestore.service";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  alunos: Aluno[] = [];
  alunosPesquisa: Array<Aluno> = [];
  matriculaPesquisada: string = '';
  alunosPesquisados: Aluno[] = [];

  constructor(private alunoService: AlunoFirestoreService, private roteador: Router) {
  }

  ngOnInit() {
    this.alunoService.listar().subscribe(alunosRetornados =>
      {
        this.alunos = alunosRetornados;
      }
    );
    console.log('estou aqui');
    console.log(this.alunos);
  }

  remover(alunoARemover: Aluno): void {
    this.alunoService.remover(alunoARemover).subscribe( alunoRemovido => {
        console.log('Aluno removido');
      const indxARemover = this.alunos.findIndex(aluno =>
        aluno.matricula === alunoARemover.matricula);

      if (indxARemover >= 0) {
        this.alunos.splice(indxARemover, 1);
      }

      }
    );

  }

  pesquisar() {
    this.alunoService.pesquisarPorMatricula(this.matriculaPesquisada).subscribe(alunos => {
      this.alunosPesquisados = alunos;
    });
  }

  editar(id?: string): void {
    console.log('id');
    console.log(id);
    this.roteador.navigate(['edicao-aluno', id]);
  }

}
