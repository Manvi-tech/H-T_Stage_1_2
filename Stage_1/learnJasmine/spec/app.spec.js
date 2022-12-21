const greeting = require("../src/app");
// const method2 = require("../app");

describe("testing greeting funciton",function(){
    it("test return value of greeting",function(){
        expect(greeting()).toEqual('good morning');
    });
});