
// const {greeting,method2} = require('./app.js');
// import{greeting, method2} from './app.js';

const greeting = require("../app");
const method2 = require("../app");

describe("Greeting ",function(){

    it("should return good morning",function(){
        expect(greeting()).toEqual("good morning");
    })

});