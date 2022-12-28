import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EventListComponent } from './event-list.component';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventListComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//this test wont execute:exempted
  xit('input eventsList 0th event testing', ()=>{
      
    let event = component.eventsList[0];

    console.log(event);

    fixture.detectChanges();

    expect(event).toEqual(
      {
          "id":1,
          "name":"enva",
          "date": "23/12/2022",
          "time":"08:30 am",
          "price":102,
          "imageUrl":"../assets/images/dog1.jpg",
          "location":{
              "address":"123",
              "city":"Delhi",
              "country":"India"
          },
          "sessions":[
              {
                  "id":10,
                  "name":"AI",
                  "presentor":"Manvi",
                  "duration":"",
                  "level":10,
                  "voters":["leo", "snoppy", "tufffy"]
              },
              {
                  "id":11,
                  "name":"",
                  "presentor":"Ivnam",
                  "duration":"",
                  "level":11,
                  "voters":["leo", "snoppy", "tufffy"]
              }
          ]
      }
    );
    
  });

  it('input eventsList 0th event testing', ()=>{

    component.message='hello';

    fixture.detectChanges();

    const rootEle:DebugElement = fixture.debugElement;

     const h1 = rootEle.query(By.css('#input'));
 
     const h1Element:HTMLElement = h1.nativeElement;
 
     expect(h1Element.textContent).toEqual('hellopp'); 

  });
  

});
