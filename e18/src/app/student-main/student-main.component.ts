import {Component} from '@angular/core';
import {StudentServiceService} from "./student-service.service";

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})

export class StudentMainComponent {

  constructor(public studentService: StudentServiceService) {
  }

}
