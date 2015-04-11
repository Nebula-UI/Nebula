define(function(require) {
	'use strict';

	var HeaderTemplate = require('template!templates/headerTpl'),
		BaseView = require('views/_baseView');

	return BaseView.extend({

		el: 'header',

		template: HeaderTemplate,

		/* // Uncomment if you want to override baseview initialize methods.
		initialize: function() {
			console.log("LOG: Initialize Homeview");

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

			console.log("LOG: Serialize Data from Home View: %j", data);

			return data;
		},

		// The `onRender` method gets called after render method.  This method is optional.
		onRender: function() {
			console.log("LOG: Executed After Homeview Render Method");
		}

	});
});