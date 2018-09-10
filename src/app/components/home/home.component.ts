import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _marvelService: MarvelService) { }

  ngOnInit() {
    this._marvelService.getCharacters(5);
  }

}
