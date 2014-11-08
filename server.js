/** 
 * NoteApp Server-Side 
 */

 var express  		= require('express');
 var app      		= express(); 	
 var bodyParser 		= require('body-parser'); 
 var methodOverride 	= require('method-override');

 var mysql      = require('mysql');
 var db = mysql.createConnection({
 	host     : 'localhost',
 	user     : 'root',
 	password : 'GodBlessYou',
 	database : 'notesapp'
 });

 /** ================================================ */
 var serverPort = 3271;

app.use(express.static(__dirname + '/public'));					// static files from public/
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.urlencoded({'extended':'true'})); 			//parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

/** ================================================ */

var router = express.Router(); 	

router.route('/notes')
.get(function(request, response) {

	db.connect(function() {

		db.query('SELECT * FROM notes', function(err, rows) {
			if (err) throw err;

			var previewLength = 100;
			var previewText;

			for(var i in rows) {

				var text = rows[i].text;
				var date = new Date(rows[i].date);

				if(text.length > previewLength) {
					 previewText =  text.substring(0, previewLength) + '...';
				} else {
					previewText = text;
				}

				rows[i].previewText = previewText;
				rows[i].date 		= date.toDateString();
			}

			response.json(rows);
		});

	});

});
app.use('/api', router);

app.listen(serverPort, function() {							// start the server on that port
	var url = 'http://127.0.0.1:' + serverPort;
	console.log("NoteApp listening at " + url);
});											

