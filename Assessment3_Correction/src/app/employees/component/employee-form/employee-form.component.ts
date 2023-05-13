import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/employeeApi/api.service';
import { Validation } from 'src/app/shared/valid/validation';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  dataId: any;
  toUpdate: undefined | any;
  employee: FormGroup;
  submitted = false;
  employeee: {
    firstname: String;
    lastname: String;
    email: String;
    department: String;
    address: String;
    contactnumber: Number;
    description: String;
    status: any;
  }[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.employee = this.formBuilder.group(
      {
        firstname: [
          '',
          [
            Validators.required,
            Validators.maxLength(25),
            Validators.minLength(3),
          ],
        ],
        lastname: [
          '',
          [
            Validators.required,
            Validators.maxLength(25),
            Validators.minLength(3),
          ],
        ],
        department: ['', [Validators.required]],
        address: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        contactnumber: ['', [Validators.required]],
        description: [
          '',
          [
            Validators.required,
            Validators.maxLength(150),
            Validators.minLength(3),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(25),
          ],
        ],
        confirmpassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(25),
          ],
        ],
        status: ['', [Validators.required]],
      },

      {
        validators: [Validation.match('password', 'confirmpassword')],
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.employee.controls;
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: Params) => {
      let id = param['get']('id');
      this.dataId = id;
    });
    if (this.dataId) {
      this.api.fetchData(this.dataId).subscribe((data: any) => {
        this.toUpdate = data;
        this.employee.setValue({
          firstname: this.toUpdate.firstname,
          lastname: this.toUpdate.lastname,
          email: this.toUpdate.email,
          department: this.toUpdate.department,
          address: this.toUpdate.address,
          contactnumber: this.toUpdate.contactnumber,
          description: this.toUpdate.description,
          password: this.toUpdate.password,
          confirmpassword: this.toUpdate.confirmpassword,
          status: this.toUpdate.status,
        });
      });
    }
  }
  getEmployee() {
    this.api.getData().subscribe((response: any) => {
      this.employeee = response;
    });
  }
  addEmployee(form: any) {
    this.postEmployee(form.value);
    form.reset();
  }
  postEmployee(data: any) {}
  onSubmit(password:any,confirmpassword:any): void {
    this.submitted = true;
    if (this.employee.invalid) {
      if (confirmpassword.value == "") {
        return;
      }
      else if ( password.value !==confirmpassword.value) {
        alert('Enter Correct Password');
        return;
      }
      return;
    }
    if (this.dataId) {
      this.api
        .updateData(this.toUpdate.id, this.employee.value)
        .subscribe(() => {
          this.route.navigate(['/']);
        });
    } else {
      this.api.postData(this.employee.value).subscribe(() => {});
      this.getEmployee();
      this.route.navigate(['/']);
    }
  }
}
