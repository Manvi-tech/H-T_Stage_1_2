var toppings;
(function (toppings) {
    toppings[toppings["cheeze"] = 0] = "cheeze";
    toppings[toppings["corn"] = 1] = "corn";
    toppings[toppings["onion"] = 2] = "onion";
    toppings[toppings["tomato"] = 3] = "tomato";
})(toppings || (toppings = {}));
var sizes;
(function (sizes) {
    sizes[sizes["small"] = 0] = "small";
    sizes[sizes["medium"] = 1] = "medium";
    sizes[sizes["large"] = 2] = "large";
    sizes[sizes["extraLarge"] = 3] = "extraLarge";
})(sizes || (sizes = {}));
;
var display = function (p) {
    console.log('pizza ordered details');
    console.log("id: ".concat(p.id));
    console.log("base ".concat(p.base));
    console.log("topping: ".concat(toppings[p.topping]));
    console.log("size: ".concat(sizes[p.size]));
};
var p;
p = {
    id: 100,
    base: 'Pan base',
    topping: toppings.corn,
    size: sizes.medium
};
//  console.log(p);
display(p);
