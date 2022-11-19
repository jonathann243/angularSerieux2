import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   employees = [
      { "id": 1, "name": "Mukendi", "age": 25 },
     { "id": 2, "name": "Kampanga", "age": 46 },
     { "id": 3, "name": "Mardochée", "age": 9 },
   ];
   getEmployees() {
     return this.employees;
   }
  constructor() { }
}
