import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChldComponent } from './chld.component';

describe('ChldComponent', () => {
  let component: ChldComponent;
  let fixture: ComponentFixture<ChldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
