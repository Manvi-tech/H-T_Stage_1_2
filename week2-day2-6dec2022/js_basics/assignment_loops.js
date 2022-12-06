
const employee = {
    id:10,
    name:'Manvi',
    salary:10000,
    department:{
      dept_id:20,
      dept_name:'java fse',
      dept_managerId:30
    },
    project:{
        project_id:21,
        project_title:"title",
        startDate:new Date('2021-04-22'),
        project_duration_days:34
    },
    dateOfJoining: new Date(2020-04-10),
    getServiceYears:function(){    
      return 2022 - this.dateOfJoining.getFullYear();
    } 
  }


// for in 
for(i in employee){
if(i==="project" || i==="department"){

    for(j in employee[i]){
        console.log(`${j}: ${employee[i][j]}`);
    }
}else{
    console.log(`${i}: ${employee[i]}`);
}
}