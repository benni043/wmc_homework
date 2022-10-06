import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firstproject';
  url = "https://www.htlstp.ac.at/logo";
  state2 = false;
  htmlComponent = "<div>Hi</div>";



  foo() {
    this.title = "hugo";
  }

}
