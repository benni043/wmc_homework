import {Component, OnInit} from '@angular/core';
import {StarWarsServiceService} from "./star-wars-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public starWarsService: StarWarsServiceService) {
  }

  ngOnInit(): void {
    this.starWarsService.allFilm().subscribe((res) => {
      this.starWarsService.films = res.results;
    })
  }


  showWhichEpisode: number = -1;

  fillActorArray($event: { actors: string[]; episode: number }) {
    this.starWarsService.actors = [];

    for (let actorURL of $event.actors) {
      this.starWarsService.getActor(actorURL).subscribe(res => {
        this.starWarsService.actors.push(res);
        this.starWarsService.actors.sort((a, b) => a.lastName.localeCompare(b.lastName));
      })
    }

    this.showWhichEpisode = $event.episode;
  }

}