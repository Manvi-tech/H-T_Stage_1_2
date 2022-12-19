
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
            studentMap.set(key, [...value, ...marks]);
            return;
        }
    }
    studentMap.set(s, marks);
    // if(studentMap.has(s)){
    //     studentMap[s].add(marks);
    // }
    // else{
    //     studentMap.set(s, marks);
    // }
}


let students = [{
    "id":111,
    "name": "Amit",
    "city": "Pune",
    "clearedExam": true,
    "marks":[82]
  },
  {
    "id":112,
    "name": "Tia",
    "city": "Mumbai",
    "clearedExam": true,
    "marks":[75]
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

console.log(studentMap);

//add marks to already existing student object
let obj = new Student(students[2].id, students[2].name, students[2].city, students[2].clearedExam);
add(obj,[100,20,30]);

console.log(studentMap);