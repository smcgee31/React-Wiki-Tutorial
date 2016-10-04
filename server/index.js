// React Wikipedia Search
var express = require( 'express' );
var app = express();
var port = 8000;

app.use(express.static(__dirname + '/../dist'));

app.listen( port, function () {
	console.log( 'listening on port ', port );
} );
