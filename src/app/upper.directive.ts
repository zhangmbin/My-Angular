import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(e:ElementRef) {
    // console.log(e);
    let input=e.nativeElement
    input.value.toUpperCase()
   }

}
