import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService){

  }

  cityName:string = 'Guwahati';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(city: string){
    this.weatherService.getWeatherData(city)
    .subscribe({
      next: (response)=>{
        this.weatherData = response;
        console.log(response);
      }
    })
  }

}

// function deg(f:any): number{
//   return (f-32)* (5/9)
// }
