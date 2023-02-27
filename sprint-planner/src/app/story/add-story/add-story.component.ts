import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent {

  storyForm: FormGroup;
  submit = false;

  constructor(public dataService: DataService,
    public formBuilder: FormBuilder,
    public ngbModal: NgbActiveModal) {
    this.storyForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      point: ['', Validators.compose([Validators.required, Validators.max(10), Validators.min(1), Validators.pattern(/^[0-9]*$/)])]
    });
  }

  addStory() {
    this.submit = true;
    if(this.storyForm.valid) {
      this.dataService.storyList.push(this.storyForm.value);
      this.ngbModal.close();
    }
  }

  close() {
    this.ngbModal.close();
  }

}
