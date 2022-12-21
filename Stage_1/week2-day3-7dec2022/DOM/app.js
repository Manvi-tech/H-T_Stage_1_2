
//create div with border and inner text
let divEle = document.createElement('div');
divEle.style.border="1px solid black";
divEle.innerText="div's inner text";

//create h2 with text
let h2Ele = document.createElement('h2');
h2Ele.innerText="heading h2";

//append h2 to div
divEle.appendChild(h2Ele);

//append dv to body
document.body.appendChild(divEle);

//create unordered list
let ul = document.createElement('ul');
let arr = ['Home', 'Products', 'Contact', 'About']

//craete and append li to ul 
for(i=0;i<4;i++){
    console.log(ul);
    let li = document.createElement('li');
    li.innerText = arr[i];
    ul.appendChild(li);
}
console.log(ul);

//append ul to body
document.body.appendChild(ul);




// let nodes = arr.map(ele => {
//     let listItem = document.createElement('li');
//     listItem.textContent = ele;
//     return listItem;
// });

// ul.append(...nodes);