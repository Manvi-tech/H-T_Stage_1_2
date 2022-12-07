
class Employee{


    constructor(id, name, department, salary, doj){
        this.id  = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.doj = doj;
    }

    get id(){
        return this._id;
    }
    set id(val){
         this._id = val;
    }

    get name(){
        return this._name;
    }
    set name(val){
        this._name = val;
    }

    get department(){
        return this._department;
    }
    set department(val){
        this._department = val;
    }

    get salary(){
        return this._salary;
    }
    set salary(val){
        this._salary=val;
    }

    get doj(){
        return this._doj;
    }
    set doj(val){
        this._doj = val;
    }

    display = ()=>{
        console.log(`
        id is ${this.id}
        name is ${this.name}
        department is ${this.department}
        salary is ${this.salary}
        date of joining is ${this.doj}
        `);
    }
};



let emp1 = new Employee(10, "Manvi", "JAVA FSE", 100000, new Date('2022-09-15'));
emp1.display();
