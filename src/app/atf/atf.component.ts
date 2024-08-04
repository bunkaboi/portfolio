import { Component, ApplicationModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PrompterComponent } from './prompter/prompter.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Pf1Component } from '../portfolio/pf-1/pf-1.component';


@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [CommonModule, ApplicationModule, HeaderComponent, PrompterComponent, Pf1Component],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
  animations: []
})

export class AtfComponent {


}
