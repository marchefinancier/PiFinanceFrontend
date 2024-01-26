import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum.component';
import { BestForumComponent } from './best-forum/best-forum.component';
import { AaddforumComponent } from './aaddforum/aaddforum.component';

const routes: Routes = [{
  path: '', component: ForumComponent, children: [
    {
      path: 'forumBest',
      component: BestForumComponent
    },
    {
      path: 'AddForum',
      component: AaddforumComponent
    },
    {
      path: '',
      redirectTo: 'AddForum',
      pathMatch: 'full'
    }
  ],
},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
