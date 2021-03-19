import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListTableComponent } from './post-list-table.component';

describe('PostListTableComponent', () => {
  let component: PostListTableComponent;
  let fixture: ComponentFixture<PostListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
