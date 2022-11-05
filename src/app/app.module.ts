import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc01Component } from './myc01/myc01.compotent';
import { Myc02Component } from './myc02/myc02.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    Myc01Component,
    Myc02Component,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //引导启动
})
export class AppModule { }
