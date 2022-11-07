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

  num = 0
  name = '张三'
  names = ['zs', 'ls', 'ww', 'jk']
  html = '<h3>我是张三</h3>'
  size=17

  addNum(): void {
    this.num++
    console.log(this.num);

  }
  desNum(): void {
    this.num--
  }

}
