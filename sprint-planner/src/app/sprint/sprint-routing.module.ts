import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintListComponent } from './sprint-list/sprint-list.component';

const routes: Routes = [
  {
    path: 'sprint-list',
    component:SprintListComponent
  },
  {
    path: '**',
    redirectTo: '/sprint/sprint-list', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprintRoutingModule { }