import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product, Student} from "../../product";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor(private httpClient: HttpClient) {
  }

  firstName: string = "";
  lastName: string = "";
  age: number = 0;

  create() {
    this.httpClient.post<Student>("http://localhost:7000/api/student", {firstName: this.firstName, lastName: this.lastName, age: this.age} as Student)
      .subscribe({
        next: res => {
          this.pushStudent.emit(res);
        },
        error: err => {
          switch (err.status) {
            case 400: {
              alert("invalid");
              break;
            }
            default:
              alert("something went wrong");
          }
        }
      })
  }

  @Output() pushStudent: EventEmitter<Student> = new EventEmitter<Student>();

}
