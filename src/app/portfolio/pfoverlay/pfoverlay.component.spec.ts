import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfoverlayComponent } from './pfoverlay.component';

describe('PfoverlayComponent', () => {
  let component: PfoverlayComponent;
  let fixture: ComponentFixture<PfoverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PfoverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PfoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
