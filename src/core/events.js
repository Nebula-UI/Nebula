/*
*   This module loads event object and it's dependencies. It gives
*   the ability to publish, subscribe and unsubscribe to custom application events.
*
*   NOTE: This object uses Backbone events for publishing, subscribing and
*   unsubscribing events. For more information refer to Backbone.Events documentation.
*   http://documentcloud.github.com/backbone/#Events
*/

define(function(require) {
	'use strict';

	var _ = require('underscore'),
		Backbone = require('backbone');

	return _.extend({}, Backbone.Events);
});