// Currency Converter
// The TypeScript console app is used to convert currencies: the users enter a certain amount of money in one currency and set the currency they want to check the monetary value of.
import inquirer from "inquirer";
const user = await inquirer.prompt([
    {
        name: "currencyname",
        type: "rawlist",
        message: "Enter the currency you want to convert into",
        choices: ["USDT", "Euro", "Pound", "Saudi Riya"],
    },
    {
        name: "cash",
        type: "number",
        message: "Enter the amount"
    },
]);
// const dollar=(num:number):number=>{
//     return num*279
// }
if (user.currencyname === "USDT") {
    console.log(user.cash * 279);
}
else if (user.currencyname === "Euro") {
    console.log(user.cash * 294);
}
else if (user.currencyname === "Pound") {
    console.log(user.cash * 340.46);
}
else if (user.currencyname === "Saudi Riya") {
    console.log(user.cash * 74.39);
}
