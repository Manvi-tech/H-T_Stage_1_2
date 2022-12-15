
// enum categories{
//     food='food',
//     cloth='cloth',
//     accessories='accessories',
//     footwear='footwear'
// }

// class Product{
//     id:number;
//     name:string;
//     brand:string;
//     price:number;
//     category: categories

//     constructor(id, name, brand, price, category){
//         this.id=id;
//         this.name=name;
//         this.brand=brand;
//         this.price=price;
//         this.category=category;
//     }

// }


// class ShoppingCart{
//     products: Map<Product, number>;

//     constructor(map:Map<Product, number>){
//         this.products = map;
//     }

//     totalPrice(){
//         let price=0;
//         this.products.forEach(product=>{
//             console.log(product);
//         })
//     }
// }

// let mymap= new Map();

// let p1 = new Product(12, 'toffee', 'eclairs', 300, categories.food);
// mymap.set(p1, 1);

// let cart = new ShoppingCart(mymap);
// cart.totalPrice();