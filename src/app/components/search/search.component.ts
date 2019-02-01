import { SpotifyService } from 'src/app/services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  loading: boolean;
  artistas: any[] = [];

  constructor(private spotify: SpotifyService) { }


  buscar(termino: string){
    this.loading = true;
    console.log(termino);
    this.spotify.getArtista( termino )
    .subscribe( (data : any) => {
      this.artistas = data;
      this.loading = false;
    });
  }

}
