import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeArrayComponent } from './employees-array.component';

describe('EmployeesArrayComponent', () => {
  let component: EmployeeArrayComponent;
  let fixture: ComponentFixture<EmployeeArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
