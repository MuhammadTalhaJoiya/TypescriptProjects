// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let DreamPlaces = ["Makka", "Madina", "NewYork", "Berlin", "Istanbul"];
console.log(DreamPlaces);
let sorted = [...DreamPlaces];
sorted.sort();
console.log(sorted);
console.log(DreamPlaces);
let reverseOrderArray = DreamPlaces.slice();
reverseOrderArray.reverse(); //reverse and sort change in original array
console.log(reverseOrderArray);
console.log(DreamPlaces);
DreamPlaces.reverse();
console.log(DreamPlaces);
DreamPlaces.reverse();
console.log(DreamPlaces);
console.log(DreamPlaces.sort());
console.log(DreamPlaces.reverse());
export {};
// 2. Using the slice method:
// typescript
// Copy code
// let originalArray = [1, 2, 3, 4, 5];
// let copyArray = originalArray.slice();
