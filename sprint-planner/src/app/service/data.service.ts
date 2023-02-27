import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storyList: any = [
    { name: 'New Story1', point: 2 },
    { name: 'New Story2', point: 10 },
    { name: 'New Story3', point: 9 },
    { name: 'New Story4', point: 3 },
    { name: 'New Story5', point: 4 },
    { name: 'New Story6', point: 5 },
    { name: 'New Story7', point: 6 },
    { name: 'New Story8', point: 7 },
    { name: 'New Story9', point: 8 },
    { name: 'New Story10', point: 3 },
    { name: 'New Story11', point: 2 },
    { name: 'New Story12', point: 7 },
    { name: 'New Story13', point: 8 },
    { name: 'New Story14', point: 9 },
    { name: 'New Story15', point: 4 },
    { name: 'New Story16', point: 7 },
    { name: 'New Story17', point: 7 },
    { name: 'New Story18', point: 7 },
    { name: 'New Story19', point: 9 },
    { name: 'New Story20', point: 3 }
  ];

  plannedSprints: any = [];

  constructor() { }
}
