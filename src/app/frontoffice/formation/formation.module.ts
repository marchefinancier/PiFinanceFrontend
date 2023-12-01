import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { FormationComponent } from './formation.component';
import { FrontofficeModule } from '../frontoffice.module';


@NgModule({
  declarations: [
    FormationComponent,
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    FrontofficeModule
  ]
})
export class FormationModule { }
