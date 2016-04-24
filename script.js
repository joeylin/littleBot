// 初始化数据库
var mysql = require('mysql');
var config = require('./config');
var dbConfig = config.db;
var connection = mysql.createConnection(dbConfig);
connection.connect();

connection.query('CREATE DATABASE ' + dbConfig.database, (err, rows, fields) => {
	console.log('create');
	if (err) throw err;

	// var p1 = new Promise((resolve, reject) => {
	// 	console.log('p1');
	// 	connection.query('\
	// 	CREATE TABLE `' + dbConfig.database + '`.`' + 'friends' + '` ( \
	//     `id` VARCHAR(40) NOT NULL, \
	//     `name` VARCHAR(20) NOT NULL, \
	//     `sex` CHAR(60), \
	//         PRIMARY KEY (`id`), \
	//     UNIQUE INDEX `id_UNIQUE` (`id` ASC) \
	// 	)', (err, rows, fields) => {
	// 		if (err) throw err;
	// 		resolve();
	// 	});
	// });

	// var p2 = new Promise((resolve, reject) => {
	// 	connection.query('\
	// 	CREATE TABLE `' + dbConfig.database + '`.`' + 'groups' + '` ( \
	//     `id` VARCHAR(40) NOT NULL, \
	//     `name` VARCHAR(20) NOT NULL, \
	//     `count` INT UNSIGNED NOT NULL, \
	//         PRIMARY KEY (`id`), \
	//     UNIQUE INDEX `id_UNIQUE` (`id` ASC) \
	// 	)', (err, rows, fields) => {
	// 		if (err) throw err;
	// 		resolve();
	// 	});
	// });

	// var p3 = new Promise((resolve, reject) => {
	// 	console.log('p3');
	// 	connection.query('\
	// 	CREATE TABLE `' + dbConfig.database + '`.`' + 'watch' + '` ( \
	//     `id` VARCHAR(40) NOT NULL, \
	//     `name` VARCHAR(20) NOT NULL, \
	//         PRIMARY KEY (`id`), \
	//     UNIQUE INDEX `id_UNIQUE` (`id` ASC) \
	// 	)', (err, rows, fields) => {
	// 		if (err) throw err;
	// 		resolve();
	// 	});
	// });

	// Promise.all([p1, p2, p3]).then((result) => {
	// 	console.log('Success: Database Created!')
	// 	connection.end();
	// })
});

	
	

	

