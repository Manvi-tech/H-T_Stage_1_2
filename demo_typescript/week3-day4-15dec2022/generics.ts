
function f1<T>(args:T):T{
    console.log(typeof args);
    return args;
}

f1<boolean>(true);


function f2<T, a, B>(arg1:T, arg2:a, arg3: B):void{
    console.log(arg1, arg2, arg3);
}

f2<number, string, boolean>(2, "leoo", false);

