import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FunctionsService } from '../services/functions.service';
import { LanguageService } from '../services/language.service';

interface Message {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent {

message: Message = {
  name: '',
  email: '',
  message: ''
}

submitForm(form: NgForm) {
  if(form.valid && this.validPrivacyAcception) {
    console.log("myEmail: ", this.functions.myEmail, "subject: ", this.functions.mailSubject, "body: ", this.message.message);
    /* this.functions.sendEmail(this.functions.myEmail, this.functions.mailSubject, this.message.message) */
  }
}



  constructor(public functions: FunctionsService, public language: LanguageService) { }

  checkboxChecked = false;
  checkboxHovered = false;

  validPrivacyAcception = true;

setCheckbox() {
  if(this.checkboxChecked == false) {
    this.checkboxChecked = true;
    this.validPrivacyAcception = true;
  } else {
    this.checkboxChecked = false;
  };
}

checkAcception() {
  if(this.checkboxChecked) {
    this.validPrivacyAcception = true;
  } else {
    this.validPrivacyAcception = false;
  }
}

}
