import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location  {
  latitude: string;
  longitude: string;
}




@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor( public _http: HttpClient) { }



  getLocation() {
    return this._http.get<Location>('http://api.ipapi.com/190.46.240.165?access_key=e506c874ae7a9bebc96cc126f50bea32');
  }
}
