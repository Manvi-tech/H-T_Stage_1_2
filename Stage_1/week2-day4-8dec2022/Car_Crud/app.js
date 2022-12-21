class Emp{
    constructor(id,empname){this.id;this.empname;}
}
const empForm=document.getElementById("empForm");
const empList = document.getElementById("empList");
//creating emps array 
const emps=[];

//creating emp -- object  -- data members --id and empname
const emp={
    id:0,
empname:''
};

//calling / executing loadEventListeners --
loadEventListeners();

//on line 19 we are defining the function loadEventListeners
function loadEventListeners(){
    //whenever we refresh the page ,we want this eventhandler getEmps -this will load emps from localstorage
    document.addEventListener('DOMContentLoaded',getEmps);

    empForm.addEventListener("submit",addEmp);

}
//event handlers -- getting emps from the local storage 
function getEmps(){
console.log('in get emps')
    let emps;
    
    if(localStorage.getItem("emps")===null){
        emps=[];
    }
    else{

        emps=JSON.parse(localStorage.getItem("emps"));

    }
    emps.forEach(function(emp){

     
        let li=document.createElement("li");
    
        li.appendChild(document.createTextNode(JSON.stringify(emp)));

        const link = document.createElement('a');

        li.appendChild(link);
       
        empList.appendChild(li);
        console.log('emplist appended ..')  


    })
}

function addEmp(e){
 console.log('in add form');
    let empname = document.forms[0]["empname"];
    empname=empname.value;
    console.log(empname);
    let id = document.forms[0]["id"];
    id=id.value;

    console.log(id);
    emp.id=id;
    emp.empname=empname;

    
   console.log(emp);

   storeEmpInLocalStorage(emp);
   e.preventDefault();

}


function storeEmpInLocalStorage(emp) {
    console.log('in store function')
    let emps;
    if (localStorage.getItem("emps") === null) {
        emps = [];
    } else {
        emps = JSON.parse(localStorage.getItem("emps"));
    }
    emps.push(emp);
    localStorage.setItem("emps", JSON.stringify(emps));
    console.log('added emps to local storage')
}