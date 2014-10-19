define(function(require) {
	'use strict';

	var AboutTemplate = require('template!templates/aboutTpl'),
		BaseView = require('views/_baseView');

	return BaseView.extend({

		el: 'body',

		template: AboutTemplate,

		/* // Uncomment if you want to override baseview initialize methods.
		initialize: function() {
			console.log("LOG: Initialize Aboutview");

			this.render();
		},
		*/

		hasSerializeData: function() {
			var data = {
				"menu": [{
					"hash": "#",
					"text": "Home"
				}, {
					"hash": "#about",
					"text": "About"
				}]
			};

			console.log("LOG: Serialize Data from About View: %j", data);

			return data;
		},

		// The `onRender` method gets called after render method. This method is optional.
		onRender: function() {
			console.log("LOG: Executed After Aboutview Render Method");
		}
		
	});
});