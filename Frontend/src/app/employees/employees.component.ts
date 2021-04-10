import { Component } from '@angular/core';
import { EmployeeService } from '../employeeservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'pm-employees',
  templateUrl:'./employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  pageTitle: string = 'Employee List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  employees=[{
    empId :'',
    Name:'',
    Designation:'',
    Gender:'',
    Address:'',
    Age:'',
    Salary:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private employeeService: EmployeeService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.employeeService.getEmployees().subscribe((data)=>{
      this.employees=JSON.parse(JSON.stringify(data));
  })
  }
 
  editEmployee(employee:any)
  {
    localStorage.setItem("editEmpId", employee._id.toString());
    this.router.navigate(['update']);

  }
  deleteEmployee(employee:any)
  {
    this.employeeService.deleteEmployee(employee._id)
      .subscribe((data) => {
        this.employees = this.employees.filter(e => e !== employee);
      })
  

  }
}
  