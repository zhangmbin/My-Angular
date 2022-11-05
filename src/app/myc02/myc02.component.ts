import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc02',
  templateUrl: './myc02.component.html',
  styleUrls: ['./myc02.component.scss']
})
export class Myc02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num= 0

  addNum(): void {
    console.log(1);
    
    this.num++
    console.log(this.num);
    
  }
  desNum(): void {
    this.num--
  }

}
