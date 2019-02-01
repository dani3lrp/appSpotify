import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Servise listo!!!');
  }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCIyo2zgNTBhYxDsnuCGytPGYJFYzBJnOSzPJqvKxZF8ApPgNwnyRdzdZxuWg1xM8sWvMj-SIclhnEAKeA'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
    .pipe( map( data => data['albums'].items));
  }

  getArtista ( termino: string){


    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe ( map (data => data['artists'].items ));
    
  }

}
