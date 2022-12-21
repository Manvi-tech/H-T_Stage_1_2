// synchronous
let obj ={
"userId": 100,
"title": "SYNC SYNC",
"body":"MANVI MANVI MANVI MANVI"
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
})
.then( (response) => response.json())
.then((json_res) => console.log(json_res))
.catch((err)=> console.log(err));

// asynchronous
let obj2 ={
    "userId": 200,
    "title": "ASYNC ASYNC",
    "body":"IVNAM IVNAM IVNAM IVNAM"
};
    
async function fetch2(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj2)
      })
      try{
        let json = await response.json();
        console.log(json);
      }catch(err){
        console.log(err);
      }
}
fetch2();