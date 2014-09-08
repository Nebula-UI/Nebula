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
			return this;
		}

	});
});