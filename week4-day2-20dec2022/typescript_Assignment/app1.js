
// 1. create a tuple with  number,string,string --name it as Account
// let Account = [number, string, string];
let Account = [Number, String, String];

//2. create an array of Account
let accountsArr = [Account];

accountsArr.push([1,'manvi', 'bansal']);
accountsArr.push([2, 'leo', 'jonas']);
accountsArr.push([3, 'jj', 'aasd']);
console.log(accountsArr);

// 3. create a type SavingAccount with Account and  an unknown length array of number type
// create array of SavingAccount type with 3 values

class SavingAccount{

    constructor(account, ...arr){
        this.account = account;
        this.arr = arr;
        this.arr.flat(1);
    }
}

let sa1 = new SavingAccount(accountsArr[1],[12,34]);
let sa2 = new SavingAccount(accountsArr[2],[22,44, 10, 2]);
let sa3 = new SavingAccount(accountsArr[3],[32,34, 55]);

let savingAccounts = [SavingAccount];
savingAccounts.push(sa1);
savingAccounts.push(sa2);
savingAccounts.push(sa3);

console.log(savingAccounts);

