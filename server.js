/***
 * Build-in | Third party module dependencies.
 */

var express = require('express'),
	http = require('http'),
	path = require('path');

var app = express(),
	config = require("./config");

/**
 * Application Configurations for Development Environment.
 * NODE_ENV=development node server.js
 ***/
app.configure('development', function() {
	app.set('port', process.env.PORT || config.server.dev.port);
	app.set(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
	app.use(express.static(path.join(__dirname, config.server.dev.codebase)));
});

/**
 * Application Configurations for Production Environment.
 * NODE_ENV=production node server.js
 ***/
app.configure('production', function() {
	app.set('port', process.env.PORT || config.server.prod.port);
	app.set(express.methodOverride());
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.static(path.join(__dirname, config.server.prod.codebase)));
});

http.createServer(app).listen(app.get('port'), function() {
	console.log("\n\n\tNode (Express) server listening on port " + app.get('port'));
});