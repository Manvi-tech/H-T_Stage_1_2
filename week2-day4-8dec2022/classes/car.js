class Car{
  
    constructor(id,model,dealer,price){

        this.id=id;
        this.model=model;
        this.dealer=dealer;
        this.price=price;
    }
    get id(){
        return this._id;
    }
    set id(val){
     this._id =val;

    }
   
    get brand(){
      return this._brand;
    }
    set brand(val){

     this._brand =val;
    }
    disp(){
        console.log(`${this.id} ${this.price}`);
    }

}

class ElectricVehicle extends Car{

   constructor(id, brand,dealer,price,batteryLife){
    // console.log('in electric vehicle constructor');
    super(id,brand,dealer,price);
    this.batteryLife =batteryLife;

   }

   disp(){
    console.log('in disp method');
    super.disp();
    console.log(this.batteryLife);
   }
}

let cnt=1; // for id generaton of car
let carsArray =[];

let form = document.forms[0];
const carList = document.getElementById("carList");
//creating cars array 
const cars=[];

loadListeners();

function addCar(e){
    e.preventDefault();
    let car_name = form["name"];
    let car_dealer = form["dealer"];
    let car_price = form["price"];
    let car_batteryLife = form["batteryLife"];

    let newCar=new ElectricVehicle(
        cnt, car_name.value, car_dealer.value, car_price.value, car_batteryLife.value);
    carsArray.push(newCar);

    storeCarInLocalStorage(newCar);

    cnt++;

    console.log(carsArray);
}

function storeCarInLocalStorage(car) {
    console.log('in store function')
    let cars;
    if (localStorage.getItem("cars") === null) {
        cars = [];
    } else {
        cars = JSON.parse(localStorage.getItem("cars"));
    }
    cars.push(car);
    localStorage.setItem("cars", JSON.stringify(cars));
    console.log('added cars to local storage')
}

function getCars(){
    console.log('in get cars')
        let cars;
        
        if(localStorage.getItem("cars")===null){
            cars=[];
        }
        else{
            cars=JSON.parse(localStorage.getItem("cars"));
        }

        cars.forEach(function(car){
    
            let li = document.createElement("li");
        
            li.appendChild(document.createTextNode(JSON.stringify(car)));
    
            carList.appendChild(li);
            console.log('carlist appended ..')  
    
        })

    }
function loadListeners(){
    document.addEventListener('DOMContentLoaded',getCars);
    form.addEventListener('submit', addCar);
}





// let evs = [];
// let brands = ['nexon', 'thar', 'baleno', 'creta', 'brezza'];
// let dealers = ['tata', 'mahindra', 'maruti', 'hyundai', 'maruti'];
// let prices = [1230000, 124000, 1250000, 12560000, 125700];
// let batteryLife=[100, 200, 300, 400, 500];


// for(i=1;i<=5;i++){
//     let obj = new ElectricVehicle(i*10, brands[i-1],dealers[i-1],  prices[i-1], batteryLife[i-1]);
//     evs.push(obj);
// }

// console.log(evs);

//last delete
// evs.pop();
// console.log("brezza popped: ", evs);

//start delete
// evs.shift();
// console.log("nexon popped: ", evs);

//insert at start
// evs.unshift(new ElectricVehicle(40, brands[4],dealers[4],  prices[4], batteryLife[4]))
// console.log("brezza pushed at start: ", evs);

//insert at end
// evs.unshift(new ElectricVehicle(10, brands[0],dealers[0],  prices[0], batteryLife[0]))
// console.log("nexon pushed at end: ", evs);

//splice
// evs.splice(2,2);
// console.log("2 cars removed");



