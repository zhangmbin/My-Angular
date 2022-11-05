
// HeroService 可以从任何地方获取数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源。

import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({//把这个类标记为依赖注入系统的参与者之一
  providedIn: 'root'//用根注入器将你的服务注册成为提供者
})
export class HeroService {

  constructor() { }

  heroes: Hero[] = [];

  //返回模拟的英雄列表。
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
