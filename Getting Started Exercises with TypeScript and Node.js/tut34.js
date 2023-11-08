// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizza = ["Peporoni", "Fajita", "Chicken Tikka"];
for (let index = 0; index < pizza.length; index++) {
    const element = pizza[index];
    console.log(element);
    console.log(`I like ${pizza[index]} pizza`);
}
console.log(`Pizza toppings are also packed with a compound called glutamate, which can be found in the tomatoes, cheese, pepperoni and sausage. When glutamate hits our tongues, it tells our brains to get excited – and to crave more of it.I really love pizza!`);
export {};
