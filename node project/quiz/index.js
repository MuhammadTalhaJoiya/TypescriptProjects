import inquirer from "inquirer";
import chalk from "chalk";
let apikey = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
let fetchApi = async (data) => {
    let userques = await fetch(data);
    let quizques = await userques.json();
    return quizques;
};
let quizData = await fetchApi(apikey);
let data = quizData.results;
console.log(data);
let marks = 0;
for (let index = 0; index < data.length; index++) {
    console.log(data[index]);
    let user = await inquirer.prompt([
        {
            type: "list",
            name: "questions",
            message: data[index].question,
            choices: [...data[index].incorrect_answers, data[index].correct_answer],
        }
    ]);
    if (user.questions === data[index].correct_answer) {
        marks += 10;
    }
}
let per = (marks / (data.length * 10)) * 100;
if (per > 50) {
    console.log(`Pass,You have got ${chalk.green(per)} percent marks`);
}
else {
    console.log(`Fail,You have got ${chalk.red(per)} percent marks`);
}
