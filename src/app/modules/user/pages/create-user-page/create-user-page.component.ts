import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/store/actions/user.actions';
import { IAppState } from 'src/app/store/states/app.states';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent {
  constructor(private store: Store<IAppState>) { }

  onUserFormSubmit(user: IUser): void {
    this.store.dispatch(addUser({ user }));
  }
}
