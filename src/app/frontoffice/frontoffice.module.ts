import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { SignUpClientComponent } from './sign-up-client/sign-up-client.component';
import { SignInClientComponent } from './sign-in-client/sign-in-client.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { WebSocketChatComponent } from './web-socket-chat/web-socket-chat.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { VerifyResetPassCodeComponent } from './verify-reset-pass-code/verify-reset-pass-code.component';
import { ResetnewpassComponent } from './resetnewpass/resetnewpass.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FrontofficeComponent,
    HomecomponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    SignUpClientComponent,
    SignInClientComponent,
    ForgetpasswordComponent,
    WebSocketChatComponent,
    VerifyAccountComponent,
    VerifyResetPassCodeComponent,
    ResetnewpassComponent,
    
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,FormsModule

  ],
  exports:[
    HeaderComponentComponent,
    FooterComponentComponent
  ]
})
export class FrontofficeModule { }
