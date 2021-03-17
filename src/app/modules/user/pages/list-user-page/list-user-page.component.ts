import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsersList } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/states/app.states';

@Component({
  selector: 'app-list-user-page',
  templateUrl: './list-user-page.component.html',
  styleUrls: ['./list-user-page.component.scss']
})
export class ListUserPageComponent {

  users$ = this.store.select(getUsersList);

  constructor(private store: Store<IAppState>) { }
}
