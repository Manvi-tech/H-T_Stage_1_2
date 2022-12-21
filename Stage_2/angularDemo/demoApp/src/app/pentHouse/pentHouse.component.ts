import { Component } from "@angular/core";

@Component({
  selector:'pent-house',
  templateUrl:'./pentHouse.component.html',
  styleUrls:['./pentHouse.component.css']
})

export class PentHouseComponent{
   
  houseId:Number=102;
  area:String = "2000 sq";
  noOfRooms:Number = 2;
  swimmingPool: Boolean = true

}