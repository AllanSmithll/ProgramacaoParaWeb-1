import { Component } from '@angular/core';
import {Aluno} from "../../shared/model/aluno";
import {ALUNOS} from "../../shared/model/ALUNOS";
import {AlunoService} from "../../shared/services/aluno.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MensagemService} from "../../shared/services/mensagem.service";
import {MensagemSnackService} from "../../shared/services/mensagem-snack.service";
import {IMensagem} from "../../shared/model/imensagem";

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.css']
})
export class ManutencaoComponent {

  readonly NOME_BOTAO_CADASTRAR = 'Cadastrar';
  readonly NOME_BOTAO_ATUALIZAR = 'Atualizar';
  alunoTratamento: Aluno;
  mensagemErro = '';
  estahCadastrando = true;
  nomeBotao = this.NOME_BOTAO_CADASTRAR;

  constructor(private alunoService: AlunoService, private rotaAtivada: ActivatedRoute, private roteador: Router,
              private mensagemService: IMensagem) {
    const idEdicao = this.rotaAtivada.snapshot.params['id'];
    if (idEdicao) {
      this.estahCadastrando = false;
      this.alunoService.pesquisarPorId(idEdicao).subscribe(alunoRetornado => {
        this.alunoTratamento = alunoRetornado;
      });
    }
    this.alunoTratamento = new Aluno('');
    this.nomeBotao = this.estahCadastrando ? this.NOME_BOTAO_CADASTRAR : this.NOME_BOTAO_ATUALIZAR;
  }

  cadastrarOuAtualizar(): void {
    if (this.estahCadastrando) {
      if (this.alunoTratamento.matricula) {
        this.alunoService.pesquisarPorMatricula(this.alunoTratamento.matricula).subscribe(
          alunoPesquisado => {
            if (alunoPesquisado && alunoPesquisado.length > 0) {
              this.mensagemService.erro(`Já há aluno com a matrícula ${this.alunoTratamento.matricula}!`);
            } else {
              this.alunoService.cadastrar(this.alunoTratamento).subscribe(
                alunoCadastrado => {
                  this.mensagemService.sucesso('Aluno cadastrado!');
                  this.roteador.navigate(['/listagem-alunos']);
                });
            }
          }
        );
      }
    } else {
      this.alunoService.atualizar(this.alunoTratamento).subscribe(aluno => {
        this.mensagemService.sucesso('Aluno atualizado!');
        this.roteador.navigate(['/listagem-alunos']);
      });
    }
  }

  // private ehMatriculaCadastrada(matricula: string): boolean {
  //   const alunosRetornados = this.alunos.filter(aluno => aluno.matricula === matricula);
  //   return alunosRetornados.length > 0;
  // }

}
