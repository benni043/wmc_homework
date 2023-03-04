import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {

  @Input() titel: string = "";
  @Input() episode: number = 0;
  @Input() director: string = "";
  @Input() producer: string = "";
  @Input() releaseDate: string = "";

  @Input() actors: string[] = []

  @Output() actorsEvent: EventEmitter<{actors: string[], episode: number}> = new EventEmitter<{actors: string[], episode: number}>();

  emitActors() {
    this.actorsEvent.emit({actors: this.actors, episode: this.episode});
  }

}
