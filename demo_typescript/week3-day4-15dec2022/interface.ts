
interface Colorable{
    color:string
}

interface Printable{
    print:()=> void
}

interface DigitalPrint extends Colorable, Printable{
}

let obj :DigitalPrint={
    color:'pink',
    print:function(){console.log(`${this.color}`)}
};

let objj : DigitalPrint={
    color:'red',
    print:function(){
        console.log(`${this.color}`)
    }
}

console.log(obj.color);
console.log(objj.color);
obj.print();
objj.print();

