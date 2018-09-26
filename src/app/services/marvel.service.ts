import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private BASE_URL = 'http://gateway.marvel.com';
  private API_KEY = 'dda7472e801c41cc997dc7c09e37dc0f';
  private SECRET_KEY = '0cabe4e3d80408b282d4c2817ec8107d291f10cd';

  constructor(private http: HttpClient) { }

  buildUrl(resourceUrl: string): string {
    const timestamp = new Date().getTime();
    const hash = Md5.hashStr(timestamp + this.SECRET_KEY + this.API_KEY);
    return `${ this.BASE_URL }${ resourceUrl }?apikey=${ this.API_KEY }&ts=${ timestamp }&hash=${ hash }`;
  }

  getCharacters(limit?: number, offset?: number) {
    // query params
    limit = limit ? limit : 50;
    offset = offset ? offset : 0;

    const resourceUrl = '/v1/public/characters';
    const finalUrl = `${this.buildUrl(resourceUrl)}&limit=${ limit }&offset=${ offset }`;

    // calling API
    return this.http.get(finalUrl)
      .pipe( map( (data: any) => data.data));
  }

}
