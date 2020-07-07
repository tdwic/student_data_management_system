import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { MainLoginComponent } from './components/main-login/main-login.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    MainPageComponent,
    MainLoginComponent,
    AboutPageComponent,
    ContactPageComponent,
    SignupPageComponent,
    CoursesPageComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
