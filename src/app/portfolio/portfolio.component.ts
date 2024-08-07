import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfoverlayComponent } from './pfoverlay/pfoverlay.component';
import { ProjectdataService } from '../services/projectdata.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PfoverlayComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projectdata = inject(ProjectdataService);

  showOverlay = false;

  projectIndex = 0;

  checkCloseOverlay(check: boolean) {
    this.showOverlay = check;
  }

}