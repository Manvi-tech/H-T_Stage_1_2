

let evs = [];
let brands = ['nexon', 'thar', 'baleno', 'creta', 'brezza'];
let dealers = ['tata', 'mahindra', 'maruti', 'hyundai', 'maruti'];
let prices = [1230000, 124000, 1250000, 12560000, 125700];
let batteryLife=[100, 200, 300, 400, 500];


for(i=1;i<=5;i++){
    let obj = new ElectricVehicle(i*10, brands[i-1],dealers[i-1],  prices[i-1], batteryLife[i-1]);
    evs.push(obj);
}

console.log(evs);

//last delete
evs.pop();
console.log("brezza popped: ", evs);

//start delete
evs.shift();
console.log("nexon popped: ", evs);

//insert at start
evs.unshift(new ElectricVehicle(40, brands[4],dealers[4],  prices[4], batteryLife[4]))
console.log("brezza pushed at start: ", evs);

//insert at end
evs.unshift(new ElectricVehicle(10, brands[0],dealers[0],  prices[0], batteryLife[0]))
console.log("nexon pushed at end: ", evs);

//splice
evs.splice(2,2);
console.log("2 cars removed");



