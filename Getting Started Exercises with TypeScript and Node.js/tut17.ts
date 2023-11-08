// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log(`I can invite only two people for dinner.`)
let guest4:string[]=["Asad","Ali","Kamran",'Talha']

for (let index = 1; index < 2; index++) {
    guest4.unshift("Kashif")
    for (let index = 1; index < 2; index++) {
        guest4.push("Sohail")
        for (let index = 1; index < 2; index++) {
            guest4.splice((Math.ceil(guest4.length/2)),0,"Jamshed")
            //if array is not divisible by 2 then we apply Math.ceil() to round up to the nearest integer,but at this situation element will not place at the middle of the array  
        }
    }
        
}
let guest5:string[]=[...guest4]
for (let index = 2; index < guest4.length; index++) {
    const element = guest4[index];
    guest5.pop()
    console.log(`${element},I am sorry I can’t invite you to dinner`)
}
// console.log(guest5)

for (let index = 0; index < guest5.length; index++) {
    console.log(`You are still invited ${guest5[index]}`)
}
for (let index = 0; index < 2; index++) {
    guest5.shift()
}
console.log(guest5)
