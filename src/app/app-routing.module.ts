import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { SquashComponent } from './squash/squash.component';
import { SnakeComponent } from './snake/snake.component';
import { PageNotFound } from './404/404.component';

export const appRoutes: Routes = [
  {path: '', component:  BodyComponent },
  {path: 'tennis', component: SquashComponent },
  {path: 'snake', component: SnakeComponent },
  { path: '**', component: PageNotFound }
]


