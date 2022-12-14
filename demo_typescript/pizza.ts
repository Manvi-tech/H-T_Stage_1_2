 
 enum toppings{
    cheeze,
    corn,
    onion,
    tomato
 }

 enum sizes{
    small,
    medium,
    large,
    extraLarge
 }
 
 interface Pizza { 
    id:number,  
    base: string,
    topping: toppings,
    size: sizes,

 }; 

let display=(p)=>{
    console.log('pizza ordered details');
    console.log(`id: ${p.id}`)
    console.log(`base ${p.base}`)
    console.log(`topping: ${toppings[p.topping]}`)
    console.log(`size: ${sizes[p.size]}`)
}


 let p, p2:Pizza;

 p={
    id:100,
    base:'Pan base',
    topping:toppings.corn,
    size:sizes.medium
 };
 
 p2={
    id:102,
    base:'Normal base',
    topping:toppings.cheeze,
    size:sizes.small
 };

 let pizzas:Pizza[]=[p,p2];

pizzas.forEach((pizza)=>display(pizza));
