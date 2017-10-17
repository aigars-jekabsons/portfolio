import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { PageNotFoundComponent } from './body-components/page-not-found/page-not-found.component';
import { HomePageComponent } from './body-components/home-page/home-page.component';
import { ContactFormComponent } from './body-components/contact-form/contact-form.component';
import { ContentManagementComponent } from './body-components/content-management/content-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    PageNotFoundComponent,
    HomePageComponent,
    ContactFormComponent,
    ContentManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
