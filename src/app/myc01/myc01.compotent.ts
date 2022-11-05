import { Component } from '@angular/core';

@Component({
  selector: 'app-myc01',//自定义
  templateUrl: './myc01.component.html',
  styleUrls: ['./myc01.component.scss']
})
export class Myc01Component {
  name = 18
  divs = 1111
  num: 0
  addNum(): void {
    this.num++
  }
  desNum(): void {
    this.num--
  }
}
