define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        Core = require('core'),
        Events = require('events');

    var AppRouter = Backbone.Router.extend({

        initialize: function() {
            this.listenTo(Events, 'page:navigate', this._navigatePage);
        },

        _navigatePage: function(navigationData) {
            this.navigate(navigationData.path, navigationData.options);
        },

        routes: {
            '': 'home',
            'home': 'home',
            'about': 'about'
        }
    });

    var initialize = function(options) {
        var appView = options.appView;
        var router = new AppRouter(options);

        router.on('route:home', function() {
            require(['views/_masterView'], function(Page) {
                Core.create(appView, 'Page', Page);
            });
        });

        router.on('route:about', function() {
            require(['views/aboutView'], function(AboutPage) {
                Core.create(appView, 'AboutPage', AboutPage);
            });
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});