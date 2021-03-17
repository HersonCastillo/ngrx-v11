import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserPageComponent } from './list-user-page.component';

describe('ListUserPageComponent', () => {
  let component: ListUserPageComponent;
  let fixture: ComponentFixture<ListUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
