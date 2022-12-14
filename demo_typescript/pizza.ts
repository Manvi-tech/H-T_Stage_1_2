 
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


 let p:Pizza;

 p={
    id:100,
    base:'Pan base',
    topping:toppings.corn,
    size:sizes.medium
 };

//  console.log(p);
display(p);