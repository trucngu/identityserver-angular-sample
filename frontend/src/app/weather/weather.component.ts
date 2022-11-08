import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Weather} from "./weather"
import * as dayjs from "dayjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {

  model: Weather[] = []

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<Weather[]>('https://localhost:7220/api/weatherforecast')
      .subscribe(data => {
        this.model = data;
      });
  }

  formatDate(date: Date) {
    return dayjs(date).format('DD/MMM/YYYY');
  }
}
