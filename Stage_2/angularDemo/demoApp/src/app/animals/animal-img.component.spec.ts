import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalImgComponent } from './animal-img.component';

describe('AnimalImgComponent', () => {
  let component: AnimalImgComponent;
  let fixture: ComponentFixture<AnimalImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
