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
  
  
  
//   const people = [
  
//      { name:'meeta',age:23  },
//      {name:'tia',age:22},
//      {name:'hemant',age:23},
//      {name:'rishi',age:24}
//   ];
  
//   for(let i=0;i<people.length;i++){
  
//       console.log(`Person details are as : ${people[i].name} ${people[i].age}`);
//   }