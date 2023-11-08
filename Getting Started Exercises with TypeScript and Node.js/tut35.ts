// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals:Array<string>=["Dog","wolf","lion"]
for (let index = 0; index < animals.length; index++) {
    if(index===0){
        console.log(animals[index])
        console.log(`${animals[index]} is very loyal`)
    }
    else if(index===1){
        console.log(animals[index])
        console.log(`${animals[index]} is very respectful to parents`)
    }
    else{
        console.log(animals[index])
        console.log(`${animals[index]} is very brave`)
    }
}
console.log(`I think one common think that I have found in these animal that they have carnivore`)