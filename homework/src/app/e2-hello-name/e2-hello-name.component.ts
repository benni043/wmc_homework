import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e2-hello-name',
  templateUrl: './e2-hello-name.component.html',
  styleUrls: ['./e2-hello-name.component.css']
})
export class E2HelloNameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
