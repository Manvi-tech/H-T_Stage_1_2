//single param
function f1(args) {
    console.log(` ${typeof args} ${args}`);
}
f1("hello leo");
//add
function f2(arg1, arg2) {
    return arg1 + arg2;
}
f2(2, 5);
//map class
class MyMap {
    constructor() {
        this.display = () => {
            console.log(this.m);
        };
        this.m = new Map();
    }
    add(key, val) {
        this.m.set(key, val);
    }
}
let obj1 = new MyMap();
obj1.add(2, 3);
obj1.display();
let obj2 = new MyMap();
obj2.add("manvi", 22);
obj2.display();
let obj3 = new MyMap();
obj3.add("hello", true);
obj3.display();
class Person {
    constructor(t) {
        this.name = t;
    }
}
let manvi = new Person('manvi');
// console.log(manvi.name);
