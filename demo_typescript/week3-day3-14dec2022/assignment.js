var categories;
(function (categories) {
    categories["food"] = "food";
    categories["cloth"] = "cloth";
    categories["accessories"] = "accessories";
    categories["footwear"] = "footwear";
})(categories || (categories = {}));
var Product = /** @class */ (function () {
    function Product(id, name, brand, price, category) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.category = category;
    }
    return Product;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(map) {
        this.products = map;
    }
    ShoppingCart.prototype.totalPrice = function () {
        var price = 0;
        this.products.forEach(function (product) {
            console.log(product);
        });
    };
    return ShoppingCart;
}());
var mymap = new Map();
var p1 = new Product(12, 'toffee', 'eclairs', 300, categories.food);
mymap.set(p1, 1);
var cart = new ShoppingCart(mymap);
cart.totalPrice();
