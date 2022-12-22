import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemTab } from 'src/app/components/card-tabs/card-tabs.component';
import { ClassFormComponent } from 'src/app/components/forms-modal/class-form/class-form.component';
import { StudentFormComponent } from 'src/app/components/forms-modal/student-form/student-form.component';
import { School } from 'src/app/models/School';
import { Student } from 'src/app/models/Student';
import { SchoolService } from 'src/app/services/school.service';


@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.scss']
})
export class SchoolInfoComponent implements OnInit {
  
  itensTab: Array<ItemTab> = [ 
    { id: 1, titulo: 'Classes', url: 'home' }, 
    { id: 2, titulo: 'Students', url: 'registro' },
  ];
  tabAtual= 1;

  schoolId: number;
  studentId: number;

  school: School;

  constructor(
    private _dialog: MatDialog,
    private route: ActivatedRoute,
    private _service: SchoolService,
  ) { }

  ngOnInit(): void {
    this.schoolId = this.route.snapshot.params.id;
    if(this.schoolId)
      this.getSchool();
  }

  getSchool() {
    this._service.getSchoolById(this.schoolId).subscribe(res => {
      console.log(res);
      if(!res) return;

      this.school = res;
    })
  }

  alterarTab(tabId) {
    this.tabAtual = tabId;
  }

  openClassFormModal() {
    const dialogRef = this._dialog.open(ClassFormComponent, {
      data: {
        schoolId: this.schoolId,
      }
    });

    dialogRef.afterClosed().subscribe(
      res => res
    );
  }

  openStudentFormModal() {
    const dialogRef = this._dialog.open(StudentFormComponent, {
      data: {
        studentId: this.studentId,
      }
    });

    dialogRef.afterClosed().subscribe(
      res => res
    );
  }

  getStudents(): Array<Student> {
    if(!this.school || !this.school.classes || !this.school.classes[0]?.students) return [];
    return this.school.classes.map((c)=> c.students).reduce((a, b) => a.concat(b), []);
  }

}
