import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { FormationComponent } from './formation.component';
import { FrontofficeModule } from '../frontoffice.module';
import { AddformationComponent } from './addformation/addformation.component';
import { FormsModule } from '@angular/forms';
import { EditformationComponent } from './editformation/editformation.component';
import { MesformationsComponent } from './mesformations/mesformations.component';


@NgModule({
  declarations: [
    FormationComponent,
    AddformationComponent,
    EditformationComponent,
    MesformationsComponent
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    FrontofficeModule ,
    FormsModule
  ]
})
export class FormationModule { }
