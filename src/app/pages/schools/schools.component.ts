import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ClassFormComponent } from 'src/app/components/forms-modal/class-form/class-form.component';
import { SchoolFormComponent } from 'src/app/components/forms-modal/school-form/school-form.component';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {
  
  schoolId: number;

  constructor(
    private _dialog: MatDialog,
    private _service: SchoolService,
  ) { }

  ngOnInit(): void {
  }

  openSchoolFormModal() {
    const dialogRef = this._dialog.open(SchoolFormComponent, {
      data: {
        schoolId: this.schoolId,
      }
    });

    dialogRef.afterClosed().subscribe(
      res => res
    );
  }

}
