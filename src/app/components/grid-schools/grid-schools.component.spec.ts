import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSchoolsComponent } from './grid-schools.component';

describe('GridSchoolsComponent', () => {
  let component: GridSchoolsComponent;
  let fixture: ComponentFixture<GridSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
