import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectdataService } from '../services/projectdata.service';
import { LanguageService } from '../services/language.service';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { FunctionsService } from '../services/functions.service';
import { PortfolioService } from '../services/portfolio.service';
import { PfoverlayComponent } from './pfoverlay/pfoverlay.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PfoverlayComponent, PortalModule, OverlayModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(public projectdata: ProjectdataService, public language: LanguageService, private overlay: Overlay, public portfolio: PortfolioService, public functions: FunctionsService) {
  }

  @ViewChild(CdkPortal) portal!: CdkPortal;

  openModal() {
    const config = new OverlayConfig({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    })

    this.portfolio.overlayRef = this.overlay.create(config);
    this.portfolio.overlayRef.attach(this.portal);
    this.portfolio.overlayRef.backdropClick().subscribe(() => this.portfolio.overlayRef.detach());
}


}