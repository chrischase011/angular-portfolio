import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavListenerComponent } from './components/nav-listener/nav-listener.component';
import { AboutMeHobbiesComponent } from './components/about-me-hobbies/about-me-hobbies.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavListenerComponent,
    AboutMeHobbiesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeroBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
