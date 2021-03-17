import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ITableActions, ITableHeaders } from 'src/app/modules/shared/interfaces/table';
import { deleteUser } from 'src/app/store/actions/user.actions';
import { IAppState } from 'src/app/store/states/app.states';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.scss']
})
export class UserListTableComponent {
  @Input() users!: IUser[];

  userTableHeaders: ITableHeaders[] = [
    {
      name: 'Name',
      dataIndex: 'name',
    },
    {
      name: 'Email',
      dataIndex: 'email'
    },
    {
      name: 'Created at',
      dataIndex: 'createdAt',
    },
  ];

  userTableActions: ITableActions<IUser>[] = [
    {
      buttonName: 'Edit',
      callback: this.editUser.bind(this),
    },
    {
      buttonName: 'Delete',
      callback: this.deleteUser.bind(this),
    },
  ];

  constructor(
    private store: Store<IAppState>,
    private router: Router,
  ) { }

  editUser({ id }: IUser) {
    this.router.navigate(['/users', 'edit', id]);
  }

  deleteUser({ id }: IUser) {
    this.store.dispatch(deleteUser({ id }));
  }
}
