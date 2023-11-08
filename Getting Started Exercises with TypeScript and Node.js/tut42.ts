// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.



let arr:string[]=["Darren Brown","Teller","Brown","Dynamo"]
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
let a=make_great(arr)
show_magicians1(a)
