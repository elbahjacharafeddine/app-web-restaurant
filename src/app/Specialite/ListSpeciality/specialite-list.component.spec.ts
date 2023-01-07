import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteListComponent } from './Specialite-list.component';

describe('villeListComponent', () => {
  let component: SpecialiteListComponent;
  let fixture: ComponentFixture<SpecialiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialiteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
