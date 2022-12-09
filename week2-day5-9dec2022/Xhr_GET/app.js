

let btn = document.getElementById("btn");

function loadData(){
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onprogress = function(){
        console.log('onprogress', xhr.readyState);
    }

    xhr.onload = function(){
        console.log('onload', xhr.readyState);
        if(this.status===200){
            console.log('data is: ', this.responseText);
            document.getElementById("op").innerHTML=`<h1> ${this.responseText} </h1>`;
        }
    }

    xhr.onerror=function(){
        console.log('onload', xhr.readyState);
    }

    xhr.send();
}

btn.addEventListener('click', loadData);