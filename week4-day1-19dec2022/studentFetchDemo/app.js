
//get
async function fetch2(){
   try{
        let response = await fetch("./student.json");
        let data = await response.json();
        console.log(data);
   }catch(err){
        console.log(err);
   }
}
fetch2();


let obj={
    "userId": 200,
    "title": "ASYNC ASYNC",
    "body":"IVNAM IVNAM IVNAM IVNAM"
};

// post
async function addStudent(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      try{
        let json = await response.json();
        console.log(json);
      }catch(err){
        console.log(err);
      }
}
addStudent();

