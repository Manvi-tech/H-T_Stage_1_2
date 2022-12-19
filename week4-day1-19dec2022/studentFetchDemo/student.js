
 let studentMap = new Map();

class Student{

    constructor(id, name, city, clearedExam){
        this.id=id;
        this.name=name;
        this.city=city;
        this.clearedExam=clearedExam
    }
}

function add(s, ...marks){
    for (let [key, value] of studentMap) {
        if(key.id == s.id){
            let temp =[...value,...marks].flat(1);
            studentMap.set(key, temp);
            return;
        }
    }
    studentMap.set(s,[...marks].flat(1));
}


let students = [{
    "id":111,
    "name": "Amit",
    "city": "Pune",
    "clearedExam": true,
    "marks":[82, 40]
  },
  {
    "id":112,
    "name": "Tia",
    "city": "Mumbai",
    "clearedExam": true,
    "marks":[75, 20, 13]
  },
  {
    "id":113,
    "name": "Shalini",
    "city": "Pune",
    "clearedExam": true,
    "marks":[86]
   
  }

];

students.forEach(s=>{
    let obj = new Student(s.id, s.name, s.city, s.clearedExam);
    add(obj, s.marks);
});

//for a particular student obj calculate marks
function calculateMarks(s){
    for (let [key, value] of studentMap) {
        if(key.id == s.id){
            let add = value.reduce((prevVal, currEle)=> prevVal+=currEle);   
            console.log(`${s.name} 's total marks is ${add}`);
            return;
        }
    } 
}


console.log(studentMap);

//add marks to already existing student object
let obj = new Student(students[0].id, students[0].name, students[0].city, students[0].clearedExam);
add(obj,[100,20,30]);

console.log(studentMap);

//calculate sum of marks of obj
calculateMarks(obj);

//marks sum of all students
for (let [key, value] of studentMap) {
    let add = value.reduce((prevVal, currEle)=> prevVal+=currEle);   
    console.log(`${key.name} 's total marks is ${add}`);   
}