
// fetch API return a promise

fetch('https://jsonplaceholder.typicode.com/users/5')
.then((msg)=>{return (msg.json())})
.then((data)=>console.log(data))
.catch((err)=>{console.log(err)});