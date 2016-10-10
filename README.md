# Nebula [![GitHub version](http://img.shields.io/badge/version-0.1.2-brightgreen.svg)](https://github.com/hegdeashwin/Nebula/releases)


[![Build Status](https://travis-ci.org/Nebula-UI/Nebula.svg?branch=master)](https://travis-ci.org/Nebula-UI/Nebula)   [![Dependency Status](http://gemnasium.com/hegdeashwin/Nebula.png)](http://gemnasium.com/hegdeashwin/Nebula) [![Node.js version](http://img.shields.io/badge/Node.js-%3E%206.0.0-brightgreen.svg)](https://github.com/hegdeashwin/Nebula/) [![Built with Grunt](http://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![License version](http://img.shields.io/badge/License-MIT-red.svg)](https://github.com/hegdeashwin/Nebula#license) [![Supports Docker](https://img.shields.io/badge/Support-Docker-orange.svg)](https://hub.docker.com/r/hegdeashwin/nebula/)


Nebula is an open source walking application skeleton for a typical Backbone web apps. You can use it to quickly bootstrap your Backbone web application projects.

## Prerequisites

As Nebula is based on Backbone.js. It is assumed user already knows JavaScript, jQuery, Backbone.js and Underscore.js.
If you are looking for learning Backbone.js, visit [github.com/hegdeashwin/Backbone](https://github.com/hegdeashwin/Backbone)

For understanding Nebula skeleton, knowledge of following JavaScript libraries/frameworks are must.
* Require.js - a JavaScript file and module loader. For more information visit [requirejs.org](https://requirejs.org/)
* Grunt.js - a JavaScript task runner. For more information visit [gruntjs](http://gruntjs.com/)
* Bootstrap Framework 3.0 - a front-end framework for developing responsive, mobile first projects on the web. For more information visit [Bootstrap](https://getbootstrap.com/)

## References

Requirejs training kit, Please visit: [https://github.com/hegdeashwin/learning-requirejs] (https://github.com/hegdeashwin/learning-requirejs)

Gruntjs training kit, Please visit: [https://github.com/hegdeashwin/learning-Grunt] (https://github.com/hegdeashwin/learning-Grunt)

## Installation

Assuming that Git is already installed & running:
```
git clone https://github.com/Nebula-UI/Nebula.git
```

### On local system:

Assuming that Node.js is already installed & running,

Install dependencies:
```
npm install
```

Assuming that Bower is already installed & running,

Install client-side dependencies:
```
bower install
```

To start the development server:
```
node server.js
```
or
```
NODE_ENV=development node server.js
```

To start the production server:
```
NODE_ENV=production node server.js
```

Open and run Protocore on browser
```
http://localhost:8000
```

### On Docker

Assuming that Docker is already installed & running.

Open terminal, change directory to the repository where you cloned Protocore and start root session
```
sudo -s
```

Build Protocore docker image
```
docker build -t <username>/<repository>
```

Verify if image got successfully created
```
docker images
```

Run Create image in background
```
docker run -d <username>/<repository>
```

Verify if the images is running in background
```
docker ps
```

Open and run Protocore on browser
```
http://localhost:8000
```

## Nebula Generator

[Nebula-cli](https://github.com/Nebula-UI/nebula-cli) is a command line generator for Nebula. This tool will help to generate a walking application skeleton for a typical Backbone web apps.

## Server layer

The server side codebase resides in the ```server.js``` and ```config.js``` files. By default, the server layer is written in JavaScript (Node.js with Express 4.0) which can be configured and flexible to work with any server side scripting language like Java, PHP, ASP.NET or others. As client and server layer are seperate entity.

## Client layer

The client side codebase resides in the ```src``` folder. This folder contains following subfolders.

```
+-- /stylesheets
	+--/css
	+--/less
+-- /systems
	+--/frameworks
	+--/libs
	+--/utilities
+-- /templates
+-- /locales
	+--/en
+-- /assets
	+--/fonts
	+--/icons
	+--/images
+-- /apps
	+--/models
	+--/views
	+--/collections
	+--/router
	+--/core
```

## Task automation

Nebula comes with Grunt ecosystem - a JavaScript task runner to perform repetitive tasks like minification, compilation, unit testing, linting etc. Many of the tasks you need are already available as published Grunt plugins.

Few task automations has been configured to detect errors and potential problems in codebase and to enforce your team's coding conventions.

Following are the default Grunt plugins that has been integrated with Nebula architecture.

**Automations tasks & commands**

| Linting commands |
|:---|
|Markdown : ```grunt mdlint``` |
|HTML/Templates : ```grunt htmlhint```|
|JavaScript : ```grunt jshint``` AND ```grunt jscs```|
|JSON : ```grunt jsonlint```|
|CSS : ```grunt csslint```|

| Build commands |
|:---|
|Production : ```grunt build```|

| Compilation commands |
|:---|
|LESS for development : ```grunt compileLessDev```|
|LESS for production : ```grunt compileLessProd```|

| Watch commands |
|:---|
|LESS Compilation for development : ```grunt watchless```|

| Unit test commands |
|:---|
|Browser: ```http://localhost:8080/tests/``` install http-server npm|
|Console: ```grunt qunit```|

|Report generator commands|
|:---|
|Plato : ```grunt analysis``` OR ```grunt plato```|

## Special editions

[Boneloop](https://github.com/Nebula-UI/Boneloop)

Boneloop provides a client-[server]-side stack for building enterprise grade HTML5/Marionette applications. It could be used with any server side like Node.js, Ruby, PHP, JEE, Spring etc.

By default it's server side environment comes with Node.js - [Loopback (StrongLoop)](https://loopback.io/)

## Author & Contributors

We really appreciate all kind of contributions. Special thanks to [contributors](https://github.com/Nebula-UI/Nebula/graphs/contributors) for using and supporting Nebula.

To request a feature or you find any typo errors, enhancements or questions; please feel free to post it on following link, or vote for the ones that are already registered.

Tracking: [https://github.com/Nebula-UI/Nebula/issues](https://github.com/Nebula-UI/Nebula/issues)

## License

The MIT License (MIT)

Copyright (c) 2016 Ashwin Hegde
