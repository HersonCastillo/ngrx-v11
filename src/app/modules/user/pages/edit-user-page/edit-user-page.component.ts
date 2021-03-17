import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { editUser } from 'src/app/store/actions/user.actions';
import { getCurrentUser } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/states/app.states';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent {

  id = 0;
  user$: Observable<IUser>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<IAppState>,
  ) {
    this.activatedRoute.params.subscribe(this.onParamMap.bind(this));
  }

  onParamMap(params: Params) {
    const id = +params?.id;
    this.id = id;
    this.user$ = this.store.select(getCurrentUser, id);
  }

  onEditFormSubmit(user: IUser): void {
    this.store.dispatch(editUser({ user, id: this.id }));
  }
}
