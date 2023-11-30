import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatriculaPipe} from "./matricula.pipe";



@NgModule({
  declarations: [MatriculaPipe],
  imports: [
    CommonModule
  ],
  exports: [MatriculaPipe]
})
export class PipesModule { }
