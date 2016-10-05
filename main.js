/*
 * Our first Node.js / ExpressJS Web Server!
 */
  
//Load express
var express = require(“express”);
//Create an instance of the express application
var app = express();
 
// Serve files from public directory.
// __dirname is the absolute path of the application directory
app.use(express.static(__dirname + “/public”));
 
//Start the web server on port 3000
app.listen(3000, function() {
    console.info(“Web Server started on port 3000”);
});
