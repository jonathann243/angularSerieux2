import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employList: any;

  constructor(private emploList:EmployeeService) { }

  ngOnInit(): void {
    this.employList = this.emploList.getEmployees();
  }

}
