import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
  
export class MovieService {
  private options = {
    headers: {
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
		'X-RapidAPI-Key': '3046b7f284msh0486ec41da8456cp109559jsnfe4cb8204c6d'
    },
    
};

  constructor (private http: HttpClient) { }
  
  getMovies(): Observable<any>{
    return this.http.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=dcf62f1f6dc23e3c4ff22be5338b9afe&language=en-US&page=1")
  }

  getNewMovies(): Observable<any>{
    return this.http.get<any>("https://api.themoviedb.org/3/movie/now_playing?api_key=dcf62f1f6dc23e3c4ff22be5338b9afe&language=en-US")
  }


}
