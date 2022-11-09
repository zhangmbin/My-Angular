
// HeroService 可以从任何地方获取数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源。

import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({//注入器--把这个类标记为依赖注入系统的参与者之一，会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样
  providedIn: 'root'//用根注入器将你的服务注册成为提供者
})
export class HeroService {

  constructor(  private http: HttpClient,
    private messageService: MessageService) { 
      
    }

    private heroesUrl = 'api/heroes';  // URL to web api

/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}

  heroes: Hero[] = [];

  //返回模拟的英雄列表。
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');//在获取到英雄数组时发送一条消息。
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }



  ngOnInit(): void {
    this.getHeroes();
  }


}
