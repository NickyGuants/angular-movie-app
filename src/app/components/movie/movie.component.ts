import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  movie: any={}

  constructor (private movieService: MovieService) { }
  

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => movies.map((movie: any) => {
      let movieId = movie.id;
      let title = movieId.split("/")[2]
      this.movieService.getMovieDetails(title).subscribe((movie) => this.movie = movie);
    }))

  }


}
