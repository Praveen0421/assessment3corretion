import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/pipes/filterPipe/filter.pipe';
import { EllipsisPipe } from '../shared/pipes/ellipsisPipe/ellipsis.pipe';
import{HttpClientModule} from '@angular/common/http';
import { EmployeeRoutingModule } from './employee-routing.module';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeFormComponent, FilterPipe,EllipsisPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EmployeeRoutingModule
  ],
  exports: [EmployeeListComponent, EmployeeFormComponent],
})
export class EmployeesModule {}
