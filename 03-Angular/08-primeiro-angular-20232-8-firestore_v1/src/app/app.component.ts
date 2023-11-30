import { Component } from '@angular/core';
import {Aluno} from "./shared/model/aluno";
import {ALUNOS} from "./shared/model/ALUNOS";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-angular-20232';

  constructor() {
  }

}
