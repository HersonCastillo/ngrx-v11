import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormField } from 'src/app/modules/core/interfaces/form-field';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnChanges {

  @Input() user!: IUser;
  @Output() submit: EventEmitter<IUser>;

  userFormGroup: FormGroup;
  userFormFields: IFormField[] = [
    {
      formControlName: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      formControlName: 'email',
      label: 'Email Address',
      type: 'email',
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.userFormInit();
    this.submit = new EventEmitter();
  }

  ngOnChanges(): void {
    this.fillForm(this.user);
  }

  randomId(): number {
    return Math.round(Math.random() * 1E6);
  }

  fillForm(user: IUser): void {
    if (user ?? null) {
      this.userFormGroup.patchValue(user);
    }
  }

  userFormInit(): void {
    const { required, email } = Validators;
    this.userFormGroup = this.formBuilder.group({
      id: [this.randomId()],
      name: [null, [required]],
      email: [null, [required, email]],
      createdAt: [new Date().toDateString()],
    });
  }

  onSubmit(): void {
    const { valid, value } = this.userFormGroup;
    if (valid) {
      this.submit.emit(value);
    }
  }
}
