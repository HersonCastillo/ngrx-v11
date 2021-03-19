import { Component, Input } from '@angular/core';
import { ITableHeaders } from 'src/app/modules/shared/interfaces/table';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-post-list-table',
  templateUrl: './post-list-table.component.html',
  styleUrls: ['./post-list-table.component.scss']
})
export class PostListTableComponent {
  @Input() posts!: IPost[];

  postTableHeaders: ITableHeaders[] = [
    {
      name: 'Post Title',
      dataIndex: 'title',
    },
    {
      name: 'Post Body',
      dataIndex: 'body',
    },
  ];
}
