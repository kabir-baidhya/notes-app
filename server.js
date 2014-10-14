/** 
 * NoteApp Server-Side 
 */

var express  = require('express');
var app      = express(); 	
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override');

/** ================================================ */
var serverPort = 3271;

app.use(express.static(__dirname + '/public'));					// static files from public/
app.use(bodyParser.urlencoded({'extended':'true'})); 			//parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

/** ================================================ */

app.listen(serverPort);											// start the server on that port
console.log("NoteApp listening on port " + serverPort);