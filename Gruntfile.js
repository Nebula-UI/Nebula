module.exports = function(grunt) {
    "use strict";

    /**
     * Require it at the top and pass in the grunt instance
     */
    require('time-grunt')(grunt);

    /**
     * Setup configuration
     */
    grunt.initConfig({
        clean: {
            build: ["prod"]
        },
        shell: {
            uglify: {
                command: "node r.js -o build.js"
            }
        },
        jshint: {
            all: ["src/apps/**/*.js"],
            options: {
                ignores: ["src/main.js", "src/systems/libs/**/*.js", "src/systems/frameworks/**/*.js"],
                jshintrc: 'config/.jshintrc'
            }
        },
        jscs: {
            src: "src/apps/**/*.js",
            options: {
                config: "config/.jscsrc"
            }
        },
        csslint: {
            strict: {
                src: [
                    "src/stylesheets/css/**/*.css"
                ],
                options: {
                    csslintrc: 'config/.csslintrc'
                }
            }
        },
        htmlhint: {
            Root_HTML_Files: {
                options: {
                    htmlhintrc: 'config/.htmlhint-n-rc'
                },
                src: [
                    "src/*.html"
                ]
            },
            Templates: {
                options: {
                    htmlhintrc: 'config/.htmlhint-t-rc'
                },
                src: [
                    "src/templates/**/*.html"
                ]
            }
        },
        less: {
            readyMade: {
                options: {
                    compress: true
                },
                files: {
                    "src/systems/frameworks/bootstrap/css/bootstrap.min.css": "src/systems/frameworks/bootstrap/less/bootstrap.less",
                    "src/systems/frameworks/bootstrap/css/bootstrap-theme.min.css": "src/systems/frameworks/bootstrap/less/theme.less"
                }
            },
            customMade: {
                options: {
                    compress: false
                },
                files: {
                    "src/stylesheets/css/common/common.css": [
                        "src/stylesheets/less/common/imports.less"
                    ]
                }
            },
            prod: {
                options: {
                    compress: true
                },
                files: {
                    "src/systems/frameworks/bootstrap/css/bootstrap.min.css": "src/systems/frameworks/bootstrap/less/bootstrap.less",
                    "src/systems/frameworks/bootstrap/css/bootstrap-theme.min.css": "src/systems/frameworks/bootstrap/less/theme.less",
                    "src/stylesheets/css/common/common.css": [
                        "src/stylesheets/less/common/imports.less"
                    ]
                }
            }
        },
        watch: {
            less: {
                files: ["src/stylesheets/less/**/*.less"],
                tasks: ["less:customMade"],
                options: {
                    spawn: false
                }
            }
        },
        qunit: {
            options: {
                '--web-security': 'no',
                coverage: {
                    src: ['src/apps/**/*.js'],
                    instrumentedFiles: 'temp/',
                    htmlReport: 'report/coverage',
                    coberturaReport: 'report/'
                }
            },
            all: ['tests/**/*.html']
        },
        strip: {
            main: {
                src: "prod/src/apps/**/*.js",
                options: {
                    inline: true,
                    nodes: ["console.log", "debug"]
                }
            }
        },
        autoprefixer: {
            options: {
                "browsers": ["ie 8", "ie 9", "Firefox >= 17", "ios 7", "last 10 Chrome versions", "last 2 Safari versions", "Android 4"]
            },

            multiple: {
                expand: true,
                flatten: true,
                src: 'src/stylesheets/css/common/*.css',
                dest: 'src/stylesheets/css/common/'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    "prod/index.html": "prod/index.html",
                    "prod/templates/homeTpl.html": "prod/templates/homeTpl.html",
                    "prod/templates/aboutTpl.html": "prod/templates/aboutTpl.html"
                }
            }
        }
    });

    /**
     * Load tasks
     */
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-strip");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs-checker");
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-contrib-csslint");
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks("grunt-qunit-istanbul");

    /**
     * Define tasks : Tasks for development eco - system.
     */
    grunt.registerTask("default", [
        "htmlhint",
        "csslint",
        "jshint",
        "jscs",
        "less:readyMade",
        "less:customMade",
        "autofix"
    ]);
    grunt.registerTask('dev', ['default']); // Alias for `default`.

    /**
     * Define tasks : Tasks for build eco - system.
     */
    grunt.registerTask("build", [
        "htmlhint",
        "csslint",
        "jshint",
        "compileless",
        "autofix",
        "clean",
        "shell",
        "strip",
        "htmlmin"
    ]);

    /**
     * Define sub-tasks : Tasks for Less compilation.
     */
    grunt.registerTask("compileless", ["less:readyMade", "less:customMade"]);

    /**
     * Define sub-tasks : Alias for `autofix`
     */
    grunt.registerTask('autofix', ['autoprefixer']);

};