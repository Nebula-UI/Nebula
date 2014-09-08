define(function(require) {
	'use strict';

	var HomeTemplate = require('text!templates/homeTpl.html'),
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

	});
});