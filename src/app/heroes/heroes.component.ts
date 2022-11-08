import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { //这个参数声明了一个私有 heroService 属性，同时把它标记为一个 HeroService 的注入点

  }
  // heroes = HEROES//导入HEROES并赋值
  heroes: Hero[] = [];

  selectedHero?: Hero;//把该组件的 hero 属性改名为 selectedHero，但不要为它赋值。 因为应用刚刚启动时并没有所选英雄(空值)
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();//----同步
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);//----异步
  }

  ngOnInit(): void {  //ngOnInit() 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit()。这里是放置初始化逻辑的好地方。
    this.getHeroes() 
  }

}
