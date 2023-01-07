import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpecialiteComponent } from './create-Specialite.component';

describe('CreateSpecialiteComponent', () => {
  let component: CreateSpecialiteComponent;
  let fixture: ComponentFixture<CreateSpecialiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpecialiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
