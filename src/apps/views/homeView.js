define(function(require) {
	'use strict';

	var Backbone = require('backbone'),
		homeTemplate = require('text!templates/homeTpl.html');

	return Backbone.View.extend({

		el: 'body',

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(homeTemplate);
			return this;
		}
	});
});