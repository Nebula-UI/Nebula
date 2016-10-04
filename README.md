# Nebula [![GitHub version](http://img.shields.io/badge/version-0.0.8-brightgreen.svg)](https://github.com/hegdeashwin/Nebula/releases)


[![Build Status](http://travis-ci.org/hegdeashwin/Nebula.png?branch=master)](http://travis-ci.org/hegdeashwin/Nebula)   [![Dependency Status](http://gemnasium.com/hegdeashwin/Nebula.png)](http://gemnasium.com/hegdeashwin/Nebula) [![Node.js version](http://img.shields.io/badge/Node.js-%3E%200.12-brightgreen.svg)](https://github.com/hegdeashwin/Nebula/) [![Built with Grunt](http://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![License version](http://img.shields.io/badge/License-MIT-red.svg)](https://github.com/hegdeashwin/Nebula#license)


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

**Individual tasks**

| Grunt Plugin 			 | Command                  | Task Performed              |
|:-----------------------|:------------------------|:---------------------------|
| grunt-htmlhint		 | grunt htmllint           | Detect errors and issues for HTML documents for index.html and templates. |
| grunt-contrib-csslint	 | grunt csslint            | Detect errors and issues for CSS stylesheets. |
| grunt-contrib-jshint	 | grunt jshint             | Detect errors and issues for JavaScript. |
| grunt-jscs-checker	 | grunt jscs               | Detect unwanted spacing etc. for JavaScript. |
| grunt-jsonlint		 | grunt jsonlint           | Detect errors and issues for JSON/Configuration files. |
| grunt-contrib-less	 | grunt less:readyMade     | Compile all the less files. The files which comes with third party libraries or frameworks like Bootstrap 3.0 |
| grunt-contrib-less     | grunt less:customMade    | Compile all the less files. The files which created by users as their custom stylesheets.
| grunt-contrib-watch	 | grunt watch 				| Keep watch on less folders & files. Any changes in less file will automatically compile all the less files. |
| grunt-contrib-qunit	 | grunt qunit 				| Perform unit testing. |

**Combine tasks**

| Command                     | Task performed              |
|:--------------------------- |:---------------------------|
| grunt default               | Executing this command will perform the task to detect errors and issues for HTML, CSS, JavaScript and less compilation to CSS. It includes jshint, jscs, htmlhint, csslint, less:readyMade, less:customMade. |
| grunt build              	  | Executing this command will perform the ```default``` task including clear and building production build. |
| grunt compileless           | Executing this command will perform only less compilation to CSS which includes two sub-task ```less:readyMade```, ```less:customMade```. |
| grunt tests		          | Executing this command will perform unit testing. |

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
