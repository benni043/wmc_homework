import {Component, Input} from '@angular/core';

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

}
