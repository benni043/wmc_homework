import {Component, OnInit} from '@angular/core';
import {Film} from "./film";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  films: Film[] = [];
  baseUrl: string = "https://swapi.dev/api/films";

  constructor(private httpClient: HttpClient) {
  }

  allFilm(): Observable<{results: Film[]}> {
    return this.httpClient.get<{results: Film[]}>(this.baseUrl);
  }

  ngOnInit(): void {
    this.allFilm().subscribe((res) => {
      this.films = res.results;
    })
  }

}