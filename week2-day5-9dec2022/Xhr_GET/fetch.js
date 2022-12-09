

fetch('https://jsonplaceholder.typicode.com/users/5')
.then((msg)=>{console.log(msg.json())})
.catch((err)=>{console.log(err)});