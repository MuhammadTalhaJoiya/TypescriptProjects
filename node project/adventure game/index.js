import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    constructor(name) {
        this.name = name;
    }
    energyloss() {
        Player.energyplayer -= 25;
        return Player.energyplayer;
    }
}
Player.energyplayer = 100;
class Enemy {
    constructor(name) {
        this.name = name;
    }
    energyloss() {
        Enemy.energyenemy -= 25;
        return Enemy.energyenemy;
    }
}
Enemy.energyenemy = 100;
let user1 = await inquirer.prompt([
    {
        name: "player",
        type: "input",
        messege: "Enter the name of your player"
    }
]);
let user2 = await inquirer.prompt([
    {
        name: "Enemy",
        type: "input",
        messege: "Enter the name of your Opponent"
    }
]);
let p1 = new Player(user1.player);
let e1 = new Enemy(user2.Enemy);
console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(e1.name)}`);
while (Enemy.energyenemy != 0) {
    let user = await inquirer.prompt([
        {
            name: "Entermode",
            type: "list",
            choices: ["Fire", "Drink Portion", "Run for your life"]
        }
    ]);
    let randnum = Math.floor(Math.random() * 2);
    console.log(randnum);
    if (randnum == 1) {
        if (Player.energyplayer <= 100) {
            p1.energyloss();
        }
    }
    if (randnum == 0) {
        if (Player.energyplayer < 100) {
            Player.energyplayer += 25;
        }
    }
    if (user.Entermode == "Drink Portion") {
        Player.energyplayer = 100;
    }
    if (user.Entermode == "Fire") {
        Enemy.energyenemy -= 25;
    }
    console.log(`Player ${Player.energyplayer} point and Opponent ${Enemy.energyenemy}`);
    if (Enemy.energyenemy == 0) {
        console.log(`${p1.name} Wins`);
    }
    if (Player.energyplayer == 0) {
        console.log(`${e1.name} Wins`);
    }
}
