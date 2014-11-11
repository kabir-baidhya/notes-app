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

var helper = {
	getPreviewText: function(text) {

		var previewLength = 100;
		if(text.length > previewLength) {
			previewText =  text.substring(0, previewLength) + '...';
		} else {
			previewText = text;
		}

		return previewText;
	},

	formatNote: function(note) {
		note.previewText = this.getPreviewText(note.text);

		var date = new Date(note.date);
		note.date 		= date.toDateString();

		return note;
	}
};

var router = express.Router(); 	

router.route('/notes')
.get(function(request, response) {

	db.query('SELECT * FROM notes', function(err, rows) {
		if (err) throw err;

		
		var previewText;

		for(var i in rows) {

			rows[i] = helper.formatNote(rows[i]);
		}

		response.json(rows);
	});

})
.post(function(request, response) {

	//get data from POST request
	var item = {
		title: request.body.title,
		text: request.body.text
	};

	db.query('INSERT INTO notes SET ?', item, function(err, result) {

		//get the id of newly inserted note
		var noteId = result.insertId;

		db.query('SELECT * FROM notes where id = ?', [noteId], function(err, rows) {
			
			var data = {success: false };

			if(rows[0]) {

				var note = rows[0];
				
				data.note = helper.formatNote(note);
				data.success = true;
			}

			response.json(data);
		});
	});
});

app.use('/api', router);

app.listen(serverPort, function() {							// start the server on that port
	var url = 'http://127.0.0.1:' + serverPort;
	console.log("NoteApp listening at " + url);
});

