import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './body-components/page-not-found/page-not-found.component';
import { HomePageComponent } from './body-components/home-page/home-page.component';
import { ContactFormComponent } from './body-components/contact-form/contact-form.component';

const routes: Routes = [
  {path: '', component:  HomePageComponent },
  {path: 'ContactForm', component: ContactFormComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }







