import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';

const components = [
  ButtonComponent,
  TableComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
  ],
})
export class SharedModule { }
