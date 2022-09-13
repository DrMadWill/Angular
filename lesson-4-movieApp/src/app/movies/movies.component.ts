import { Component } from "@angular/core";
import { Movies } from "../data/movie.datasource";
import { Movie } from "../models/movie";

@Component({
  selector:"movies",
  styleUrls:["./movies.component.css"],
  templateUrl:"./movies.component.html"
})
export class MoviesComponent{
  title = "Movie List"

  getTitle():string{
    return this.title
  }
  movies : Movie[] = Movies

  selectedMovie!:Movie;

  onSelect(movie:Movie):void{
    this.selectedMovie = movie;
  }
}




