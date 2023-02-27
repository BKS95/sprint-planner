import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryListComponent } from './story-list/story-list.component';

const routes: Routes = [
  {
    path: 'story-list',
    component:StoryListComponent
  },
  {
    path: '**',
    redirectTo: '/story/story-list', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }