class Product{
   constructor(id,name,price){
    this.id=id;
    this.name=name;
    this.price=price;
   }

}
class ProductDAO{
    //dao is doing the low level talking to db or persistence mechanism

    addProduct=(p)=>{console.log('dao talking to db to insert product');}
    updateProduct=(p)=>{console.log('update happening')};
}

class ProductService{
 //service is dependent upon dao
 //since service has dependency upon dao ,we dont want to actually hit upon the db layer

 //spy or stub -- we can test service in isolation 
 //we are isolating service from its dependency
 //we have to mock dao layer

    constructor(dao){
        this.dao=dao;
    }
    addProduct(p){
        
        return null;
    }
  
    updateProduct(p){
        return null;
    }
    
}



module.exports=[Product,ProductService];