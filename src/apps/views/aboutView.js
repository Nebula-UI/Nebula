define(function(require) {
	'use strict';

	var Backbone = require('backbone'),
		aboutTemplate = require('text!templates/aboutTpl.html');

	return Backbone.View.extend({

		el: 'body',

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(aboutTemplate);
			return this;
		}
	});
});