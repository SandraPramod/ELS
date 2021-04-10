import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeloggedinComponent } from './employeeloggedin.component';

describe('EmployeeloggedinComponent', () => {
  let component: EmployeeloggedinComponent;
  let fixture: ComponentFixture<EmployeeloggedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeloggedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeloggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
