import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {

  @Input() items: any[] = [];

  constructor() { }

  verArtista( item: any ){
    console.log( item );

    let artistaId;

    if ( item.type === 'artist' ){
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id;
    }

    console.log('artistaId');
  }

}
