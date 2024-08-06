import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProjectdataService } from '../../projectdata.service';


@Component({
  selector: 'app-pfoverlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pfoverlay.component.html',
  styleUrl: './pfoverlay.component.scss'
})
export class PfoverlayComponent {

  projectdata = inject(ProjectdataService);

  showOverlay = true;

  hoverClose = false;

 @Input() projectIndex = 0;
  

  @Output() eventOverlay = new EventEmitter<boolean>();

  emitOverlay() {
    this.eventOverlay.emit(this.showOverlay);
  }

  
  nextProject() {
    this.projectIndex++;
    this.projectIndex = this.projectIndex % this.projectdata.projectlist.length;
    console.log('projekt index ist: ', this.projectIndex);
  }

  testlist = [
    {
      name: "abc",
      number: "1,2,3"
    },
    {
      name: "bcd",
      number: "2,3,4"
    }
  ]

}

