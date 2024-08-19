import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-prompter',
  standalone: true,
  imports: [],
  templateUrl: './prompter.component.html',
  styleUrl: './prompter.component.scss'
})
export class PrompterComponent {

  constructor(public language: LanguageService) { }

}
