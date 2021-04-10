import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employeemodel';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  constructor(private employeeService: EmployeeService,private _router:Router) { }

  emp_id: String = "";
  invalidId=false;
  verified=false;
  loginstatus:Boolean=true;
  employee = new IEmployee(0, "null", "null", "null", "null", 0, 0, "null", false, []);

   submit() {
    this.employeeService.authEmployee(this.emp_id).subscribe(status=>{
      if(status.message=="success"){
        this.invalidId = false;
        this.verified=true;
        this.employee=status.emp;
        console.log(this.employee.logHistory)
        this.loginstatus=this.employee.loginStatus;
        setTimeout(() => {
          this._router.navigate(['/home'])
        }, 5000);
      }
      else {
        this.verified=false;
        this.invalidId = true;
        setTimeout(() => {
          this._router.navigate(['/home'])
        }, 5000);
      }
    });
}
  ngOnInit(): void{

  }

}
