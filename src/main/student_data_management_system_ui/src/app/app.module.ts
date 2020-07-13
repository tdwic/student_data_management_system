import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainloginComponent } from './mainlogin/mainlogin.component';
import {AuthService} from './auth-service';
import {AuthGuard} from './auth.guard';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CoursesPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    ResultPageComponent,
    SignupPageComponent,
    MainloginComponent,
    TeacherPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [AuthService,HttpClientModule, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
