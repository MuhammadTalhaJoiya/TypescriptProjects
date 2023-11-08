// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

const alien:string[]=["green","red","yellow"]
let randnum:number=Math.floor(Math.random()*4)
console.log(randnum)

if(alien[randnum]==="green"){
    console.log("the player earned 5 points")
}
if(alien[randnum]==="red"){
    console.log("player earned 15 points")
}
else{
    console.log("the player earned 10 points")
}
export{}