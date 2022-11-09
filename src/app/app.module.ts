import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent] //引导启动
})
export class AppModule {
  
 }
