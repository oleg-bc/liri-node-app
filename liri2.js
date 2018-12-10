require("dotenv").config();
var axios = require("axios");
// Store all of the arguments in an array
var nodeArgs = process.argv;

var artist = "";
for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        artist = artist + "%20" + nodeArgs[i];
    }
    else {
        artist += nodeArgs[i];
    }
}

var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

var venueLocation;
var dateEvent;
var venue;
// This line is just to help us debug against the actual URL.
console.log(queryUrl);
//var artist;

axios.get(queryUrl).then(
    function (response) {
        // venueLocation=response[0].venue.city;
        // dateEvent=response[0].datetime;
        // venue=response.venue.name;

    console.log(response.data);
        // console.log("Name of the venue: " + venue);
        // //    Name of the venue
        // console.log("Venue location " + venueLocation);
        // console.log("* Date of the Event  " + dateEvent);
        // // Name of the venue
        // // Venue location
        // // Date of the Event (use moment to format this as "MM/DD/YYYY")
    }
);


// node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:











