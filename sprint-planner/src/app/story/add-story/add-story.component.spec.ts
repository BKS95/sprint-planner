import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';

import { AddStoryComponent } from './add-story.component';

class MockDataService {
  storyList=[];
}

describe('AddStoryComponent', () => {
  let component: AddStoryComponent;
  let fixture: ComponentFixture<AddStoryComponent>;
  let ngbActiveModal: NgbActiveModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStoryComponent],
      providers: [FormBuilder, NgbActiveModal, {provide: DataService, useClass: MockDataService}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStoryComponent);
    component = fixture.componentInstance;
    ngbActiveModal = component.ngbModal;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('check formvlidation', () => {
    fixture.detectChanges();
    const spy = spyOn(component,'addStory').and.callThrough();
    component.storyForm.controls.name.setValue('New Story1');
    component.storyForm.controls.point.setValue('5');
    expect(component.storyForm.valid).toBeTruthy();
    const btn = fixture.debugElement.query(By.css('#addButton')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.submit).toBeTruthy();
  });

  fit('click close button', () => {
    spyOn(ngbActiveModal,'close');
    component.close();
    expect(ngbActiveModal.close).toHaveBeenCalled();
  })
});
