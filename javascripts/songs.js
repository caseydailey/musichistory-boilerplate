"use strict";
//use JavaScript to create a list of songs in the index.html 

let  add = require("./add.js");


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//to the beginning:
songs.unshift("Tokyo - by The Books on the album The Lemon of Pink");

//to the end:
songs.push("There is no there - by The Books on the album The Lemon of Pink");

//Loop over the array and remove any words or characters that obviously don't belong.
var cleanSongs = [];

for (var i = 0; i < songs.length; i++) {

			var dashSong = songs[i].replace(/>/g, "-");
			var gibberish = /\(|@|!|\*|/g;
			var cleanSong = dashSong.replace(gibberish, ""); 
			
			cleanSongs.push(cleanSong);

}

//a sequence of splits gets our string into the pieces we need

var songsDiv = document.getElementById("song-names-panel");

for (var i = 0; i < cleanSongs.length; i++) {
    
    var firstSplit = cleanSongs[i].split(" - by ");
    var songName = firstSplit[0];	
    var secondSplit = firstSplit[1].split(" on the album ");
    var artist = secondSplit[0];
    var album = secondSplit[1];

songsDiv.innerHTML += `<h4> ${songName} </h4>
					   <p> ${artist} | ${album} | music </p>`;
}

/********************     add music view      ***********************************************/

let addMusicLink = document.getElementById("add-music");
let panelContainer = document.getElementById("option-and-names-container");
addMusicLink.addEventListener("click", showAdd);
panelContainer.addEventListener("click", addSong);

function showAdd() {
	console.log('clicked add music');
	let newSongForm = add.songForm()
	.then((newSongForm)=> panelContainer.innerHTML = newSongForm);
}


function addSong(e) {
	if(e.target.id === "add-song") {
		add.newSong()
		.then((songItem)=> {
			
			songsDiv.append(songItem);
			console.log('songsDiv:', songsDiv);
			console.log('songitem:', songItem);
		});
	}
}










