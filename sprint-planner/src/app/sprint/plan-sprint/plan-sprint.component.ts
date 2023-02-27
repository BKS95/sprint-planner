import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-plan-sprint',
  templateUrl: './plan-sprint.component.html',
  styleUrls: ['./plan-sprint.component.scss']
})
export class PlanSprintComponent {

  @Input() sprintPoint: number = 0;
  combination: any = [];
  submit = false;
  sprintPointError = false;

  constructor(public dataService: DataService,
    public ngbModal: NgbActiveModal) { }

  autoSelect() {
    this.submit = true;
    if (!this.checkForValidityofSprintPoint()) {
      let items = this.sortItems(JSON.parse(JSON.stringify(this.dataService.storyList)));
      this.generateCombinations(items, JSON.parse(JSON.stringify(this.sprintPoint)));
    }
  }

  checkForValidityofSprintPoint() {
    if (Number.isNaN(this.sprintPoint) || !this.sprintPoint.toString().match(/^[0-9]*$/)) {
      this.sprintPointError = true;
    } else {
      if (Number(this.sprintPoint) <= 0) {
        this.sprintPointError = true;
      } else {
        this.sprintPointError = false;
      }
    }
    return this.sprintPointError;
  }

  sortItems(list: any[]) {
    let tempItems = list.sort((a: any, b: any) => {
      if (a.point > b.point) {
        return -1;
      } else if (a.point < b.point) {
        return 1;
      }
      return 0;
    });
    return tempItems;
  }

  generateCombinations(list: any[], point: Number) {
    let temp = this.checkForCombo(list, Number(point));

    while (!temp.success && list.length !== 0) {
      list.splice(temp.lastIndex, 1);
      temp = this.checkForCombo(list, Number(point));
    }
    if (temp.success) {
      this.dataService.plannedSprints = this.combination;
      this.deleteItemsFromStoryList();
      this.ngbModal.close();
    } else {
      console.log('no combo')
    }
  }

  deleteItemsFromStoryList() {
    this.combination.forEach((data: any) => {
      this.dataService.storyList.forEach((el: any, i: Number, array: []) => {
        if ((el.name === data.name) && (el.point === data.point)) {
          this.removeFromArray(el, i);
        }
      });
    });
  }

  removeFromArray(el: any, i: Number) {
    this.dataService.storyList.splice(i, 1);
  }

  checkForCombo(a: any[], point: any) {
    let temp: any = [];
    let lastPushedIndex = 0;
    let sum = Number(point);
    for (let i = 0; (i < a.length - 1) && (sum !== 0); i++) {
      if (a[i]['point'] == sum) {
        sum = sum - a[i]['point'];
        lastPushedIndex = i;
        temp.push(a[i]);
      }
      else if (a[i]['point'] < sum) {
        sum = sum - a[i]['point'];
        temp.push(a[i]);
        lastPushedIndex = i;
      }
    }
    if (sum !== 0) {
      return { success: false, lastIndex: lastPushedIndex }
    } else {
      this.combination = temp;
      return { success: true, lastIndex: lastPushedIndex }
    }
  }

  clearStories() {
    this.dataService.storyList = [];
    this.ngbModal.close();
  }

  clearSprint() {
    this.dataService.plannedSprints = [];
    this.ngbModal.close();
  }

}
