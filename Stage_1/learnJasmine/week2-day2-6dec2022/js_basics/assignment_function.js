
// functon defn
function subtract(a,b){
  return a-b;
}

//function expresson
let product = function(a,b){
    return a*b;
}

console.log(subtract(2,3));
console.log(product(2,3));


let cart = {
    add: function(){
        console.log("addding into cart");
    },
    edit: function(id){
        console.log(`editing the cart ${id}`);
    }
}

cart.delete = function(){
    console.log("deleting product");
}

cart.add();
cart.edit(5);
cart.delete();