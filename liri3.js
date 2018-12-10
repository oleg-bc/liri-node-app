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
for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];

    }
}


 
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
 
spotify.search({ type: 'track', query: 'What I Got' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


// Then run a request with axios to the OMDB API with the movie specified

// var spotifyURL = "https://api.spotify.com/v1/search?q=What%20I%20Got&type=track&market=US&limit=1&offset=5"

// axios.get(spotifyURL, {
//     headers: {
//         Authorization: "Bearer " + process.env.SPOTIFY_SECRET
//     }
// }).then(function (response) {
//     console.log(response.data);
// });

// this was the hardest part of this api
// var spotifyURL = "https://api.spotify.com/v1/search?q=What%20I%20Got&type=track&market=US&limit=1&offset=5"
// axios.get(spotifyURL,{headers: "Bearer "+ process.env.SPOTIFY_SECRET}).then( 
//     function(response){
//         console.log(response);
//     });
// "https://api.spotify.com/v1/search?q=" + movieName + "&market=US&limit=1&offset=5";

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);
// var mTitle;
// var iRating;
// var rtRating;
// var mCountry;
// var mLang;
// var actors;
// var plot;
// axios.get(queryUrl).then(
//     function (response) {
//         console.log("Release Year: " + response.data.Year);
//         //    * Title of the movie.
//         console.log("* Title of the movie " + response.data.Title);
//         //    * Year the movie came out.
//         console.log("* Year the movie came out. " + response.data.Released);
//         //    * IMDB Rating of the movie.
//         console.log("* IMDB Rating of the movie. " + response.data.Ratings[0].Value);
//         //    * Rotten Tomatoes Rating of the movie.
//         console.log("* Rotten Tomatoes Rating of the movie. " + response.data.Ratings[1].Value);
//         //    * Country where the movie was produced.
//         console.log("* Country where the movie was produced. " + response.data.Country);
//         //    * Language of the movie.
//         console.log("* Language of the movie. " + response.data.Language);
//         //    * Plot of the movie.
//         console.log("* Plot of the movie. " + response.data.Plot);
//         //    * Actors in the movie.
//         console.log("* Actors in the movie. " + response.data.Actors);
//     }
// );




//GET https://api.spotify.com/v1/search



//reqs: https://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/UCBSAN201810FSF5-FT/blob/master/course-content/09-nodejs/homework/Instructions/homework_instructions.md
// function(){
//     Make it so liri.js can take in one of the following commands:

// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

// What Each Command Should Do


// node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:


// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

// If no song is provided then your program will default to "The Sign" by Ace of Base.
// You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
// The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:
// Step One: Visit https://developer.spotify.com/my-applications/#!/
// Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
// Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
// Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.



// node liri.js movie-this '<movie name here>'




// This will output the following information to your terminal/bash window:

//    * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Rotten Tomatoes Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.


// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

// It's on Netflix!


// You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.



// node liri.js do-what-it-says




// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.





// BONUS


// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file. 
// Do not overwrite your file each time you run a command.



// Reminder: Submission on BCS


// Please submit the link to the Github Repository!





// Minimum Requirements

// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

// Create a README.md

// Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:

// About READMEs
// Mastering Markdown
// Add To Your Portfolio

// After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.


// One More Thing

// If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.
// }