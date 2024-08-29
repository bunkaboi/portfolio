import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { FunctionsService } from '../../../services/functions.service';
import { AtfService } from '../../../services/atf.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

constructor(public language: LanguageService, public functions: FunctionsService, public atf: AtfService) {}

}
