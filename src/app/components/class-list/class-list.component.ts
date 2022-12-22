import { Component, Input, OnInit } from '@angular/core';
import { SchoolClass } from 'src/app/models/School';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {
  displayedColumns: string[] = ['code', 'name', 'start', 'end', 'representative_id'];

  @Input() classes: Array<SchoolClass> = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.classes)
  }

}
