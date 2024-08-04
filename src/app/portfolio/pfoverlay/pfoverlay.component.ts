import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pf1Component } from '../pf-1/pf-1.component';
import { Pf2Component } from '../pf-2/pf-2.component';
import { Pf3Component } from '../pf-3/pf-3.component';

@Component({
  selector: 'app-pfoverlay',
  standalone: true,
  imports: [CommonModule, Pf1Component, Pf2Component, Pf3Component],
  templateUrl: './pfoverlay.component.html',
  styleUrl: './pfoverlay.component.scss'
})
export class PfoverlayComponent {

  showOverlay = true;

@Input()showProject1 = false;
@Input()showProject2 = false;
@Input()showProject3 = false;

@Output()eventOverlay = new EventEmitter<boolean>();

emitOverlay() {
  this.eventOverlay.emit(this.showOverlay);
}

}
