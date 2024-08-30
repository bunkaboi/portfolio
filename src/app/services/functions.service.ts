import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() {
    this.responsive = window.innerWidth < 940;
    this.responsive1200 = window.innerWidth < 1200;
    this.responsive600 = window.innerWidth < 600;
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  private checkScreenSize() {
    this.responsive = window.innerWidth < 940;
    this.responsive1200 = window.innerWidth < 1200;
    this.responsive600 = window.innerWidth < 600;
  }

  responsive = false;
  responsive1200 = false;
  responsive600 = false;

  goToRef(ref: string) {
    window.location.href = ref;
  }

  goToUrl(url: string) {
    window.open(url);
  }

}
