import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProjectdataService } from '../../services/projectdata.service';


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
  }

}

