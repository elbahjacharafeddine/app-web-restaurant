import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecialitesComponent } from './update-specialites.component';

describe('UpdateSpecialiteComponent', () => {
  let component: UpdateSpecialitesComponent;
  let fixture: ComponentFixture<UpdateSpecialitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSpecialitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSpecialitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
