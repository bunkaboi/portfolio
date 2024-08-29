import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FunctionsService } from '../services/functions.service';
import { LanguageService } from '../services/language.service';
import { TechnologiesService } from '../services/technologies.service';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  constructor(public language: LanguageService, public functions:FunctionsService, public technologies: TechnologiesService, public mailservice: EmailService) { }

  hover = false;

}
