import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  firstname: string = "";
  lastname: string = "";
  output: string = "";

  error : boolean = false;

  sayHello() {
    if (this.firstname !== "" && this.lastname !== "") {
      this.output = `Hello ${this.firstname} ${this.lastname}`;
      this.error = false;
    } else {
      this.output = "please enter firstname and lastname";
      this.error = true;
    }

    this.firstname = "";
    this.lastname = "";
  }
}
