import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    FlexLayoutModule,
    FlexModule
  ],
  exports: [MenuComponent]
})
export class LayoutModule { }
