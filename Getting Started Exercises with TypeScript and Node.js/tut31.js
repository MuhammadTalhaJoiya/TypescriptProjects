// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let arrayuser = ["admin", "Talha", "usman", "ALi", "Umar"];
let counter = 0;
while (counter < arrayuser.length) {
    if (arrayuser.length !== 0) {
        if (arrayuser[counter].toLowerCase() === "admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${arrayuser[counter].toUpperCase()}, thank you for logging in again.`);
        }
    }
    else {
        console.log("asd");
    }
    counter++;
}
if (arrayuser.length === 0) {
    console.log(`We need to find some users!`);
}
export {};
