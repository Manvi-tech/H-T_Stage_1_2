function f1(args) {
    console.log(typeof args);
    return args;
}
// f1<boolean>(true);
function f2(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}
// f2<number, string, boolean>(2, "leoo", false);
var Person = /** @class */ (function () {
    function Person(t) {
        this.name = t;
    }
    return Person;
}());
var manvi = new Person('manvi');
console.log(manvi.name);
