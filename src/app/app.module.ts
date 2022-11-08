import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc02Component } from './myc02/myc02.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Myc03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { FocusDirective } from './focus.directive';
import { UpperDirective } from './upper.directive';
import { Myc05Component } from './myc05/myc05.component';
import { GenderPipe } from './gender.pipe';
import { Myc06Component } from './myc06/myc06.component';
import { Myc07TodolistComponent } from './myc07-todolist/myc07-todolist.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    Myc02Component,
    HeroesComponent,
    HeroDetailComponent,
    Myc03Component,
    Myc04Component,
    FocusDirective,
    UpperDirective,
    Myc05Component,
    GenderPipe,
    Myc06Component,
    Myc07TodolistComponent,
    MessagesComponent
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
