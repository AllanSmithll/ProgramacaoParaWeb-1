import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Aluno} from "../../shared/model/aluno";
import {AlunoService} from "../../shared/services/aluno.service";

@Component({
  selector: 'app-listagem-tabela',
  templateUrl: './listagem-tabela.component.html',
  styleUrls: ['./listagem-tabela.component.css']
})
export class ListagemTabelaComponent implements OnInit {
  datasource: MatTableDataSource<Aluno>;
  colunasVisiveis = ['matricula', 'nome'];

  constructor(private alunoService: AlunoService) {
    this.datasource = new MatTableDataSource<Aluno>();
  }

  ngOnInit() {
    this.alunoService.listar().subscribe(alunos => {
      this.datasource = new MatTableDataSource<Aluno>(alunos);
    });
  }

  filtrar(evento: Event): void {
    const texto = (evento.target as HTMLInputElement).value;
    this.datasource.filter = texto;
  }

}
