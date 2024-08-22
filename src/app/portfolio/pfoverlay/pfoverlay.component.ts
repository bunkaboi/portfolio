import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectdataService } from '../../services/projectdata.service';
import { LanguageService } from '../../services/language.service';
import { FunctionsService } from '../../services/functions.service';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-pfoverlay',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './pfoverlay.component.html',
  styleUrl: './pfoverlay.component.scss'
})
export class PfoverlayComponent {

  constructor(public projectdata: ProjectdataService, public language: LanguageService, public functions: FunctionsService) { }

  hoverClose = false;

  @Input() projectIndex = 0;

  nextProject() {
    this.projectIndex++;
    this.projectIndex = this.projectIndex % this.projectdata.projectlist.length;
  }

  close() {
    this.functions.overlayRef.detach();
  }

}

