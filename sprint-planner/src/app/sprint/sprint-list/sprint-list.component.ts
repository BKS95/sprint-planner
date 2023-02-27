import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmAlertComponent } from 'src/app/confirm-alert/confirm-alert.component';
import { DataService } from 'src/app/service/data.service';
import { PlanSprintComponent } from '../plan-sprint/plan-sprint.component';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.scss']
})
export class SprintListComponent {

  constructor(public dataService: DataService, public ngbModal: NgbModal) { }

  addSprint() {
    this.ngbModal.open(PlanSprintComponent, { centered: true, backdrop: 'static' });
  }

  modifySprint() {
    const modalRef = this.ngbModal.open(ConfirmAlertComponent, { centered: true, backdrop: 'static' });
    modalRef.componentInstance.message = 'Modifying existing sprint will remove all the stories planned.  Do you want to continue?'
    modalRef.result.then(response => {
      if (response) {
        this.openForEdit();
      }
    });
  }

  openForEdit() {
    let temp = [...this.dataService.plannedSprints, ...this.dataService.storyList];
    this.dataService.storyList = JSON.parse(JSON.stringify(temp));
    this.dataService.plannedSprints = [];
    this.addSprint();
  }

}
