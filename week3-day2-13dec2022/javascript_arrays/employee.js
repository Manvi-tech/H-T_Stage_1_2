
var cnt =1;
class Employee{
    constructor(name, salary){
        this.name=name;
        this.salary=salary;
        this.id = cnt;
        cnt++;
    }

    getName(){
        return this.name;
    }

    getSalary(){
        return this.salary;
    }
}

let employees =[];

let form = document.getElementById("emp");

function addEmployee(e){
    
    e.preventDefault();

    let name = document.getElementById("emp_name").value;
    let salary = document.getElementById("emp_salary").value;

    let newEmployee = new Employee(name, salary);
    employees.push(newEmployee);

    let emp1 = employees.sort((a,b)=>{
        if(a.name > b.name)return 1;
        if(a.name < b.name)return -1;
        else return 0;
    })
   
    let list1 = document.getElementById("emp-list-name");
    list1.innerText='';
    
    console.log(emp1);

   emp1.forEach((emp)=>{
      let h1 = document.createElement('h1');
      h1.innerHTML=`<span>Name: ${emp.name} Salary: ${emp.salary}</span>`;
      list1.appendChild(h1);
   });
}

form.addEventListener('submit', addEmployee);