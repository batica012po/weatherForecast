import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherDetails } from './models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url= 'https://api.openweathermap.org/data/2.5/weather'
  apiKey='34c6b24dbc0a91a1fac9ce798b6bcf3a'

  constructor(private httpClient:HttpClient) { }


  getWeather(cityName:string){
    let params = new HttpParams()
    .set('q',cityName)
    .set('units', 'metric')
    .set('appid', this.apiKey)

    return this.httpClient.get(this.url, {params})
  }

}
