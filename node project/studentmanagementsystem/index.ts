// class Person{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
// }
// class Student extends Person{
//     rollnumber:string
//     cources:string[]=[]
//     constructor(name:string,age:number,rollnumber:string){
//         super(name,age)
//         this.rollnumber=rollnumber
//     }
//     registerForCources(cource:string){
//         this.cources.push(cource)
//     }
// }
// let stud1=new Student("Talha",21,"22f")
// let stud2=new Student("Usman",11,"222d")
// stud2.registerForCources("CYber")
// stud1.registerForCources("BCC")
// stud1.registerForCources("Meta")
// // console.log(stud1.cources)
// class Instructor extends Person{
//     cource!:string
//     salary:number
//     constructor(name:string,age:number,salary:number){
//         super(name,age)
//         this.salary=salary
//     }
//     assigncource(cource:string){
//         this.cource=cource
//     }
// }
// let inst1=new Instructor("Joiya",21,20000)
// // let inst2=new Instructor("Kamran",22,200030)
// inst1.assigncource("CNC")
// // console.log(inst1)
// // console.log(inst1.cource)
// class Cources{
//     name:string
//     id:string
//     students:Student[]=[]
//     instructor!:Instructor
//     constructor(name:string,id:string){
//         this.name=name
//         this.id=id
//     }
//     setstudents(stud:Student){
//         this.students.push(stud)
//     }
//     setinstructor(inst:Instructor){
//         this.instructor=inst
//     }
// }
// let cource1=new Cources("IOT","1234")
// cource1.setstudents(stud1)
// cource1.setstudents(stud2)
// cource1.setinstructor(inst1)
// console.log(cource1)
// console.log(cource1.students[0])
// console.log(cource1.students[1])

class Person{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
}
class Student extends Person{
    rollnumber:string
    cources:Cources[]=[]
    constructor(name:string,age:number,rollnumber:string){
        super(name,age)
        this.rollnumber=rollnumber
    }
    registerForCources(cource:Cources){
        this.cources.push(cource)
    }
}
let stud1=new Student("Talha",21,"22f")
let stud2=new Student("Usman",11,"222d")
// stud2.registerForCources("CYber")
// stud1.registerForCources("BCC")
// stud1.registerForCources("Meta")
// console.log(stud1.cources)
class Instructor extends Person{
    cource:Cources[]=[]
    private salary:number
    constructor(name:string,age:number,salary:number){
        super(name,age)
        this.salary=salary
    }
    assigncource(cource:Cources){
        this.cource.push(cource)
    }
}
let inst1=new Instructor("Joiya",21,20000)
let inst2=new Instructor("Kamran",22,200030)
// inst1.assigncource("CNC")
// console.log(inst1)
// console.log(inst1.cource)
class Cources{
    name:string
    id:string
    students:Student[]=[]
    instructor:Instructor[]=[]
    constructor(name:string,id:string){
        this.name=name
        this.id=id
    }
    setstudents(stud:Student){
        this.students.push(stud)
        stud.registerForCources(this)
    }
    setinstructor(inst:Instructor){
        this.instructor.push(inst)
        inst.assigncource(this)
    }
}
let cource1=new Cources("IOT","1234")
let cource2=new Cources("CISSP","1234")
cource1.setstudents(stud1)
cource2.setstudents(stud1)
cource1.setstudents(stud2)
cource1.setinstructor(inst1)
cource1.setinstructor(inst2)
console.log(cource1)
// console.log(cource1.students[0].cources)
// console.log(cource1.students[1].cources)
// console.log(stud1.cources)

class Department{
    name:string
    cources:string[]=[]
    constructor(name:string){
        this.name=name
    }
    addCources(cource:string){
        this.cources.push(cource)
    }
}