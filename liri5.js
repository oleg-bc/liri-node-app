var file = require('file-system');
var fs = require('fs');
file.readFile ==



require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');

var nodeArgs = process.argv;
var movieName = "";

if (nodeArgs[2] == "movie-this") {
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        } else {
            movieName += nodeArgs[i];
        }
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrl);
    axios.get(queryUrl).then(
        function (response) {
            console.log("Release Year: " + response.data.Year);
            //    * Title of the movie.
            console.log("* Title of the movie " + response.data.Title);
            //    * Year the movie came out.
            console.log("* Year the movie came out. " + response.data.Released);
            //    * IMDB Rating of the movie.
            console.log("* IMDB Rating of the movie. " + response.data.Ratings[0].Value);
            //    * Rotten Tomatoes Rating of the movie.
            console.log("* Rotten Tomatoes Rating of the movie. " + response.data.Ratings[1].Value);
            //    * Country where the movie was produced.
            console.log("* Country where the movie was produced. " + response.data.Country);
            //    * Language of the movie.
            console.log("* Language of the movie. " + response.data.Language);
            //    * Plot of the movie.
            console.log("* Plot of the movie. " + response.data.Plot);
            //    * Actors in the movie.
            console.log("* Actors in the movie. " + response.data.Actors);
        }
    );
}//closes the movie-this

else if (nodeArgs[2] == "concert-this") {

    var artist = "";
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
            artist = artist + "%20" + nodeArgs[i];
        }
        else {
            artist += nodeArgs[i];
        }
    }

    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            //console.log(response.data);
            var venueLocation = response.data[0].venue.city;
            var dateEvent = response.data[0].datetime;
            var venue = response.data[0].venue.name;
            console.log("Name of the venue: " + venue);
            //    Name of the venue
            console.log("Venue location " + venueLocation);
            console.log("* Date of the Event  " + dateEvent);
            // Name of the venue
            // Venue location
            // Date of the Event (use moment to format this as "MM/DD/YYYY")
        }
    );

}


else if (nodeArgs[2] == "spotify-this-song") {
    var track = "";
    if (nodeArgs.length < 3) {
        track = "The Sign";
    }
    else {
        for (var i = 3; i < nodeArgs.length; i++) {
            if (i > 3 && i < nodeArgs.length) {
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
}


else if (nodeArgs[2] == "do-what-it-says") {
    
    fs.readFile('random.txt', 'utf8', function(err, contents) {
        console.log(contents);
        nodeArgs[3] =  contents;
        console.log("nodeArgs are "+nodeArgs[3]);
           
    }
}
