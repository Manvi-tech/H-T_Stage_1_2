
//single param
function f1<T>(args:T):void{
    console.log(` ${typeof args} ${args}`);
}
f1<string>("hello leo");

//add
function f2<T>(arg1, arg2):T{
    return arg1+arg2;
}
f2<number>(2, 5);

//map class
class MyMap<K,V>{
    private m: Map<K,V>;

    constructor(){
        this.m = new Map<K,V>();
    }

    add(key:K, val:V){
        this.m.set(key, val);
    }

    display=()=>{
        console.log(this.m);
    }
}

let obj1 = new MyMap<number, number>();
obj1.add(2,3);
obj1.display();

let obj2 = new MyMap<string, number>();
obj2.add("manvi", 22);
obj2.display();

let obj3 = new MyMap<string, boolean>();
obj3.add("hello", true);
obj3.display();


class Person<T>{

    name:T;

    constructor(t){
        this.name=t;
    }
}
let manvi = new Person<string>('manvi');
// console.log(manvi.name);
