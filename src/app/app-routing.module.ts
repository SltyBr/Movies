import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/components/main-page/main-page.component';
import { MoviesItemComponent } from './main-page/components/movies-item/movies-item.component';

const routes: Routes = [
  {path: 'movies', children: 
    [
      {path: '', component: MainPageComponent},
      {path: ':id', component: MoviesItemComponent},
    ]
  },
  {path: '', redirectTo: '/movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
