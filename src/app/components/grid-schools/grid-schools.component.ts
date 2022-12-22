import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from 'src/app/models/School';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-grid-schools',
  templateUrl: './grid-schools.component.html',
  styleUrls: ['./grid-schools.component.scss']
})
export class GridSchoolsComponent implements OnInit {
  schools: School[];

  constructor(
    private service: SchoolService,
    private route: Router,
    ) { }
  
  ngOnInit(): void {
    this.getSchools();
  }

  getSchools(): void {
    this.service.getSchools().subscribe(res => {
      console.log(res);
      if(!res) return;

      this.schools = res;
    })
  }

  redirectToSchoolInfo(schoolId: number): void {
    this.route.navigateByUrl(`schools/${schoolId}`);
  }

  getStudentsQuantity(school: School): number{
    if(!school || !school.classes || !school.classes[0]?.students) return 0;
    return school.classes.map((c)=> c.students).reduce((a, b) => a.concat(b), []).length;
  }
}
