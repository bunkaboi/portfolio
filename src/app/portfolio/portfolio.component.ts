import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfoverlayComponent } from './pfoverlay/pfoverlay.component';
import { ProjectdataService } from '../services/projectdata.service';
import { LanguageService } from '../services/language.service';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PfoverlayComponent, PortalModule, OverlayModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(public projectdata: ProjectdataService, public language: LanguageService, private overlay: Overlay, public functions: FunctionsService) {
  }

  @ViewChild(CdkPortal) portal!: CdkPortal;
  
    openModal() {
    const config = new OverlayConfig({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    })

    this.functions.overlayRef = this.overlay.create(config);
    this.functions.overlayRef.attach(this.portal);
    this.functions.overlayRef.backdropClick().subscribe(() => this.functions.overlayRef.detach());
  }

  

  projectIndex = 0;

  closeOverlay = false;

}