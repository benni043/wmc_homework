import { Injectable } from '@angular/core';
import {Actor, Film} from "./film";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StarWarsServiceService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "https://swapi.dev/api/films";
  films: Film[] = [];

  allFilm(): Observable<{results: Film[]}> {
    return this.httpClient.get<{results: Film[]}>(this.baseUrl);
  }

  getFilmByEpisode(episode: number): Film {
    for (let film of this.films) {
      if(film.episode_id === episode) return film;
    }

    throw new Error();
  }

  actors: Actor[] = [];
  getActor(actorURL: string): Observable<Actor> {
    return this.httpClient.get<Actor>(actorURL);
  }

}
