const express = require('express');

class Server {
	constructor() {
		this.app = express();

		this.app.get('/', function(req, res) {
			res.sendFile(__dirname + "/client/index.html")
		});
	}

	start() {
		this.app.listen(3630, function() {
			console.log('Server is started');
		})
	}
}
module.exports = Server;
