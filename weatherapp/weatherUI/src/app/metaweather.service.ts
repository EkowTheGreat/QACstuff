import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetaweatherService {

  constructor(private http: HttpClient) { }

  getLocation(location){
    let link = 'https://www.metaweather.com//api/location/search/?query=';
    link = link +location;
    return this.http.get(link);
  }
  getLocationToday(id,year,month,day){
    let link = 'https://www.metaweather.com///api/location/';
    link = link +id+"/"+year+"/"+month+"/"+day+"/";
    return this.http.get(link);
  }
  
}
