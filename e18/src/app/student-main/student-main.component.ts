import {Component, OnInit} from '@angular/core';
import {Product, Student} from "../product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})

export class StudentMainComponent implements OnInit {
  students: Student[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<Student[]>("http://localhost:7000/api/student/").subscribe(res => {
      this.students = res;
    })
  }

  pushStudent($event: Student) {
    this.students.push($event);
  }

  changeStudent($event: Student) {
    this.httpClient.put<Student>("http://localhost:7000/api/student/" + $event.id, $event)
      .subscribe({
        next: () => {
          this.students[this.getStudentIndexWithID($event.id)].firstName = $event.firstName;
          this.students[this.getStudentIndexWithID($event.id)].lastName = $event.lastName;
          this.students[this.getStudentIndexWithID($event.id)].age = $event.age;
        },
        error: err => {
          switch (err.status) {
            case 400: {
              alert("invalid");
              break;
            }
            default: {
              alert("something went wrong");
              break
            }
          }
        }
      })
  }

  getStudentIndexWithID(id: number): number {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) return i;
    }
    throw new Error();
  }

  delete($event: Student) {
    this.students.splice(this.students.indexOf($event), 1);
    this.httpClient.delete("http://localhost:7000/api/student/" + $event.id).subscribe();
  }
}
