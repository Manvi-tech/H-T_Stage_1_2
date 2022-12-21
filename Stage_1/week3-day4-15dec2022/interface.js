var obj = {
    color: 'pink',
    print: function () { console.log("".concat(this.color)); }
};
var objj = {
    color: 'red',
    print: function () {
        console.log("".concat(this.color));
    }
};
console.log(obj.color);
console.log(objj.color);
obj.print();
objj.print();
