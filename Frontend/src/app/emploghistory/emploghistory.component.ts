import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emploghistory',
  templateUrl: './emploghistory.component.html',
  styleUrls: ['./emploghistory.component.css']
})
export class EmploghistoryComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private employeeService: EmployeeService) { }

  empid = 0;
  loghistory = [];

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(data => {
      this.empid = data.id;
      this.employeeService.getLogHistory(this.empid).subscribe(data => {
        this.loghistory = data;
        console.log(this.loghistory);
      });
    });
  }

}
