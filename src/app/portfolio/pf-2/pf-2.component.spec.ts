import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pf2Component } from './pf-2.component';

describe('Pf2Component', () => {
  let component: Pf2Component;
  let fixture: ComponentFixture<Pf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pf2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
