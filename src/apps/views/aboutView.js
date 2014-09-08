define(function(require) {
	'use strict';

	var AboutTemplate = require('text!templates/aboutTpl.html'),
		BaseView = require('views/_baseView');

	return BaseView.extend({

		el: 'body',

		template: AboutTemplate,

		/* // Uncomment if you want to override baseview initialize methods.
		initialize: function() {
			console.log("LOG: Initialize Aboutview");

			this.render();
		}
		*/
		
	});
});