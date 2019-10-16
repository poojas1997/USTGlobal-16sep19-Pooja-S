import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieChildComponent } from './movie-child/movie-child.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ReactiveFormComponent,
    MoviesComponent,
    MovieChildComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'form' , component: FormComponent},
      {path : 'add' , component: ReactiveFormComponent},
      {path : 'movie' , component : MoviesComponent}
    ])
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
