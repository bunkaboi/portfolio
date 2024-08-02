import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  langEng = true;
  langDeu = false;
  randomValue = 12;

langSwitch() {
  if(this.langEng == true) {
    this.langEng = false;
    this.langDeu = true;
  } else if (this.langEng == false) {
    this.langEng = true;
    this.langDeu = false;
  }
}

}
