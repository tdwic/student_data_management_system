import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ResultPageComponent} from './result-page/result-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {SignupPageComponent} from './signup-page/signup-page.component';
import {MainloginComponent} from './mainlogin/mainlogin.component';
import {AuthGuard} from './auth.guard';
import {TeacherPageComponent} from "./teacher-page/teacher-page.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'result',
    component: ResultPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'course',
    component: CoursesPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'teacher',
    component:TeacherPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin',
    component:AdminPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: 'login',
    component: MainloginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
