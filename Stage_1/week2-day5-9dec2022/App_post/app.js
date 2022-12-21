
// getposts: fetch async
async function displayPosts(){
  let response = await fetch("data.txt");
  let data = await response.json();
  console.log(data);
}
displayPosts();

// get posts: xhr
let btn = document.getElementById("displayPosts");
function getPosts(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    xhr.onprogress = function(){
        console.log('onprogress', xhr.readyState);
    }
    xhr.onload = function(){
        console.log('onload', xhr.readyState);
        if(this.status===200){
            console.log('posts are: ', this.responseText);
            document.getElementById("posts").innerText = this.responseText;
        }
    }
    xhr.onerror=function(){
        console.log('onload', xhr.readyState);
    }
    xhr.send();
}
btn.addEventListener('click', getPosts);

// add a post
let newPost = {
    "title": "New Post",
    "body": "This is new  post"
}

// POST: async
// async function addPost(){
//     const response = await fetch("data.txt", {
//         method: "post",
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newPost)
//       })
//       try{
//         let json = await response.json();
//         console.log(json);
//       }catch(err){
//         console.log(err);
//       }
// }
// addPost();


// import { appendFile, fstat } from 'fs';
// appendFile("data.txt", 'xbcnxb', function(err) {
//   if (err) throw err;
//   console.log('Saved!');
// });








