
class Clock{

    constructor(){
        this.today = new Date(Date.now());
    }

    get hours(){
        return this._today.getHours();
    }

    get mins(){
        return this._today.getMinutes();
    }

    get seconds(){
        return this._today.getSeconds();
    }

    display(){
        this.today = new Date(Date.now());
        let hrs = document.getElementById("hrs");
        hrs.innerText= this.hours;
        let mins = document.getElementById("mins");
        min.innerText= this.mins;
        let secs = document.getElementById("secs");
        secs.innerText= this.secs;
    }

}; 


let c = new Clock();

setInterval(c.display, 1000);