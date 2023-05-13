import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';

const routes: Routes = [
  { path: 'employeelist', component: EmployeeListComponent },
  { path: '', redirectTo: '/employeelist', pathMatch: 'full' },
  { path: 'employeeform', component: EmployeeFormComponent },
  { path: 'employeeupdate/:id', component: EmployeeFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
