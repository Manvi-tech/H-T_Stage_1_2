class A{
    constructor(id,name){
        this.id=id;
        this.name=name;

    }

    getDetails(){
        return null;
    }
}
//B is dependent upon A , it is consuming 
//the way service object consumes dao
//B is dependent upon A
//how to test B in isolation , how to unit test

class B{
    constructor(a){
        this.a=a;
    }
    getDetails(){
        return this.a.getDetails();
    }
}

module.exports = {A,B};