Nebula [![Build Status](http://travis-ci.org/hegdeashwin/Nebula.png?branch=master)](http://travis-ci.org/hegdeashwin/Nebula)  [![Dependency Status](http://gemnasium.com/hegdeashwin/Nebula.png)](http://gemnasium.com/hegdeashwin/Nebula) [![Code Climate](http://codeclimate.com/repos/52fa1e95e30ba07f52002102/badges/a73df6c9e5472e6b867d/gpa.png)](http://codeclimate.com/repos/52fa1e95e30ba07f52002102/feed)  [![Built with Grunt](http://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/hegdeashwin/nebula/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
======
Nebula is an open source application skeleton for a typical Backbone web apps. You can use it to quickly bootstrap your Backbone web application projects.

Prerequisites
=============
As Nebula is based on Backbone.js. It is assumed user already knows JavaScript, jQuery, Backbone.js and Underscore.js.
If you are looking for learning Backbone.js, visit <a href="//github.com/hegdeashwin/Backbone" target="_blank">github.com/hegdeashwin/Backbone</a>.

For understanding Nebula architecure, knowledge of following JavaScript libraries/frameworks are must.
<ul>
	<li>Require.js - a JavaScript file and module loader. For more information visit <a href="//requirejs.org/" target="_blank">requirejs.org</a></p></li>
	<li>Bootstrap Framework 3.0 - a front-end framework for developing responsive, mobile first projects on the web. For more information visit <a href="//getbootstrap.com/" target="_blank">getbootstrap.com</a></li>
</ul>

Installation
============
Assuming that Git is already installed & running:
```
git clone https://github.com/hegdeashwin/Nebula
```

Assuming that Node.js is already installed & running, 

Install dependencies:
```
npm install
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

Server layer
============
The server side codebase resides in the files server.js and config.js. By default, the server layer is written in JavaScript (Node.jS).  Nebula is flexible to work with any server side scripting language like Java, PHP, ASP.NET or other. As Client layer and server layer are seperate entity.

Client layer
============
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

Task automation
===============
These task automations has been written to detect errors and potential problems in codebase and to enforce your team's coding conventions. It is very flexible so you can easily adjust it to your particular coding guidelines and the environment you expect your code to execute in.

**Individual tasks**

| Command                     | Task performed              |
| --------------------------- |:---------------------------:|
| grunt htmllint              | Perform the task to detect errors and issues for HTML documents for index.html and templates. |
| grunt csslint               | Perform the task to detect errors and issues for CSS stylesheets. |
| grunt jshint                | Perform the task to detect errors and issues for JavaScript. |
| grunt jscs                  | Perform the task to detect unwanted spacing etc. for JavaScript. |
| grunt less:readyMade        | Perform the task to compile all the less files. The files which comes with third party libraries or frameworks like Bootstrap 3.0 |
| grunt less:customMade       | Perform the task to compile all the less files. The files which created by users as their custom stylesheets.

**Combine tasks**

| Command                     | Task performed              |
| --------------------------- |:---------------------------:|
| grunt default               | Executing this command will perform the task to detect errors and issues for HTML, CSS, JavaScript and less compilation to CSS. It includes jshint, jscs, htmlhint, csslint, less:readyMade, less:customMade. |
| grunt build              	  | Executing this command will perform the ```default``` task including clear and building production build. |
| grunt compileless           | Executing this command will perform only less compilation to CSS which includes two sub-task ```less:readyMade```, ```less:customMade```. |

Libraries/frameworks used
=========================
<ul>
	<li><a href="//jquery.com/" target="_blank">jQuery.js v2.0.3</a></li>
	<li><a href="//backbonejs.org/" target="_blank">Underscore.js v1.5.2</a></li>
	<li><a href="//underscorejs.org/" target="_blank">Backbone.js v1.1</a></li>
	<li><a href="//requirejs.org/" target="_blank">Require.js v1.2.10</a></li>
	<li><a href="//getbootstrap.com/" target="_blank">Bootstrap v3.0.0</a></li>
</ul>

Author
======
Name: <a href="//github.com/hegdeashwin" target="_blank">Ashwin Hegde</a>. Follow me at: <a href="//github.com/users/follow?target=hegdeashwin" target="_blank">github</a> | <a href="//in.linkedin.com/in/hegdeashwin" target="_blank">Linkedin</a> | <a href="//twitter.com/hegdeashwin3" target="_blank">Twitter</a>

Acknowledgement
===============
We really appreciate all kind of contributions. <br/>Special Thanks to <a href="//github.com/hegdeashwin/Nebula/graphs/contributors" target="_blank">contributors</a> for using and supporting Nebula.

License
=======
The MIT License (MIT)

Copyright (c) 2014 Ashwin Hegde

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
