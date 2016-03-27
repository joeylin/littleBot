// 初始化数据库
var mysql = require('mysql');
var config = require('./config');
var dbConfig = config.db;
var connection = mysql.createConnection(dbConfig);
connection.connect();

connection.query('CREATE DATABASE ' + dbConfig.database);

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + 'friends' + '` ( \
    `id` VARCHAR(40) NOT NULL, \
    `name` VARCHAR(20) NOT NULL, \
    `sex` CHAR(60), \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) \
)');

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + 'groups' + '` ( \
    `id` VARCHAR(40) NOT NULL, \
    `name` VARCHAR(20) NOT NULL, \
    `count` INT UNSIGNED NOT NULL, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) \
)');

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + 'watch' + '` ( \
    `id` VARCHAR(40) NOT NULL, \
    `name` VARCHAR(20) NOT NULL, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) \
)');

console.log('Success: Database Created!')
connection.end();