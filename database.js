var mysql = require('mysql');
var config = require('./config');
var connection = mysql.createConnection(config.db);
connection.connect();

exports = {
	addFriend: () => {

	},
	addGroup: () => {

	},
	checkWatchList: (id) => {
		return true;
	}
}