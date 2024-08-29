import { Injectable, ViewChild } from '@angular/core';
import { ProjectdataService } from './projectdata.service';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {

  constructor(public projectdata: ProjectdataService, private overlay: Overlay) { }

  overlayRef: any = "";

  close() {
    this.overlayRef.detach();
  }

  nextProject() {
    this.projectdata.projectIndex++;
    this.projectdata.projectIndex = this.projectdata.projectIndex % this.projectdata.projectlist.length;
  }

  hoverClose = false;

}
