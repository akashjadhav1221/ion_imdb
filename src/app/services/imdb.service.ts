import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

 
@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  private baseUrl = 'http://www.omdbapi.com/?apikey=32a3ca80&'

  constructor(public http: HttpClient) { }

  search(title: string, type?: string){
  let url = this.baseUrl + 's=' + encodeURI(title) + '&type=' + type;
  console.log(url);
   return this.http.get(url);
  }

  getDetails(id: string){
    return this.http.get(this.baseUrl + 'i=' + id + '&plot=full');
  }
}
