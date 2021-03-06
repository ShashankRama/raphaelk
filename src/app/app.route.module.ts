import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ContactComponent} from './pages/contact/contact.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
},{
  path: 'about-me',
  component: AboutComponent,
},{
  path: 'portfolio',
  component: PortfolioComponent,
},{
  path: 'contact',
  component: ContactComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
