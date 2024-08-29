import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtfService {

  constructor() { }

  menuOpen = false;

  closeMenu() {
    setTimeout(() => {
      this.menuOpen = false;
    }, 500)
  }
}
