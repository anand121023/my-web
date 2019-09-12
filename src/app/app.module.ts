import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PortfolioComponent,
    ResumeComponent,
    NavBarComponent,
    MainPageComponent,
    SlideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
