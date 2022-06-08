import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'new-releases', component: NewReleasesComponent },
  { path: 'upcoming', component: UpcomingComponent },
  {path: 'favorites', component: FavoritesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    SidenavComponent,
    FavoritesComponent,
    NewReleasesComponent,
    UpcomingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
