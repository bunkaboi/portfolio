import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  functions = inject(FunctionsService);

  hover = false;

}
