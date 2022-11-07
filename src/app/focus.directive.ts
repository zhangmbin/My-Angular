// ng g d 指令名

import { Directive ,ElementRef } from '@angular/core';

@Directive({
  // 靠这个appFocus关联(全自动，对应的函数就会作为参数传递到 指令的构造方法中)
  selector: '[appFocus]'
})
export class FocusDirective {
//需要重启命令行    构造方法
  constructor(e:ElementRef) {
    console.log(e);
    let input=e.nativeElement
    input.value=input.value.toUpperCase()
  }

}
