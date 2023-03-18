import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, Student} from "../../product";

@Component({
  selector: 'app-change-student',
  templateUrl: './change-student.component.html',
  styleUrls: ['./change-student.component.css']
})
export class ChangeStudentComponent {
  firstName: string = "";
  lastName: string = "";
  age: number = 0;
  id: number = 0;

  change() {
    this.changeStudent.emit({firstName: this.firstName, lastName: this.lastName, age: this.age, id: this.id} as Student)
  }

  @Output() changeStudent: EventEmitter<Student> = new EventEmitter<Student>();

  @Input() availableStudents: Student[] = [];
}
