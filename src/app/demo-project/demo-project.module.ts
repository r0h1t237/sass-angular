import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutPageComponent } from './about-page/about-page.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const ComponentList = [
  NavBarComponent,
  HomePageComponent,
  AboutPageComponent,
  FooterComponent,
  ProjectsComponent,
  ContactComponent,
]

@NgModule({
  declarations: [
    ComponentList,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    ComponentList,
    FontAwesomeModule,
  ],
})
export class DemoProjectModule { }
