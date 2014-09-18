define(function(require) {
	'use strict';

	var HomeTemplate = require('template!templates/homeTpl'),
		BaseView = require('views/_baseView');

	return BaseView.extend({

		el: 'body',

		template: HomeTemplate,

		/* // Uncomment if you want to override baseview initialize methods.
		initialize: function() {
			console.log("LOG: Initialize Homeview");

			this.render();
		}
		*/

		// The `onRender` method gets called after render method.  This method is optional.
		onRender: function() {
			console.log("LOG: Executed After Homeview Render Method");
		}

	});
});