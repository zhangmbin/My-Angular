import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//选择器
  templateUrl: './app.component.html',//模板
  styleUrls: ['./app.component.scss']//样式
})
export class AppComponent {//js
  title = 'my-angular';
  locate='fuzhou'


  show(msg){
    console.log('msg',msg);
  }
}
