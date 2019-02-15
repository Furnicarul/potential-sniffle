import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full',
  },
  
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
