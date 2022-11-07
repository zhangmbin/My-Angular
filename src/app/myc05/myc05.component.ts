import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.scss'],
})
export class Myc05Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  people = [
    {
      id: 1,
      name: 'zsan',
      sex: 1,
    },
    {
      id: 2,
      name: 'lsi',
      sex: 0,
    },
    {
      id: 3,
      name: 'wwu',
      sex: 1,
    },
  ];
}
