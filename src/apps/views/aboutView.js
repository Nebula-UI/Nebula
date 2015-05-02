define(function(require) {
	'use strict';

	var AboutTemplate = require('template!templates/aboutTpl'),
		BaseView = require('views/_baseView');

	return BaseView.extend({

		el: '#innerContainer',

		template: AboutTemplate,

		/* // Uncomment if you want to override baseview initialize methods.
		initialize: function() {
			console.log("LOG: Initialize Aboutview");

			this.render();
		},
		*/

		// The `onRender` method gets called after render method. This method is optional.
		onRender: function() {
			console.log("LOG: Executed After Aboutview Render Method");
		}
		
	});
});