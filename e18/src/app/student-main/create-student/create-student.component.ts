import {Component} from '@angular/core';
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor(public studentService: StudentServiceService) {
  }

  firstName: string = "";
  lastName: string = "";
  age: number = 0;

  create(): void {
    this.studentService.create({firstName: this.firstName, lastName: this.lastName, age: this.age});
  }

}
