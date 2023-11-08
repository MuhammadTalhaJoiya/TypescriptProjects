// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the uest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let count = 0;
let guest2 = ["Asad", "Ali", "Kamran", 'Younus'];
for (let index = 0; index < guest2.length; index++) {
    console.log(`You are invited to the dinner "${count += 1}.${guest2[index]}"`);
}
console.log("Younus will not be available for dinner,we will invite Talha in place of Younus");
let count2 = 0;
guest2 = ["Asad", "Ali", "Kamran", 'Talha'];
for (let index = 0; index < guest2.length; index++) {
    console.log(`they are still in our list of invitation for dinner "${count2 += 1}.${guest2[index]}"`);
}
export {};
