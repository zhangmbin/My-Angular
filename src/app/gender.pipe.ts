import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value, lang = 'zh') {
    console.log(value);
    if (lang === 'en') {
      return value === 0 ? 'female' : 'male';
    }
    return value === 0 ? '女' : '男';
  }
}

//1
