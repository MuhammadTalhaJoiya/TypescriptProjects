// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let show_magicians=(...a:Array<string>)=>{
    a.forEach((value,index)=>{
        console.log(value)
    })
}
show_magicians("Darren Brown","Teller","Brown","Dynamo")

let arr:string[]=["Darren Brown","Teller","Brown","Dynamo"]
let show_magicians1=(a:Array<string>)=>{
    a.forEach((value,index)=>{
        console.log(value)
    })
}
show_magicians1(arr)