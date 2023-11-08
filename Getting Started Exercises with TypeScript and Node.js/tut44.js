// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
const funcSan = (...a) => {
    console.log("make a sandwich with following items");
    a.forEach((val) => {
        console.log(`-${val}`);
    });
};
funcSan("chicken", "Ketchup", "Spices");
funcSan("Fish", "Cheese", "Sause");
funcSan("Beef", "Ketchup", "Mayo");
export {};
