import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSassComponent } from './learn-sass.component';

describe('LearnSassComponent', () => {
  let component: LearnSassComponent;
  let fixture: ComponentFixture<LearnSassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnSassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnSassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
