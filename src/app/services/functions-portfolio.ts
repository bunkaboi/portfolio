import { Injectable } from '@angular/core';
import { ProjectdataService } from './projectdata.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioFunctionsService {

  constructor(public projectdata: ProjectdataService, private overlay: Overlay) { }

  overlayRef: any = "";

  close() {
    this.overlayRef.detach();
  }

  nextProject() {
    this.projectdata.projectIndex++;
    this.projectdata.projectIndex = this.projectdata.projectIndex % this.projectdata.projectlist.length;
  }

  


}
