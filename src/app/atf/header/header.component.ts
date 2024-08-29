import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { FunctionsService } from '../../services/functions.service';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { MenuComponent } from "./menu/menu.component";
import { AtfService } from '../../services/atf.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, PortalModule, OverlayModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public language: LanguageService, public functions: FunctionsService, private overlay: Overlay, public atf: AtfService) { }



  randomValue = 12;



/*   @ViewChild(CdkPortal) portal!: CdkPortal;

  openMenu() {
    const config = new OverlayConfig({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    })

    this.functions.overlayRef = this.overlay.create(config);
    this.functions.overlayRef.attach(this.portal);
    this.functions.overlayRef.backdropClick().subscribe(() => this.functions.overlayRef.detach());
  } */
}
