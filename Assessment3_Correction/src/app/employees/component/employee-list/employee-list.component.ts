import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/employeeApi/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  search: string = '';
  employee: {
    id: Number;
    firstname: String;
    lastname: String;
    email: String;
    department: String;
    address: String;
    contactnumber: Number;
    description: String;
    status: String;
  }[] = [];
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.getEmployee();
  }
  getEmployee() {
    this.api.getData().subscribe((response: any) => {
      this.employee = response;
    });
  }
  delete(id: Number) {
    this.api.deleteData(id).subscribe(() => {
      this.getEmployee();
    });
  }
}
