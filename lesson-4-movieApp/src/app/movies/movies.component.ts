import { Component } from "@angular/core";
import { Movie } from "../models/movie";
import { MovieService } from "../movie.service";


@Component({
  selector:"movies",
  styleUrls:["./movies.component.css"],
  templateUrl:"./movies.component.html"
})
export class MoviesComponent{
  title = "Movie List"


  movies!: Movie[]
  selectedMovie!:Movie;


  constructor(private moviesService: MovieService){ }

  getTitle():string{
    return this.title
  }

  onSelect(movie:Movie):void{
    this.selectedMovie = movie;
  }

  ngOnInit(): void {
   this.moviesService.getMovies()
            .subscribe(movies => this.movies = movies);
  }

}




