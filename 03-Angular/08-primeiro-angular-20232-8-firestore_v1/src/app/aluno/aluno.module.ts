import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { ListagemComponent } from './listagem/listagem.component';
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../shared/pipes/pipes.module";
import {MaterialModule} from "../layout/material/material.module";
import { CadastroListagemComponent } from './cadastro-listagem/cadastro-listagem.component';
import {FlexModule} from "@angular/flex-layout";
import {LayoutModule} from "../layout/layout/layout.module";
import {RouterModule} from "@angular/router";
import { ListagemTabelaComponent } from './listagem-tabela/listagem-tabela.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    ManutencaoComponent,
    ListagemComponent,
    CadastroListagemComponent,
    ListagemTabelaComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        MaterialModule,
        FlexModule,
        LayoutModule,
        RouterModule,
        MatTableModule
    ],
  exports: [
    ManutencaoComponent,
    ListagemComponent,
    CadastroListagemComponent,
    ListagemTabelaComponent
  ]
})
export class AlunoModule { }
