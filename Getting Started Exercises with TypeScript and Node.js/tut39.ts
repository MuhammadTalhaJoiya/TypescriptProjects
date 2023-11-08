// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

type city_country_type=(city:string,country:string)=>string
let cuty_country:city_country_type=(city,country)=>{
    return `${city},${country}`
}
console.log('Karachi',"Pakistan")
console.log('Faislabad',"Pakistan")
console.log('Skardu',"Pakistan")