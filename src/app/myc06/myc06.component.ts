import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-myc06',
  templateUrl: './myc06.component.html',
  styleUrls: ['./myc06.component.scss'],
})
export class Myc06Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() name: string;//字符串
  @Input() age: number;//数字
  @Input() boss:IBoss//对象类型需要定义接口

  msgPost='asdf'
  @Output() msgEvent=new EventEmitter()
}

interface IBoss{
  name:string
  age:number
  sex:string
}
