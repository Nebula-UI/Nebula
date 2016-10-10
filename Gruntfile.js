module.exports = function(grunt) {
    'use strict';

    /**
     * Require it at the top and pass in the grunt instance
     */
    require('time-grunt')(grunt);

    /**
     * Setup configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('config/banner.json'),
        buildTags: "/* Project Name : <%= pkg.application.name %> Release version : <%= pkg.application.version %> */",

        configuredFiles: grunt.file.readJSON('config/servefiles.json'),

        clean: {
            build: ['prod']
        },
        shell: {
            uglify: {
                command: [
                  "node bower_components/rjs/dist/r.js -o config/build.js",
                  "cp -r bower_components prod/bower_components"
                ].join('&&')
            }
        },
        usebanner: {
            buildTags: {
                options: {
                    position: 'top',
                    banner: '<%= buildTags %>',
                    linebreak: true
                },
                files: {
                    src: '<%= configuredFiles.usebanner %>'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: 'config/lints/.jshintrc',
                ignores: '<%= configuredFiles.jshint.ignore %>'
            },
            all: '<%= configuredFiles.jshint.files %>'
        },
        jscs: {
            options: {
                config: 'config/lints/.jscsrc'
            },
            src: '<%= configuredFiles.jscs.files %>',
        },
        jsonlint: {
            files: {
                src: '<%= configuredFiles.jsonlint %>'
            }
        },
        csslint: {
            strict: {
                options: {
                    csslintrc: 'config/lints/.csslintrc',
                    ignores: '<%= configuredFiles.csslint.ignore %>'
                },
                src: '<%= configuredFiles.csslint.files %>'
            }
        },
        htmlhint: {
            Root_HTML_Files: {
                options: {
                    htmlhintrc: 'config/lints/.htmlhint-n-rc',
                    ignores: '<%= configuredFiles.htmlhint.Root_HTML_Files.ignore %>'
                },
                src: '<%= configuredFiles.htmlhint.Root_HTML_Files.files %>'
            },
            Templates: {
                options: {
                    htmlhintrc: 'config/lints/.htmlhint-t-rc',
                    ignores: '<%= configuredFiles.htmlhint.Templates.ignore %>'
                },
                src: '<%= configuredFiles.htmlhint.Templates.files %>'

            }
        },
        less: {
            readyMade: {
                options: {
                    compress: true
                },
                files: '<%= configuredFiles.less.readyMade.files %>'
            },
            customMade: {
                options: {
                    compress: false
                },
                files: '<%= configuredFiles.less.customMade.files %>'
            },
            prod: {
                options: {
                    compress: true
                },
                files: '<%= configuredFiles.less.customMade.files %>'
            }
        },
        watch: {
            less: {
                options: {
                    spawn: false
                },
                files: '<%= configuredFiles.watch.less.files %>',
                tasks: ['less:customMade']
            }
        },
        qunit: {
            options: {
                '--web-security': 'no',
                coverage: {
                    src: ['src/**/*.js'],
                    instrumentedFiles: 'temp/',
                    htmlReport: 'report/coverage',
                    coberturaReport: 'report/'
                }
            },
            all: ['tests/**/*.html']
        },
        strip: {
            main: {
                src: 'prod/src/apps/**/*.js',
                options: {
                    inline: true,
                    nodes: ['console.log', 'debug']
                }
            }
        },
        autoprefixer: {
            options: {
                'browsers': ['last 2 versions']
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
                files: '<%= configuredFiles.htmlmin.files %>'
            }
        }
    });

    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-strip');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-banner');

    /**
     * Define tasks : Tasks for development eco - system.
     */
    grunt.registerTask('default', [
        'htmlhint',
        'jsonlint',
        'jscs',
        'jshint',
        'compileLessDev',
        'autofix',
        'csslint'
    ]);
    grunt.registerTask('dev', ['default']); // Alias for `default`.

    /**
     * Define tasks : Tasks for build eco - system.
     */
    grunt.registerTask('build', [
        'htmlhint',
        'jsonlint',
        'jscs',
        'jshint',
        'compileLessProd',
        'autofix',
        'csslint',
        'clean',
        'strip',
        'shell',
        'htmlmin',
        'usebanner'
    ]);

    /**
     * Define tasks : Tasks for less:compilation watch, Also alias for `watch`
     */
    grunt.registerTask('watchless', ['watch:less']);

    /**
     * Define sub-tasks : Tasks for Less compilation for development.
     */
    grunt.registerTask('compileLessDev', ['less:readyMade', 'less:customMade']);

    /**
     * Define sub-tasks : Tasks for Less compilation for production.
     */
    grunt.registerTask('compileLessProd', ['less:readyMade', 'less:prod']);

    /**
     * Define sub-tasks : Alias for `autofix`
     */
    grunt.registerTask('autofix', ['autoprefixer']);

    /**
     * Define sub-tasks : Alias for `tests`
     */
    grunt.registerTask('tests', ['qunit']);

};
