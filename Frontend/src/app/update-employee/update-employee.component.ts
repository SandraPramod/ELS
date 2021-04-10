import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employeeservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeItem= {
    empId :'',
    Name:'',
    Designation:'',
    Gender:'',
    Address:'',
    Age:'',
    Salary:'',
    imageUrl:''}
 
  constructor(private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    let empId = localStorage.getItem("editEmpId");
    this.employeeService.getEmployee(empId).subscribe((data)=>{
      this.employeeItem=JSON.parse(JSON.stringify(data));
  })
  }
  editEmployee()
  {    
    this.employeeService.editEmployee(this.employeeItem);   
    alert("Successfully updated Employee Details");
    this.router.navigate(['/employees']);
  }

}
