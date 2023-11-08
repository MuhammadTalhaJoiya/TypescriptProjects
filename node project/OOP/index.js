import inquirer from "inquirer";
class Student {
    constructor(name) {
        this.name = name;
    }
}
class Person {
    constructor() {
        this.studentarray = [{ name: "sss" }];
    }
    addSTudent(obj) {
        this.studentarray.push(obj);
    }
}
let abc = new Person();
let callfunction = async () => {
    do {
        let user = await inquirer.prompt([
            {
                type: "list",
                name: "who",
                choices: ["Khud sy", "Student"],
                message: "Ap kis sy baat krna chahty hain?"
            }
        ]);
        if (user.who === "Khud sy") {
            console.log("Assalam O Alaikum,Kya ha hain?");
            console.log("mai bhi theek hon");
        }
        if (user.who === "Student") {
            let user1 = await inquirer.prompt([
                {
                    type: "input",
                    name: "studentname",
                    message: "AP ko kis student sy baat krni hai"
                }
            ]);
            let stu = abc.studentarray.find((val) => {
                return val.name === user1.studentname;
            });
            // console.log(stu)
            if (!stu) {
                let name = new Student(user1.studentname);
                abc.addSTudent(name);
                console.log(`Hello I am ${name.name},Aur bhai kya chl raha hai?,kesy yad krlia ap ny mujhy?`);
                // console.log(abc)
            }
            else {
                console.log(`Hello I am ${stu.name},Aur bhai kya chl raha hai?,kesy yad krlia ap ny mujhy........................?`);
                // console.log(abc)
            }
        }
    } while (true);
};
callfunction();
// let a:string[]=["b","v","f","e"]
// let y=a.find((val)=>{
//     return val==="v"
// })
// console.log(y)
