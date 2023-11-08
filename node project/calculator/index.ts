import inquirer from "inquirer";
import { div ,sub,add,mul} from "./cal.js";
import chalk from "chalk";
let loop:boolean;
while (loop=true) {
    const user=await inquirer.prompt([
        {
            type: 'rawlist', // Use rawlist type for displaying choices
            name: 'operation',
            message: 'Select your Arithmatic operation:',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
        {
            name: "num1",
            message: "Enter the num1",
            type: "number",
        },
        {
            name: "num2",
            message: "Enter the num2",
            type: "number",
        },
        {
            type: 'rawlist', // Use rawlist type for displaying choices
            name: 'userbool',
            message: 'Do you want to continue?',
            choices: ["yes","no"]
        }
        
    ]);
    
    
    if(user.operation==="Addition" && user.userbool==="yes"){
        console.log(add(user.num1,user.num2))

    }
    else if(user.operation==="Subtraction" && user.userbool==="yes"){
        console.log(sub(user.num1,user.num2))
    }
    else if(user.operation==="Division" && user.userbool==="yes"){
        console.log(chalk.green(div(user.num1,user.num2)))
    }
    else if(user.operation==="Multiplication" && user.userbool==="yes"){
        console.log(mul(user.num1,user.num2))
    }
    else{
        break
    }
    
}
