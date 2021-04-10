import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmployeesComponent } from './employees/employees.component'
import { NewEmployeeComponent } from './newemployee/newemployee.component';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmploghistoryComponent } from './emploghistory/emploghistory.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add',
    canActivate: [AuthGuard],
    component: NewEmployeeComponent,
  },
  {
    path: 'update',
    component: UpdateEmployeeComponent
  },
  {
    path: 'employeelogin',
    component: EmployeeloginComponent
  },
  {
    path: 'employees/view/:id',
    component: EmploghistoryComponent
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
