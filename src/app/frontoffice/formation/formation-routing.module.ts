import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation.component';
import { MesformationsComponent } from './mesformations/mesformations.component';
import { ScrapChatboatComponent } from '../scrap-chatboat/scrap-chatboat.component';

const routes: Routes = [{ path: '', component: FormationComponent },{path:'mesformations',component:MesformationsComponent},
{path:'mesformations/:titre',component:ScrapChatboatComponent}
];
 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
