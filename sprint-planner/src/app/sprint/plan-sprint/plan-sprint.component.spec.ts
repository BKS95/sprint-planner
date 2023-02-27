import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';

import { PlanSprintComponent } from './plan-sprint.component';

class MockDataService {
  storyList = [];
  plannedSprints = [
    { name: 'New Story1', point: 2 },
    { name: 'New Story2', point: 10 },
    { name: 'New Story3', point: 9 }
  ];
}

describe('PlanSprintComponent', () => {
  let component: PlanSprintComponent;
  let fixture: ComponentFixture<PlanSprintComponent>;
  let mockDataService: MockDataService;
  let ngbActiveModal: NgbActiveModal;
  let dataService: DataService


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanSprintComponent],
      providers: [NgbActiveModal, { provide: DataService, useClass: MockDataService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSprintComponent);
    component = fixture.componentInstance;
    ngbActiveModal = component.ngbModal;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('clear stories', () => {
    spyOn(ngbActiveModal,'close');
    const spy = spyOn(component, 'clearStories').and.callThrough();
    const btn = fixture.debugElement.query(By.css('#clearStory')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    expect(ngbActiveModal.close).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  })

  fit('clear sprint', () => {
    spyOn(ngbActiveModal,'close');
    const spy = spyOn(component, 'clearSprint').and.callThrough();
    const btn = fixture.debugElement.query(By.css('#clearSprint')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    expect(ngbActiveModal.close).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  })

  fit('validate sprint point', () => {
    const spy = spyOn(component,'autoSelect').and.callThrough();
    component.sprintPoint = 2;
    const btn = fixture.debugElement.query(By.css('#autoSelect')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });

  fit('validate sprint point', () => {
    const spy = spyOn(component,'generateCombinations').and.callThrough();
    component.sprintPoint = 2;
    const btn = fixture.debugElement.query(By.css('#autoSelect')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });
});
