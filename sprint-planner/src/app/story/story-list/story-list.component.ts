import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';
import { AddStoryComponent } from '../add-story/add-story.component';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent {

  constructor(public dataService: DataService, public ngbModal: NgbModal) { }


  addStory() {
    this.ngbModal.open(AddStoryComponent, {centered:true, backdrop:'static'})
  }

}
