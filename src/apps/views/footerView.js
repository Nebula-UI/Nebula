define(function(require) {
	'use strict';

	var FooterTemplate = require('template!templates/footerTpl'),
		BaseView = require('views/_baseView');

	return BaseView.extend({

		el: 'footer',

		template: FooterTemplate,

		/* // Uncomment if you want to override baseview initialize methods.
		initialize: function() {
			console.log("LOG: Initialize Homeview");

			this.render();
		},
		*/

		// The `onRender` method gets called after render method.  This method is optional.
		onRender: function() {
			console.log("LOG: Executed After Homeview Render Method");
		}

	});
});