
// 8.Create a class Invoice with title,details,total,date ,and getters 

class Invoice{
    constructor(title, details, date, total){
        this.title = title;
        this.details = details;
        this.date = date;
        this.total = total;
    }


}

class Printer{
    print(invoice){
        console.log(`
            ${invoice.title}
            ${invoice.details}
            ${invoice.date}
            ${invoice.total}
        `)
    }
}

let printer = new Printer();
let invoice1 = new Invoice("suitcase1", "4 wheeler black",new Date(Date.now()), 534);
let invoice2 = new Invoice("suitcase2", "4 wheeler black",new Date(Date.now()), 434);
let invoice3 = new Invoice("suitcase3", "4 wheeler black",new Date(Date.now()), 334);
let invoice4 = new Invoice("suitcase4", "4 wheeler black",new Date(Date.now()), 234);

let arr=[];
arr.push(invoice1);
arr.push(invoice2);
arr.push(invoice3);
arr.push(invoice4);

arr.forEach(inv => printer.print(inv));
