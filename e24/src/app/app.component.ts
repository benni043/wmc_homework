import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "";
  description: string = "";
  releaseYear: number = 0;
  country: string = "";
  genre: string = "";

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
