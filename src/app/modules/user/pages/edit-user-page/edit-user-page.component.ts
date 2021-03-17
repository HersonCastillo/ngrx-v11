import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(this.onParamMap);
  }

  onParamMap(params: Params) {
    const id = +params?.id;
  }
}
