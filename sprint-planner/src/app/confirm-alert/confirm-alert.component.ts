import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.scss']
})
export class ConfirmAlertComponent {

  @Input() message = '';

  constructor(public ngbModal: NgbActiveModal) { }


  yes() {
    this.ngbModal.close(true)
  }

  no() {
    this.ngbModal.close(false)
  }

}
