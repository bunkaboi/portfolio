import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfoverlayComponent } from './pfoverlay/pfoverlay.component';
import { ProjectdataService } from '../services/projectdata.service';
import { LanguageService } from '../services/language.service';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PfoverlayComponent, PortalModule, OverlayModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  @ViewChild(CdkPortal) portal!: CdkPortal;

  constructor(public projectdata : ProjectdataService, public language : LanguageService, private overlay: Overlay) {
  }

  isOpen = false;

  overlayRef = this.overlay;

  openOverlay() {
    let overlayRef = this.overlay.create();
    overlayRef.attach(this.portal);
  }

  //schau dir das Thema subscribe noch mal an. vielleicht findest du da eine Idee, wie die subscribe anwendest und somit auch detach oder disposed

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