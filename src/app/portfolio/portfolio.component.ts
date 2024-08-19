import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfoverlayComponent } from './pfoverlay/pfoverlay.component';
import { ProjectdataService } from '../services/projectdata.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PfoverlayComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(public projectdata : ProjectdataService, public language : LanguageService) {
  }

  showOverlay = false;

  projectIndex = 0;

  checkCloseOverlay(check: boolean) {
    this.showOverlay = check;
  }

  showPreviews():Object {
    if(this.showOverlay == true) {
      return 'display: flex; transform: translateY(index * -50px);'
    } else {
      return 'display: none;'
    };
  }

}