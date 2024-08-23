import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  overlayRef: any = "";

  inputName:string ="";
  inputEmail:string ="";
  inputHelp:string ="";
  
  mailSubject = "I like to get in contact"
  
  myEmail = 'b.augustin@hotmail.com';

  sendEmail(myEmail: string, subject: string, body: string) {
    let mailtoLink = `mailto:${myEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }

  goToRef(ref:string) {
    window.location.href = ref;
  }

  goToUrl(url:string) {
    window.open(url);
  }
}
