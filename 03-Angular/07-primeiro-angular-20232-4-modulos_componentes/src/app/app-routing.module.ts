import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./aluno/listagem/listagem.component";
import {ManutencaoComponent} from "./aluno/manutencao/manutencao.component";
import {CadastroListagemComponent} from "./aluno/cadastro-listagem/cadastro-listagem.component";

const routes: Routes = [
  {
    path: "listagem-alunos",
    component: ListagemComponent
  },
  {
    path: "cadastro-aluno",
    component: ManutencaoComponent
  },
  {
    path: "edicao-aluno",
    component: ManutencaoComponent
  },
  {
    path: "cadastro-listagem-alunos",
    component: CadastroListagemComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
