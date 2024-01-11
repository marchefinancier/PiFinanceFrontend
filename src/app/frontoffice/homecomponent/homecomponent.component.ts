import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenstorageService } from 'src/app/core/services/tokenstorage.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent {
  isLogin: boolean =false ; 
 username:String="";
constructor(private storageserv: TokenstorageService) {
  if(this.storageserv.getToken()==null){
    this.isLogin=false;
  }else{
    this.isLogin=true;
  }
  }


 }


 


