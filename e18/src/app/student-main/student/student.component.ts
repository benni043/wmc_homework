import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, Student} from "../../product";

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
}
