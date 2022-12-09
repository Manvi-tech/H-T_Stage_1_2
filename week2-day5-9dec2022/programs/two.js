
//  Write a JavaScript function to move an array element from one position to another.

// Test Data :

// console.log(move([10, 20, 30, 40, 50], 0, 2));

// [20, 30, 10, 40, 50]

// console.log(move([10, 20, 30, 40, 50], -1, -2));

// [10, 20, 30, 50, 40]


let arr1 = [10, 20, 30, 40, 50];
let arr2 = [10, 20, 30, 40, 50];

function move(arr1, i, j){

    if(i<0) i= arr1.length + i;
    // console.log(i);
    if(j<0)j = arr1.length + j;
    // console.log(j);

    let ele = arr1[i];
    arr1.splice(i,1);
    arr1.splice(j, 0, ele);
    console.log(arr1);

}

move(arr1, 0, 2);
move(arr2, -1, -2);