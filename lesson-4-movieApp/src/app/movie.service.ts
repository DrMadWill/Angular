import { Movie } from './models/movie';
import { Injectable } from '@angular/core';
import { Movies } from './data/movie.datasource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  getMovies(): Observable<Movie[]>  {
    return of(Movies);
  }

  constructor() { }
}
