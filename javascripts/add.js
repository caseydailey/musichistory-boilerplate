"use strict";

function songForm() {

  return new Promise((resolve, reject)=> {

	let form =
      		   `<div class="add-song row">
      			<input type="text" id="form--title" placeholder="title"></input>
      			<input type="text" id="form--artist" placeholder="artist"></input>
      			<input type="text" id="form--album" placeholder="album"></input>
      			<button id="add-song">ADD</button>
      			</div>`;

        resolve(form);
  });
}


function newSong() {

	return new Promise((resolve, reject) =>{

	let title = document.getElementById("form--title").value;
	let artist = document.getElementById("form--artist").value;
	let album = document.getElementById("form--album").value;

	let songString = `${title} ${artist} ${album}`;
	let songItem = `<h4> ${title} </h4> <p> ${artist} | ${album}</p>`;

	resolve(songItem, songString);

  });

}

function loadDom() {
	
}



module.exports = {songForm, newSong};