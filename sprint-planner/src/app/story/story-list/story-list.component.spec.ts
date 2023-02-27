import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';
import { AddStoryComponent } from '../add-story/add-story.component';
import { StoryListComponent } from './story-list.component';

class MockDataService {
  storyList = [];
}

describe('StoryListComponent', () => {
  let component: StoryListComponent;
  let fixture: ComponentFixture<StoryListComponent>;
  let ngbModal: NgbModal;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryListComponent, AddStoryComponent],
      providers: [FormBuilder, { provide: DataService, useClass: MockDataService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryListComponent);
    component = fixture.componentInstance;
    ngbModal = TestBed.inject(NgbModal);

    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should check if open modal', () => {
    spyOn(ngbModal, 'open');
    component.addStory();
    expect(ngbModal.open).toHaveBeenCalledWith(AddStoryComponent, { centered: true, backdrop: 'static' });
  });

  fit('check if empty screen is displayed', () => {
    const spy = spyOn(component, 'addStory').and.callThrough();
    const btn = fixture.debugElement.query(By.css('#addButton')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  fit('check if floating button is displayed', () => {
    component.dataService.storyList = [{ name: 'New Story1', point: 2 }]
    const spy = spyOn(component, 'addStory').and.callThrough();
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('#floatingAddButton')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });
});
