// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let array = ["Hello", "Salam", "Salam"];
let value = 5;
let answer = array[value];
if (value >= 0 && value <= array.length) {
    console.log(array[value]);
}
else {
    console.log("index error");
}
export {};
