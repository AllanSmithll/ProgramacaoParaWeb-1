import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { MatriculaPipe } from './shared/pipes/matricula.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {AlunoModule} from "./aluno/aluno.module";
import { MenuComponent } from './layout/layout/menu/menu.component';
import {LayoutModule} from "./layout/layout/layout.module";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MensagemSnackService} from "./shared/services/mensagem-snack.service";
import {IMensagem} from "./shared/model/imensagem";
import {MensagemService} from "./shared/services/mensagem.service";
import {MensagemSweetService} from "./shared/services/mensagem-sweet.service";
import {InterceptorModule} from "./shared/interceptor/interceptor.module";
import {FirestoreAcademicoModule} from "./shared/firestore-academico/firestore-academico.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AlunoModule,
    LayoutModule,
    FlexModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSnackBarModule,
    InterceptorModule,
    FirestoreAcademicoModule
  ],
  providers: [
    {
      provide: IMensagem,
      useClass: MensagemSweetService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
