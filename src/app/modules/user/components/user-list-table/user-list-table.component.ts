import { Component } from '@angular/core';
import { ITableActions, ITableHeaders } from 'src/app/modules/shared/interfaces/table';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.scss']
})
export class UserListTableComponent {
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

  users: IUser[] = [
    {
      id: 1,
      name: 'Herson Castillo',
      email: 'email@something.com',
      createdAt: new Date().toDateString(),
    },
    {
      id: 2,
      name: 'John Paul',
      email: 'email2@something.com',
      createdAt: new Date().toDateString(),
    },
    {
      id: 3,
      name: 'Selena Carley',
      email: 'email3@something.com',
      createdAt: new Date(1999, 30, 1).toDateString(),
    },
  ];

  editUser(user: IUser) {
    console.log(user);
  }

  deleteUser({ id }: IUser) {
    console.log(id);
  }
}
