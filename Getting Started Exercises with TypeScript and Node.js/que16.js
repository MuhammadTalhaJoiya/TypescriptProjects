// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest3 = ["Asad", "Ali", "Kamran", 'Talha'];
for (let index = 1; index < 2; index++) {
    guest3.unshift("Kashif");
    for (let index = 1; index < 2; index++) {
        guest3.push("Sohail");
        for (let index = 1; index < 2; index++) {
            guest3.splice((Math.ceil(guest3.length / 2)), 0, "Jamshed");
            //if array is not divisible by 2 then we apply Math.ceil() to round up to the nearest integer,but at this situation element will not place at the middle of the array  
        }
    }
}
console.log(guest3);
for (let guest1 of guest3) {
    console.log(`You are invited to the dinner ${guest1}`);
}
export {};
