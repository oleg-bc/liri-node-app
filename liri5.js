var file = require('file-system');
var fs = require('fs');
var moment = require('moment');

require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');

var nodeArgs = process.argv;
var searchTarget = "";
var command = nodeArgs[2];

var movieFunc = function (searchTarget) {
    var queryUrl = "http://www.omdbapi.com/?t=" + searchTarget + "&y=&plot=short&apikey=trilogy";
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
}

var songFunc = function (track) {
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
    });
}

for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        searchTarget = searchTarget + "+" + nodeArgs[i];
    }
    else {
        searchTarget += nodeArgs[i];
    }
} //closes the for

var executeSearch = function (command, searchTarget) {

    if (command == "movie-this") {
        if (nodeArgs.length < 4) {
            searchTarget = "Mr. Nobody";
        }

        movieFunc(searchTarget);
    }

    else if (command == "concert-this") {

        var queryUrl = "https://rest.bandsintown.com/artists/" + searchTarget + "/events?app_id=codingbootcamp";

        axios.get(queryUrl).then(
            function (response) {
                var venueLocation = response.data[0].venue.city;
                var dateEvent = response.data[0].datetime;
                var venue = response.data[0].venue.name;
                console.log("Name of the venue: " + venue);
                //    Name of the venue
                console.log("Venue location " + venueLocation);
                dateEvent1 = moment(dateEvent).format('MM/DD/YYYY');
                console.log("* Date of the Event  " + dateEvent1);
            }
        );

    }

    else if (command == "spotify-this-song") {

        var theArtist = "";
        if (nodeArgs.length < 4) {
            searchTarget = "The Sign";

        }
        songFunc(searchTarget);
    }

    else if (command == "do-what-it-says") {
            console.log(nodeArgs.length);
            nodeArgs[3]="";
        fs.readFile('random.txt', 'utf8', function (err, contents) {

            var arrContents = [];
            var stringContents = "";
            arrContents = contents;
            stringContents = contents;
            var splitted = stringContents.split("\"");
            var commandPart = splitted[0];
            var comafree = commandPart.replace(/,/g, "");
            var songPart = splitted[1];
            executeSearch(comafree, songPart);
        });
    }

}
executeSearch(command, searchTarget);