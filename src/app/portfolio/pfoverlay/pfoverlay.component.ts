import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectdataService } from '../../services/projectdata.service';
import { LanguageService } from '../../services/language.service';
import { FunctionsService } from '../../services/functions.service';


@Component({
  selector: 'app-pfoverlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pfoverlay.component.html',
  styleUrl: './pfoverlay.component.scss'
})
export class PfoverlayComponent {

  constructor(public projectdata: ProjectdataService, public language: LanguageService, public functions: FunctionsService) {
  
  }

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

