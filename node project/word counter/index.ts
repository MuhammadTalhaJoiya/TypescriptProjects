// Word Counter
// The user will enter a english paragraph and all that is needed is to just to implement counting characters and words without whitespaces.
import inquirer from "inquirer"
const user=await inquirer.prompt([
    {
        name:"paragraph",
        messege:"Enter something",
        type:"input"
    }
])
let word:number=user.paragraph.split(" ").length
if(user.paragraph.split(" ").includes("")){
    word-=1
}
console.log(word)
let senetence:Array<string>=user.paragraph.split(" ")
let charecters:number=0
for (let index = 0; index < senetence.length; index++) {
    let element = senetence[index];
    let counter:number=element.length
    charecters+=counter
}
console.log(charecters)