import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];

  constructor(private _marvelService: MarvelService) {  }

  ngOnInit() {

    this._marvelService.getCharacters(20, 100)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.characters = data.data.results;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
