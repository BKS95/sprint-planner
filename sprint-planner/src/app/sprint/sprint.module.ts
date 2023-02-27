import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintRoutingModule } from './sprint-routing.module';
import { FormsModule } from '@angular/forms';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { PlanSprintComponent } from './plan-sprint/plan-sprint.component';



@NgModule({
  declarations: [ 
    SprintListComponent, PlanSprintComponent
  ],
  imports: [
    CommonModule,
    SprintRoutingModule,
    FormsModule
  ],
  entryComponents:[PlanSprintComponent]
})
export class SprintModule { }
