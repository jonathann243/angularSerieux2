import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employList:any;
  constructor( private emploList:EmployeeService) { }

  ngOnInit(): void {
    this.employList = this.emploList.getEmployees();
  }

}
