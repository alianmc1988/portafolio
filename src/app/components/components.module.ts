import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';


import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DemoComponent } from './demo/demo.component';

// Instalar Angular Animations


@NgModule({
  declarations: [PortfolioComponent, AboutComponent, ContactComponent, LandingpageComponent, NavbarComponent, FooterComponent, DemoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
