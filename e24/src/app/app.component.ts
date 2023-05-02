import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "";
  description: string = "";
  releaseYear: number | undefined;
  country: string = "";
  genre: string = "";

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
