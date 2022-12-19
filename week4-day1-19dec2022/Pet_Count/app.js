// 7.write a method which accepts an array and returns back the object which shows how many times each pet occurs  : input for the method: var pets=['dog','cat','dog','cat','turtle','rabbit','rabbit'] 

function countPet(pets){
   
    let obj={};


    for(pet of pets){
        if(obj.hasOwnProperty(pet)){
            obj[`${pet}`]++;
        }else{
            obj[`${pet}`]=1;
        }
    }

    return obj;
}

var pets = ['dog','cat','dog','cat','turtle','rabbit','rabbit'];
console.log(countPet(pets));

