import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmAlertComponent } from 'src/app/confirm-alert/confirm-alert.component';
import { DataService } from 'src/app/service/data.service';
import { PlanSprintComponent } from '../plan-sprint/plan-sprint.component';

import { SprintListComponent } from './sprint-list.component';

class MockDataService {
  storyList = [];
  plannedSprints = [];
}

export class MockNgbModalRef {
  componentInstance = {
    message: 'Modifying existing sprint will remove all the stories planned.'
  };
  result: Promise<any> = new Promise((resolve, reject) => resolve(true));
  close() { }
}

describe('SprintListComponent', () => {
  let component: SprintListComponent;
  let fixture: ComponentFixture<SprintListComponent>;
  let ngbModal: NgbModal;
  const mockModal: MockNgbModalRef = new MockNgbModalRef();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SprintListComponent],
      providers: [{ provide: DataService, useClass: MockDataService }, NgbModal]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintListComponent);
    component = fixture.componentInstance;
    ngbModal = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should check if open modal', () => {
    spyOn(ngbModal, 'open');
    component.addSprint();
    expect(ngbModal.open).toHaveBeenCalledWith(PlanSprintComponent, { centered: true, backdrop: 'static' });
  });

  fit('check if empty screen is displayed', () => {
    const spy = spyOn(component, 'addSprint').and.callThrough();
    const btn = fixture.debugElement.query(By.css('#addSprintButton')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  fit('check if floating button is displayed', () => {
    component.dataService.plannedSprints = [{ name: 'New Story1', point: 2 },
    { name: 'New Story2', point: 10 },
    { name: 'New Story3', point: 9 }]
    fixture.detectChanges();
    const spy = spyOn(component, 'modifySprint').and.callThrough();
    const btn = fixture.debugElement.query(By.css('#modify')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  fit('should check if open modal for modify sprint event', () => {
    let modalMock = mockModal;
    const spy = spyOn(ngbModal, 'open').and.returnValue(modalMock as any);
    component.modifySprint();
    expect(ngbModal.open).toHaveBeenCalledWith(ConfirmAlertComponent, { centered: true, backdrop: 'static' });
  });
});
