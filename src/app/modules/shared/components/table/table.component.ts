import { Component, Input } from '@angular/core';
import { ITableActions, ITableDataset, ITableHeaders } from '../../interfaces/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() headers!: ITableHeaders[];
  @Input() dataset!: ITableDataset<unknown>;
  @Input() actions!: ITableActions<unknown>[];
}
