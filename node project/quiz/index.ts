import inquirer from "inquirer"
import chalk from "chalk"
let apikey:string="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"

let fetchApi=async (data:string)=>{
    let userques=await fetch(data)
    let quizques=await userques.json()
    return quizques
}
let quizData=await fetchApi(apikey)
// console.log(quizData)
interface obj{
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
  }
let data:obj[]=quizData.results
console.log(data)
let marks:number=0
for (let index = 0; index < data.length; index++) {
    console.log(data[index])
    let user=await inquirer.prompt([
        {
            type:"list",
            name:"questions",
            message:data[index].question,
            choices:[...data[index].incorrect_answers,data[index].correct_answer],
        }
    ])
    if(user.questions===data[index].correct_answer){
        marks+=10
    }
}
let per:number=(marks/(data.length*10))*100
if(per>50){
    console.log(`Pass,You have got ${chalk.green(per)} percent marks`)
}
else{
    console.log(`Fail,You have got ${chalk.red(per)} percent marks`)
}
