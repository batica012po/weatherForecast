import { Component, OnInit } from '@angular/core';
import { weatherDetails } from './models/weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.getweatherData(this.getcity)
    this.getcity=''
  }
  
  weatherDetails!: any
  getcity:string= 'Beograd'
  cityName!: any
  
  

  constructor(private weatherService:WeatherService) {}

  getCity(city: string){
    this.weatherService.getWeather(city).subscribe(data=>{
      this.cityName=data
    })
  }

  onSubmit(){
    this.getweatherData(this.getcity)
    this.getcity=''
  }

 private getweatherData(getcity:string){
  this.weatherService.getWeather(getcity).subscribe(vreme=>{this.weatherDetails=vreme})
     this.getCity(this.getcity)
 }


}




