//use JavaScript to create a list of songs in the index.html

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//add one song to the beginning and the end of the array.

console.log('songs:', songs);

//to the beginning:
songs.unshift("Tokyo - by The Books on the album The Lemon of Pink");
console.log('to the beginning', songs);

//to the end:
songs.push("There is no there - by The Books on the album The Lemon of Pink");
console.log('to the end:', songs);


//Loop over the array and remove any words or characters that obviously don't belong.


var cleanSongs = []

for (var i = 0; i < songs.length; i++) {

	//i can't get this to work right now. i know its gotta be something like this
	
	// var	cleanSong = songs[i].replace((\/>\/g), "-");
		// console.log('songs[i] - ">" + "-":', songs[i]);
	// var gibberish = (/@|!|\(|*\/)g;
		// songs[i] = cleanSong.replace(gibberish, "");
		// console.log('song[i] - minus gibberish:', songs[i]);
	
	// var dashSong = songs[i].replace(">", "-");
	// console.log('dashSong', dashSong);
	// cleanSong = dashSong.replace("*", "");
	// console.log('cleanSong:', cleanSong);
	// cleanSong = cleanSong.replace("!", "");
	// console.log('cleanSong:', cleanSong);
	// cleanSong = cleanSong.replace("(", "");
	// console.log('cleanSong:', cleanSong);
	// cleanSong = cleanSong.replace("@", "");
	// console.log('cleanSong:', cleanSong);

//hours later, without the escape '\' on the '>' 
//and without the parentheses on	gibberish

			var dashSong = songs[i].replace(/>/g, "-");
			var gibberish = /\(|@|!|\*|/g;
			var cleanSong = dashSong.replace(gibberish, ""); 
			console.log(cleanSong); 

	cleanSongs.push(cleanSong);

};

console.log(cleanSongs); 

//finallY! regEx seems easy with strings, 
//but jeeeez... with the special characters...


//speaking of regEx with strings
//lets clean up those phrases so when we print them, they'll be right!

////we can put'em in an array
//var trimmedSongs = [];
//
//for (var i = 0; i < cleanSongs.length; i++) {
//	var trimmedSong = cleanSongs[i]
//		.replace(/ - by | on the album /g, " ");
//		trimmedSongs.push(trimmedSong);
//}
//
//console.log(trimmedSongs);
//
////Must add each string to the DOM in index.html in the main content area.
//
//that was a dead end.


//william caldwell had this idea (which i think is almost perfect) 
//and have tried to replicate verbatim below 
//we're gonna need those extra substrings, though...

//first we'll need to target an element in the DOM

var songsDiv = document.getElementById("song-names-panel");

for (var i = 0; i < cleanSongs.length; i++) {
    
    var firstSplit = cleanSongs[i].split(" - by ");
	
//returns an array with what was before " - by " 
//and what was after (at current index item) ["song name", "the rest of the string that was cleanSongs[i]"]
//firstSplit[0] is songName

    var songName = firstSplit[0];

//what's left is split at the the substring " on the album "
//which returns the array secondSplit ["artist", "album"]
	
    var secondSplit = firstSplit[1].split(" on the album ");

//secondSplit's elements are plugged in to their nice little variables

    var artist = secondSplit[0];
    var album = secondSplit[1];

//and then we print, incrementally setting innerHTML

songsDiv.innerHTML += `<h4> ${songName} </h4>
					   <p> ${artist} | ${album} | music </p>`;

//beautiful. thanks again to william for his help formulating this approach					   					   

}













