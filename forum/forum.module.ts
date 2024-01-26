import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { AaddforumComponent } from './aaddforum/aaddforum.component';
import { BestForumComponent } from './best-forum/best-forum.component';
import { ForumComponent } from './forum.component';
import { ForumService } from 'src/app/core/services/forum.service';
@NgModule({
  declarations: [
    ForumComponent,
    BestForumComponent,
    AaddforumComponent,
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,FormsModule,HttpClientModule
  ],
  providers:[ForumService,MessageService]
})
export class ForumModule { }
