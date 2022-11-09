import { Component, OnInit ,Input} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,//保存着到这个 HeroDetailComponent 实例的路由信息。
  private heroService: HeroService,
  private location: Location) {// 是一个 Angular 的服务，用来与浏览器打交道。 
    
   }

  @Input() hero?:Hero;

  ngOnInit(): void {
    this.getHero()
  }                                                                                                                                  

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
