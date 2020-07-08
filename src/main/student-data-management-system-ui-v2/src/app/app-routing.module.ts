import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutPageComponent} from "./about-page/about-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {CoursesPageComponent} from "./courses-page/courses-page.component";
import {ResultPageComponent} from "./result-page/result-page.component";
import {SignupPageComponent} from "./signup-page/signup-page.component";
import {HomePageComponent} from "./home-page/home-page.component";



const routes: Routes = [
  {path: 'about', component:AboutPageComponent},
  {path: 'contact', component:ContactPageComponent},
  {path: 'course', component:CoursesPageComponent},
  {path: 'result', component:ResultPageComponent},
  {path: 'signup', component:SignupPageComponent},
  {path: 'home', component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
