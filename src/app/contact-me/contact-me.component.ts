import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  functions = inject(FunctionsService);

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
