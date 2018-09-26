import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];
  limit = 20;
  page = 1;
  total = 0;

  constructor(private _marvelService: MarvelService) {  }

  ngOnInit() {
    this.showCharacters();
  }

  showCharacters() {
    const offset = (this.page - 1) * this.limit;
    this._marvelService.getCharacters(this.limit, offset)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.characters = data.results;
          this.total = data.total;
        },
        (error) => {
          console.log(error);
        }
    );
  }

  goNext() {
    this.page++;
    this.showCharacters();
  }

  goPrevious() {
    this.page++;
    this.showCharacters();
  }

  goPage(n: number) {
    this.page = n;
    this.showCharacters();
  }

}
