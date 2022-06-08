import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {
 movies: any=[]

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getNewMovies().subscribe((movies) => this.movies=movies.results)
  }
}
