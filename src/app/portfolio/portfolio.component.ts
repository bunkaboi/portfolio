import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfoverlayComponent } from './pfoverlay/pfoverlay.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PfoverlayComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {


  hoverProject1 = false;
  hoverProject2 = false;
  hoverProject3 = false;

  showOverlay = false;

  projectIndex = 0;

  checkCloseOverlay(check: boolean) {
    this.showOverlay = check;
  }

}