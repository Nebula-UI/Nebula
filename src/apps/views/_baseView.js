define(function(require) {
	'use strict';

	var Backbone = require('backbone'),
		Globals = require('globals');

	return Backbone.View.extend({

		initialize: function() {
			console.log("LOG: Initialize Baseview");

			this.render();
		},

		render: function() {
			console.log("LOG: Executed Baseview Render");

			var serializeData = {};
			// Call the `hasSerializeData` method if it exists.
			if (this.hasSerializeData) {
				serializeData = this.hasSerializeData();

				console.log("LOG: Serialize Data from Base View: %j", serializeData);
			}

			this.$el.html(this.template({
				globals: Globals,
				serializeData: serializeData
			}));

			// Call the `onRender` method if it exists.
			if (this.onRender) {
				this.onRender();
			}

			return this;
		}

	});
});