import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['enrollment', 'name', 'birthDate', 'email', 'phone', 'zipCode', 'street', 'state', 'district', 'city' ];

  @Input() students: Array<Student> = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.students)
  }

}
