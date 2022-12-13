

let btn = document.getElementById("btn");


btn.addEventListener('click', (e)=>{

    if(e.altKey){
        console.log("hello");
    }

    if(e.shiftKey){
        console.log('hey whats up');
    }
    
});