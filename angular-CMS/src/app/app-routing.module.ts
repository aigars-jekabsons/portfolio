import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './body-components/page-not-found/page-not-found.component';
import { HomePageComponent } from './body-components/home-page/home-page.component';
import { ContactFormComponent } from './body-components/contact-form/contact-form.component';
import { ContentManagementComponent } from './body-components/content-management/content-management.component';
const routes: Routes = [
  {path: 'a-panel', component:  HomePageComponent },
  {path: 'a-panel/ContactForm', component: ContactFormComponent },
  {path: 'a-panel/manageContent', component: ContentManagementComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }







