// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
let str = "Talha";
console.log(str != "Talha" ? "True" : "False");
console.log(str == "Talha" ? "True" : "False");
// Tests using the lower case function
let name1 = "TALHA";
console.log(name1.toLowerCase() ? "I convert it to lowercase" : "Uppercase");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let a = 5;
console.log(a > 0 ? "a is greater than 0" : "a is less than 0");
a = 1;
console.log(a != 0 ? "a is not equal to 0" : "a is equal to 0");
a = 11;
console.log(a >= 10 ? "a is greater than and equal to 10" : "a is not greater than and equal to 10");
a = 9;
console.log(a <= 9 ? "a is lesser than and equal to 9" : "a is not lesser than and equal to 9");
a = 10;
console.log(a < 5 ? "a is less than 5" : "a is greater than 5");
a = 15;
console.log(a > 10 ? "a is greater than 10" : "a is not greater than 10");
// • Tests using "and" and "or" operators
let age = 18;
let CNIC = true;
let marksheet = false;
console.log(age >= 18 && age <= 22 ? "You are allowed to get admission in university" : "You are not allowed");
console.log(CNIC || marksheet ? "You are allowed to enter in office" : "You are not allowed");
// • Test whether an item is in a array
let arr = ["abc", "efg", "hij", "klm"];
console.log(arr.includes("abc") ? "abc is in array" : "abc is not in array");
// • Test whether an item is not in a array
console.log(!arr.includes("abc") ? "abc is in array" : "abc is not in array");
export {};
