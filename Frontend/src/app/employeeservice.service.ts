import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  item= {
    empId :'',
    Name:'',
    Designation:'',
    Gender:'',
    Address:'',
    Age:'',
    Salary:'',
    imageUrl:''}
  constructor( private http:HttpClient) { }
  getEmployee(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getEmployees(){
    return this.http.get("http://localhost:3000/employees");
  }

  newEmployee(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"employee":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteEmployee(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editEmployee(employee:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",employee)
    .subscribe(data =>{console.log(data)})
  }
}
