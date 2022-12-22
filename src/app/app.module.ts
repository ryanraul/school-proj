import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared/shared-material.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { GridSchoolsComponent } from './components/grid-schools/grid-schools.component';
import { SchoolInfoComponent } from './pages/school-info/school-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardTabsComponent } from './components/card-tabs/card-tabs.component';
import { ClassFormComponent } from './components/forms-modal/class-form/class-form.component';
import { StudentFormComponent } from './components/forms-modal/student-form/student-form.component';
import { ApiService } from './shared/services/api.service';
import { SchoolService } from './services/school.service';
import { HttpClientModule } from '@angular/common/http';
import { ClassListComponent } from './components/class-list/class-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { NgxMaskModule } from 'ngx-mask';
import { SchoolFormComponent } from './components/forms-modal/school-form/school-form.component';
import { ExternalService } from './services/external.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SchoolsComponent,
    GridSchoolsComponent,
    SchoolInfoComponent,
    CardTabsComponent,
    ClassFormComponent,
    StudentFormComponent,
    ClassListComponent,
    StudentListComponent,
    SchoolFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedMaterialModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [ 
    ApiService, 
    SchoolService,
    ExternalService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
