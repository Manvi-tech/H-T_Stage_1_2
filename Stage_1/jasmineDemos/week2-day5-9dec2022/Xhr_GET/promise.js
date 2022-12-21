

let p = new Promise((resolve, reject)=>{
    const op = document.getElementById('op');

    if(op !== null){
        resolve('dv with id op exists');
    }
    else{
        reject('op doesnt exists');
    }

});

p.then((msg)=>console.log(`resolved: ${msg}`))
 .catch(err=>{console.log(err)});