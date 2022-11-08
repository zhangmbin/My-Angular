
// HeroService 可以从任何地方获取数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源。

import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({//注入器--把这个类标记为依赖注入系统的参与者之一，会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样
  providedIn: 'root'//用根注入器将你的服务注册成为提供者
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  heroes: Hero[] = [];

  //返回模拟的英雄列表。
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');//在获取到英雄数组时发送一条消息。
    return heroes;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
