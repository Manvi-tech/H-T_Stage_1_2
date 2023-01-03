import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailComponent } from './event-detail.component';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let element:HTMLElement;
  let fixture: ComponentFixture<EventDetailComponent>;
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailComponent);
    element=fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // xit('should correctly render the @Input value',()=>{
  //   component.event=
  //    {
  //     "id": 2,
  //      "name": "Angular Upgrades",
  //     "date": "3/24/2023",
  //     "time": "08:30 pm",
  //     "price": "1000.99",
  //     "imageUrl": "/assets/images/angularconnect-shield.png",
  //     "location":{
  //       "address": "1057  DT Street , ML Auditorium",
  //       "city": "Mumbai",
  //       "country": "India"
  //     },
  //     "sessions": [
  //       {
  //         "id": 1,
  //         "name": "Using Angular 4 Pipes",
  //         "presenter": "Peter  Darwin",
  //         "duration": 1,
  //         "level": "Intermediate",
  //         "abstract": "Learn angular pipes",
  //         "voters": [
  //             "bradgreen",
  //              "igorminar",
  //               "martinfowler"
  //             ]
  //         }]
  //   }

  //   let event1 =  component.event;
  //   fixture.detectChanges();
  //   let val = element.querySelector("#data")?.textContent;
  //   expect(JSON.stringify(val)).toEqual(JSON.stringify(JSON.parse(event1)));

  //   }
  // );


  // it('should render@Input message correctly',()=>{
  //   //Arrange the test data
  //     let msg = " new message from parent";
  //     component.message=msg;
  //     fixture.detectChanges();

  //      //Act
  //     const value =element.querySelector('#messageDisplay')?.textContent;

  //     //Assert
  //     expect(value).toEqual(msg);
  // })

});
