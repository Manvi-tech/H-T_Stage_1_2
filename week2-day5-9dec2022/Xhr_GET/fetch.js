
// fetch API return a promise

fetch('https://jsonplaceholder.typicode.com/users/5')
.then((msg)=>{return (msg.json())})
.then((data)=>console.log(data))
.catch((err)=>{console.log(err)});

async function fetch2(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users/5");
    let data = await response.json();
    console.log(data);
}
