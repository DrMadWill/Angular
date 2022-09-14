import { Movie } from './models/movie';
import { Injectable } from '@angular/core';
import { Movies } from './data/movie.datasource';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  getMovies():Movie[] {
    return Movies;
  }

  constructor() { }
}
