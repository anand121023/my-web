import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'bio', component: MainPageComponent},
  {path: 'menus', component: NavBarComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent},
  {path: '', redirectTo: '/bio', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
