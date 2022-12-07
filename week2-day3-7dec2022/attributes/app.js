
// change bg color on mouse over
let color = ["red", "yellow", "green", "blue", "orange"];
let i=0;
document.querySelector("body").addEventListener("mouseover", function () {
    document.querySelector("body").style.backgroundColor = color[i];
    i++;
    if(i==5)i=0;
})

// printing input entered
let inp = document.getElementById("inp");
inp.addEventListener('keypress',(event)=> {
    let x = event.key;
    console.log(`The pressed key was: ${x}`);
});



let div = document.getElementById("div");
let cnt =0;
//before
console.log(div.className);
div.className += " slide";
div.className += " bg-blue";
//after adding class
console.log(div.className);


div.onclick = function(){
   
    cnt = cnt+1;
    div.innerText = `clicked ${cnt} times`;

    if(div.className.includes(" bg-blue")){
       div.classList.remove("bg-blue");
       div.className += " bg-red";
       div.classList.remove("slide");
       div.className += " slide-back";

    }
    else{
        div.classList.remove("bg-red");
        div.className += " bg-blue";
        div.classList.remove("slide-back");
        div.className += " slide";
    }

        
}
