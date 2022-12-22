import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SchoolInfoComponent } from './pages/school-info/school-info.component';
import { SchoolsComponent } from './pages/schools/schools.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: 'schools/:id', component: SchoolInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
