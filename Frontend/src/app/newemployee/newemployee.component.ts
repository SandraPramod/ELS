import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employeemodel';
import { EmployeeService } from '../employeeservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,private router: Router){  } 
  employeeItem= {
     empId :'',
     Name:'',
     Designation:'',
     Gender:'',
     Address:'',
     Age:'',
     Salary:'',
     imageUrl:''}
 // employeeItem: IEmployee;
  ngOnInit() {
  }
  AddEmployee()
  {    
    this.employeeService.newEmployee(this.employeeItem);
    console.log("Called");    
    alert("Successfully added Employee Details");
    this.router.navigate(['/employees']);
  }
}
