define(function(require) {
	'use strict';

	var MasterTemplate = require('template!templates/masterTpl'),
		Core = require('core'),
		BaseView = require('views/_baseView');

	return BaseView.extend({

		el: 'body',

		template: MasterTemplate,

		/* // Uncomment if you want to override baseview initialize methods.
		initialize: function() {
			console.log("LOG: Initialize MasterView");

			this.render();
		},
		*/

		// The `onRender` method gets called after render method.  This method is optional.
		onRender: function() {
			console.log("LOG: Executed After MasterView Render Method");

			require(['views/headerView'], function(HeaderView) {
				Core.create({}, 'HeaderView', HeaderView);
			});

			require(['views/footerView'], function(FooterView) {
				Core.create({}, 'FooterView', FooterView);
			});
		}

	});
});