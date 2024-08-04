import { Component } from '@angular/core';
import { Pf1Component } from './pf-1/pf-1.component';
import { Pf2Component } from './pf-2/pf-2.component';
import { Pf3Component } from './pf-3/pf-3.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, Pf1Component, Pf2Component, Pf3Component],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
