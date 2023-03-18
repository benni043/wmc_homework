import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from "../../product";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input() student: Student | undefined;

  delete() {
    this.deleteStudent.emit(this.student);
  }

  @Output() deleteStudent: EventEmitter<Student> = new EventEmitter<Student>();

  change() {
    this.changeStudent.emit({
      firstName: this.student?.firstName,
      lastName: this.student?.lastName,
      age: this.student?.age,
      id: this.student?.id
    } as Student)
  }

  @Output() changeStudent: EventEmitter<Student> = new EventEmitter<Student>();

}
