/***
 * The goal of this file is mainly to intialize require.js AMD module loader configuration.
 */
requirejs.config({
    /***
     * The path where your JavaScripts files are located.
     */
    baseUrl: './apps/',

    /***
     * Path config is also part of Require and allows to define paths for vendors
     * not found directly under baseUrl.
     * See http://requirejs.org/docs/api.html#config-paths for details.
     */
    paths: {
        /*** List of frameworks/libraries to be included in the codebase. ***/
        'jquery': '../../bower_components/jquery/jquery.min',
        'underscore': '../../bower_components/underscore/underscore-min',
        'backbone': '../../bower_components/backbone/backbone',
        'text': '../../bower_components/requirejs-text/text',
        'handlebars': '../../bower_components/handlebars/handlebars.min',
        'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap.min',
        'template': '../systems/utilities/hd-template-mapper',
        'templates': '../../templates'
    },

    /***
     * shim config is part of `Require 2.0`_ and allows to Configure the dependencies
     * and exports for older, traditional “browser globals” scripts that do not use
     * define() to declare the dependencies and set a module value.
     * See http://requirejs.org/docs/api.html#config-shim for more details.
     */
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        text: {
            exports: 'text'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});

/*** Load app.js to initialize your application module. ***/
require(['app', 'router/router', 'core'], function(AppView, Router, Core) {
    var appView = Core.create({}, 'AppView', AppView);
    appView.render();

    /***
     * The router now has a copy of all main appview
     */
    Router.initialize({
        appView: appView
    });
});
