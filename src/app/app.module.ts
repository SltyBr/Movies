import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/components/main-page/main-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CategoryComponent } from './main-page/components/category/category.component';
import { MoviesListComponent } from './main-page/components/movies-list/movies-list.component';
import { MoviesCardComponent } from './main-page/components/movies-card/movies-card.component';
import { Subject } from 'rxjs';
import { PaginationComponent } from './main-page/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ToolbarComponent,
    CategoryComponent,
    MoviesListComponent,
    MoviesCardComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Subject
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
