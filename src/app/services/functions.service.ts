import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  inputName:string ="";
  inputEmail:string ="";
  inputHelp:string ="";
  
  mailSubject = "I like to get in contact"
  
  myEmail = 'b.augustin@hotmail.com';

  sendEmail() {
    let mailtoLink = `mailto:${this.myEmail}?subject=${this.mailSubject}&body=${this.inputHelp}`;
    window.location.href = mailtoLink;
  }

  goToRef(ref:string) {
    window.location.href = ref;
  }
}
