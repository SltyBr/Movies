import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CategoryComponent } from './main-page/category/category.component';
import { MoviesListComponent } from './main-page/movies-list/movies-list.component';
import { MoviesCardComponent } from './main-page/movies-list/movies-card/movies-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ToolbarComponent,
    CategoryComponent,
    MoviesListComponent,
    MoviesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
