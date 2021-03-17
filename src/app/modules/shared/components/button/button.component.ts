import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonTypes = 'button' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ButtonTypes = 'button';
  @Output() onclick: EventEmitter<MouseEvent> = new EventEmitter();
}
