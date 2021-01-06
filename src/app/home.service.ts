import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private serverCall : string = "./assets/server.json";

  constructor( private _http : HttpClient){ 

  }
  fetchItems(){
    return this._http.get<any>(this.serverCall);
  }
}
