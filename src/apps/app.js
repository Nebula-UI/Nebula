define(function(require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone');

    return Backbone.View.extend({

        el: 'body',

        initialize: function() {
            this.xhrStatusHandler();
            this.render();
        },

        xhrStatusHandler: function() {
            $.ajaxSetup({
                statusCode: {
                    403: function() {
                        return false;
                    }
                }
            });
        },

        render: function() {
            return this;
        }
    });
});