import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { ListagemComponent } from './listagem/listagem.component';
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../shared/pipes/pipes.module";
import {MaterialModule} from "../layout/material/material.module";
import { CadastroListagemComponent } from './cadastro-listagem/cadastro-listagem.component';

@NgModule({
  declarations: [
    ManutencaoComponent,
    ListagemComponent,
    CadastroListagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    MaterialModule
  ],
  exports: [
    ManutencaoComponent,
    ListagemComponent,
    CadastroListagemComponent
  ]
})
export class AlunoModule { }
