import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';

//primeng
import {TabViewModule} from 'primeng/tabview';
import { ContactComponent } from './components/contact/contact.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
