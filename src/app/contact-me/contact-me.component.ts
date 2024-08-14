import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  checkboxChecked = false;
  checkboxHovered = false;

  acceptHello = true;

setCheckbox() {
  if(this.checkboxChecked == false) {
    this.checkboxChecked = true;
    this.acceptHello = true;
  } else {
    this.checkboxChecked = false;
  };
}

checkAcception() {
  if(this.checkboxChecked) {
    this.acceptHello = true;
  } else {
    this.acceptHello = false;
  }
}

}
