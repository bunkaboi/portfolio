import { Component, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AtfComponent } from './atf/atf.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillSetComponent } from './skill-set/skill-set.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ApplicationModule, AtfComponent, AboutMeComponent, ColleaguesComponent, ContactMeComponent, FooterComponent, PortfolioComponent, SkillSetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

//hier für wir alle components zusammen. Der Hintergrund ist in der Main TS/Scss