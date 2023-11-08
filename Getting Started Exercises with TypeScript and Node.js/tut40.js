let make_album = (artist_name, album_title, track) => {
    let album = {
        artist_name: album_title,
        album_title: album_title,
    };
    if (typeof track === "number") {
        album.album_track = track;
    }
    return album;
};
// artist name
console.log(make_album("Jubin Nautiyal", "album1"));
console.log(make_album("Arjit", "album2"));
console.log(make_album("Palak Muchhal", "sang yara"));
export {};
// artist name
// album title
