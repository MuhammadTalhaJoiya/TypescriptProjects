import { type } from "os"

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
interface music_object{
    artist_name:string
    album_title:string
    album_track?:number
}
type album_type=(artist_name:string,album_title:string)=>music_object
let make_album:album_type=(artist_name,album_title,track?:number)=>{
    let album:music_object= {
        artist_name:album_title,
        album_title:album_title,
    }
    if (typeof track==="number") {
        album.album_track = track;
    }
    return album
}
// artist name
console.log(make_album("Jubin Nautiyal","album1"))
console.log(make_album("Arjit","album2"))
console.log(make_album("Palak Muchhal","sang yara"))
// artist name
// album title