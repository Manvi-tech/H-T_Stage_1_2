const employee = {
    id:10,
    name:'Manvi',
    salary:10000,
    department:{
      id:20,
      name:'java fse',
      managerId:30
    },
    dateOfJoining: new Date(2020-04-10),
    getServiceYears:function(){    
      return 2022 - this.dateOfJoining.getFullYear();
    } 
  }
  let val = employee;
  
  val =employee.id;
  console.log(`employee id is : ${val}`);

  val =employee.name;
  console.log(`employee name is : ${val}`);

  val =employee.salary;
  console.log(`employee salary is : ${val}`);
  
  val =employee.dateOfJoining;
  console.log(`employee doj is : ${val}`);

  val=employee.department;
  console.log(`employee department id is : ${val.id}, department name is ${val.name},department managerId is ${val.managerId}`);
  
  val =  employee.getServiceYears();
  console.log(`employee service years is : ${val}`);
  
  const employees = [
  
     { id:1, name:'meeta',salary:23  },
     { id:11, name:'tia',salary:22},
     { id:21, name:'hemant',salary:23},
     { id:31, name:'rishi',salary:24}
  ];
  
  for(let i=0;i<employees.length;i++){
      console.log(`employee details are as : 
      id is - ${employees[i].id} , name is - ${employees[i].name}, salary is - ${employees[i].salary}`);
  }