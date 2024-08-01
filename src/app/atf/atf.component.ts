import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PrompterComponent } from './prompter/prompter.component';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [HeaderComponent, PrompterComponent],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

}
