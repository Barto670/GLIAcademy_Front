import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLoginComponent } from './aboutLogin.component';

describe('AboutComponent', () => {
  let component: AboutLoginComponent;
  let fixture: ComponentFixture<AboutLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
