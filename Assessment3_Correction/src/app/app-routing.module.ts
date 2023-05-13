import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesModule } from './employees/employees.module';

const routes: Routes = [  
  {path:'employee',loadChildren:()=>import ('../app/employees/employees.module').then ((m)=>m.EmployeesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),EmployeesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
