define(function(require) {
	'use strict';

	var Backbone = require('backbone');

	return Backbone.View.extend({

		initialize: function() {
			console.log("LOG: Initialize Baseview");
			
			this.render();
		},

		render: function() {
			console.log("LOG: Executed Baseview Render");

			this.$el.html(this.template);

			// Call the `onRender` method if it exists.
			if(this.onRender) {
				this.onRender();
			}

			return this;
		}

	});
});