// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

// If no song is provided then your program will default to "The Sign" by Ace of Base.
///////////////////////////////////////////////////////////************************************ */
// You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
// The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these 
require("dotenv").config();
var axios = require("axios");

var Spotify = require('node-spotify-api');
// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
var track = "";
if (nodeArgs.length < 3) {
    track = "The Sign";
}
else {
    for (var i = 2; i < nodeArgs.length; i++) {

        if (i > 2 && i < nodeArgs.length) {
            track = track + "+" + nodeArgs[i];
        }
        else {
            track += nodeArgs[i];

        }
    } //closes the for
}//closes the else




var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

spotify.search({ type: 'track', query: track }, function (err, data) {

    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log("Artist is " + data.tracks.items[0].artists[0].name);
    console.log("Song's name is " + data.tracks.items[0].name);
    console.log("Song's preview link is " + data.tracks.items[0].preview_url);
    console.log("The Album the song is from  " + data.tracks.items[0].album.name);
    //console.log(data); 
});