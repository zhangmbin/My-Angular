import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc07TodolistComponent } from './myc07-todolist.component';

describe('Myc07TodolistComponent', () => {
  let component: Myc07TodolistComponent;
  let fixture: ComponentFixture<Myc07TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc07TodolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc07TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
