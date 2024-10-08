import { Component, ApplicationModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PrompterComponent } from './prompter/prompter.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FunctionsService } from '../services/functions.service';
import { LanguageService } from '../services/language.service';
import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [CommonModule, ApplicationModule, HeaderComponent, PrompterComponent],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
  animations: []
})

export class AtfComponent {

  constructor(public language: LanguageService, public functions:FunctionsService, public mailservice: EmailService) { }

  hover = false;

}
