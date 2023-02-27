import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmAlertComponent } from './confirm-alert.component';

describe('ConfirmAlertComponent', () => {
  let component: ConfirmAlertComponent;
  let fixture: ComponentFixture<ConfirmAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAlertComponent ],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('click on yes button', () => {
    const spy = spyOn(component,'yes');
    const btn = fixture.debugElement.query(By.css('#yesButton')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });

  fit('click on no button', () => {
    const spy = spyOn(component,'no');
    const btn = fixture.debugElement.query(By.css('#noButton')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled();
  })
});
