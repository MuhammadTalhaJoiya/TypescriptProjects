// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



let arr:string[]=["Darren Brown","Teller","Brown","Dynamo"]
let copyarr:string[]=[...arr]
let show_magicians1=(a:Array<string>)=>{
    a.forEach((val)=>{
        console.log(val)
    })
}
const make_great=(a:string[])=>{
    let arr=a.map((val)=>{
        return `The great ${val}`
    })
    return arr
}
let arr2=make_great(copyarr)
show_magicians1(arr2)
console.log(arr) //original array
console.log(arr2) //Array with "The great" added to each element