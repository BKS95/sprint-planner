import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryRoutingModule } from './story-routing.module';
import { AddStoryComponent } from './add-story/add-story.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StoryListComponent,
    AddStoryComponent
  ],
  imports: [
    CommonModule,
    StoryRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[AddStoryComponent]
})
export class StoryModule { }
