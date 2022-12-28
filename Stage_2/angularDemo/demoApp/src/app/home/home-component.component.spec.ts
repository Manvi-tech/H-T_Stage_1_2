import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponentComponent } from './home-component.component';

describe('HomeComponentComponent', () => {
  let component: HomeComponentComponent;
  let fixture: ComponentFixture<HomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('page title testing', ()=>{
     
     component.pageTitle="new title";
     fixture.detectChanges();

     const rootEle:DebugElement = fixture.debugElement;

     const h1 = rootEle.query(By.css('#title'));
 
     const h1Element:HTMLElement = h1.nativeElement;
 
     expect(h1Element.textContent).toEqual("title"); 
   
  })

});
