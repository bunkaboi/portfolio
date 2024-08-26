import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() {
    this.responsive = window.innerWidth < 940;
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  private checkScreenSize() {
    this.responsive = window.innerWidth < 940;
  }

  overlayRef: any = "";

  menuOpen = false;

  closeMenu() {
    setTimeout(() => {
      this.menuOpen = false;
    }, 500)
  }

  responsive = false;

  /* inputName:string ="";
  inputEmail:string ="";
  inputHelp:string =""; */

  mailSubject = "I like to get in contact"

  myEmail = 'b.augustin@hotmail.com';

  sendEmail(myEmail: string, subject: string, body: string) {
    let mailtoLink = `mailto:${myEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }

  goToRef(ref: string) {
    window.location.href = ref;
  }

  goToUrl(url: string) {
    window.open(url);
  }
}
