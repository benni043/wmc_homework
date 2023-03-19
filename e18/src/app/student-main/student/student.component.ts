import {Component, Input} from '@angular/core';
import {Student} from "../../product";
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  constructor(public studentService: StudentServiceService) {
  }

  @Input() student: Student | undefined;

  delete() {
    this.studentService.delete(this.student!);
  }

  change() {
    this.studentService.changeStudent({
      firstName: this.student?.firstName,
      lastName: this.student?.lastName,
      age: this.student?.age,
      id: this.student?.id
    } as Student)
  }

}
