import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploghistoryComponent } from './emploghistory.component';

describe('EmploghistoryComponent', () => {
  let component: EmploghistoryComponent;
  let fixture: ComponentFixture<EmploghistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploghistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
