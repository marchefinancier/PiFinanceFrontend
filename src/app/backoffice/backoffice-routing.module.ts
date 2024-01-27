import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AuthGuardService } from '../core/services/auth-guard.service';
import { ListeusersComponent } from './listeusers/listeusers.component';
import { AuthguardISConnectedAdminService } from '../core/services/authguardisconnectedAdmin.service';
import { ListeformationsComponent } from './listeformations/listeformations.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';

const routes: Routes = [{ path: '', component: BackofficeComponent,children:[{path:'home',component:HomeComponentComponent,canActivate: [AuthGuardService]},

{
  path:'login',component:LoginAdminComponent,canActivate:[AuthguardISConnectedAdminService]
},
{
  path:'signup',component:SignupAdminComponent,canActivate:[AuthGuardService]
}

,{
  path:'users',component:ListeusersComponent,canActivate:[AuthGuardService]
}
,
{
  path:'formations',component:ListeformationsComponent,canActivate:[AuthGuardService]
}
] 

 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
