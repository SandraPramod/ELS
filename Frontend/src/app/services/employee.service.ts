import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  authEmployee(emp_id: any) {
    return this.http.post<any>("http://localhost:3000/authemployee", { "emp_id": emp_id });
  }
  getLogHistory(emp_id: any) {
    return this.http.post<any>("http://localhost:3000/getloghistory", { "id": emp_id });
  }
}
