import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() {
    this.responsive = window.innerWidth < 940;
    this.responsive1200 = window.innerWidth < 1200;
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  private checkScreenSize() {
    this.responsive = window.innerWidth < 940;
    this.responsive1200 = window.innerWidth < 1200;
  }

  responsive = false;
  responsive1200 = false;

  goToRef(ref: string) {
    window.location.href = ref;
  }

  goToUrl(url: string) {
    window.open(url);
  }

/*   mailSubject = "I like to get in contact"

  myEmail = 'b.augustin@hotmail.com';

  sendEmail(myEmail: string, subject: string, body: string) {
    let mailtoLink = `mailto:${myEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  } */

}
