import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {ResultPageComponent} from "./components/result-page/result-page.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {CoursesPageComponent} from "./components/courses-page/courses-page.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";


const routes: Routes = [
  {path: 'about', component:AboutPageComponent},
  {path: 'contact', component:ContactPageComponent},
  {path: 'course', component:CoursesPageComponent},
  {path: 'home', component:MainPageComponent},
  {path: 'result', component:ResultPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
