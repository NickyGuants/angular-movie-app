import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
  
export class MovieService {
 private title: string =""
  private APIUrl = "https://imdb8.p.rapidapi.com/title/get-coming-soon-movies"
  //private movieUrl =`https://imdb8.p.rapidapi.com/${this.title}/get-details`
  private options = {
    headers: {
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
		'X-RapidAPI-Key': '3046b7f284msh0486ec41da8456cp109559jsnfe4cb8204c6d'
    },
    
};

  constructor (private http: HttpClient) { }
  
  getMovies(): Observable<any>{
    return this.http.get<any>(this.APIUrl,this.options)
  }

  getMovieDetails(title: string): Observable<any>{
    //this.title = title;
    return this.http.get<any>(`https://imdb8.p.rapidapi.com/title/get-details?tconst=${title}`, this.options)
  }
}
