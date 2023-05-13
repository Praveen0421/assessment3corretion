import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filterPipe/filter.pipe';
import { EllipsisPipe } from './pipes/ellipsisPipe/ellipsis.pipe';

@NgModule({
  declarations: [FilterPipe, EllipsisPipe],
  imports: [CommonModule],
})
export class SharedModule {}
