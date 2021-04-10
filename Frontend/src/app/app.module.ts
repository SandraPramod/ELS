import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { NewEmployeeComponent } from './newemployee/newemployee.component';
import {EmployeeService} from './employeeservice.service';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeloggedinComponent } from './employeeloggedin/employeeloggedin.component';
import { EmploghistoryComponent } from './emploghistory/emploghistory.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NewEmployeeComponent,
    LoginComponent,
    UpdateEmployeeComponent,
    EmployeeloginComponent,
    EmployeeloggedinComponent,
    EmploghistoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,AuthGuard,EmployeeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
