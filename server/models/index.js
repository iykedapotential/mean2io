var mongoAdapter = require('sails-mongo');
var Waterline = require('waterline');
var config = require('../config');

var orm = new Waterline();

var config = {
    adapters: {
        mongodb: mongoAdapter
    },

    connections: {
        myMongo: {
            adapter: 'mongodb',
            url: config.db_uri
            //host: 'localhost',
            //user: 'root',
            //database: 'testdb'
        }
    }
};

var fs = require('fs');
var path = require("path");

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        var model = require(path.join(__dirname, file));
        orm.loadCollection(model);
    });

module.exports = {waterline: orm, config: config};
//module.exports = orm.collections;