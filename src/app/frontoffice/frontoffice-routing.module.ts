import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { SignInClientComponent } from './sign-in-client/sign-in-client.component';
import { SignUpClientComponent } from './sign-up-client/sign-up-client.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { VerifyResetPassCodeComponent } from './verify-reset-pass-code/verify-reset-pass-code.component';
import { ResetnewpassComponent } from './resetnewpass/resetnewpass.component';
import { AuthguardisconnectedClientORCONSULTANTService } from '../core/services/authguardisconnected-client-orconsultant.service';

const routes: Routes = [
  { path: '', component: FrontofficeComponent,children:[{path:'home',component:HomecomponentComponent},{path:'signin',component:SignInClientComponent,canActivate:[AuthguardisconnectedClientORCONSULTANTService]},
  {path:'verify-account/:username',component:VerifyAccountComponent},
  {path:'signup',component:SignUpClientComponent},
  {path:'updatepassword',component:ForgetpasswordComponent} ,
  {path:'verify-reset-code/:email',component:VerifyResetPassCodeComponent},
  {path:'newpass/:email',component:ResetnewpassComponent}
] 
},
  { path: 'formation', loadChildren: () => import('./formation/formation.module').then(m => m.FormationModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
