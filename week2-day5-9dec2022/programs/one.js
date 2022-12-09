
// Write a JavaScript program to find the most frequent item of an array.

// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Sample Output : a ( 5 times )

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const map=new Map();
for(let j=0;j<arr1.length;j++){

    let i=arr1[j];
    if(map.has(i)){
        map.set(i,map.get(i)+1);
    }else{
        map.set(i,1);
    }

}

console.log(map);




