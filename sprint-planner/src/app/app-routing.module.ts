import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'story',
    loadChildren: () => import('../app/story/story.module').then(module => module.StoryModule)
  },
  {
    path: 'sprint',
    loadChildren: () => import('../app/sprint/sprint.module').then(module => module.SprintModule)
  },
  {
    path: '**',
    redirectTo: '/story', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
