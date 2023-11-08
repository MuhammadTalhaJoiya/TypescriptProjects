// Student Management System
// This project is a simple console based Student Management System. In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the given courses. Also, you will be implementing the following operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of the student including name, id, courses enrolled and balance.This is one of the best projects to implement the Object Oriented Programming concepts.

// Create a GitHub repository for the project and submit its URL in the project submission form.


class Student{
    name:string
    id:string
    courses:string
    constructor(_name:string,_id:string,_cources:string){
        this.name=_name
        this.id=_id
        this.courses=_cources
    }
    Name(){
        console.log(this.name)
    }
}

let stud1=new Student("Talha","sad12","BCC")
console.log(stud1.name)
console.log(stud1.courses)