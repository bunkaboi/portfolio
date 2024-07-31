import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pf3Component } from './pf-3.component';

describe('Pf3Component', () => {
  let component: Pf3Component;
  let fixture: ComponentFixture<Pf3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pf3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
