module.exports = function(grunt) {
    "use strict";

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
                "strict": true,
                "curly": true,
                "eqeqeq": true,
                "immed": true,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "sub": true,
                "undef": false,
                "boss": true,
                "eqnull": true,
                "browser": true,
                "unused": true,
                "proto": true,
                "globals": {
                    "jQuery": true,
                    "define": true,
                    "require": true,
                    "console": true,
                    "$": true,
                    "_": true,
                    "asyncTest": true,
                    "deepEqual": true,
                    "equal": true,
                    "expect": true,
                    "module": true,
                    "notDeepEqual": true,
                    "notEqual": true,
                    "notStrictEqual": true,
                    "ok": true,
                    "QUnit": true,
                    "raises": true,
                    "start": true,
                    "stop": true,
                    "strictEqual": true,
                    "test": true,
                    "throws": true,
                    "prompt": true,
                    "alert": true
                }
            }
        },
        jscs: {
            src: "src/apps/**/*.js",
            options: {
                "requireCurlyBraces": ["if", "else", "for", "while", "do", "try", "catch"],
                "requireSpaceAfterKeywords": ["if", "else", "for", "while", "do", "switch", "return", "try", "catch"],
                "disallowLeftStickedOperators": ["?", "+", "-", "/", "*", "=", "==", "===", "!=", "!==", ">", ">=", "<", "<="],
                "disallowRightStickedOperators": ["?", "+", "/", "*", ":", "=", "==", "===", "!=", "!==", ">", ">=", "<", "<="],
                "requireRightStickedOperators": ["!"],
                "requireLeftStickedOperators": [","],
                "disallowImplicitTypeConversion": ["string"],
                "disallowKeywords": ["with"],
                "disallowMultipleLineBreaks": true,
                "disallowKeywordsOnNewLine": ["else"],
                //"requireLineFeedAtFileEnd": true, // requireLineFeedAtFileEnd option requires true value or should be removed
                "excludeFiles": ["src/systems/libs/**/*.js", "src/main.js"],
                "validateJSDoc": {
                    "checkParamNames": true,
                    "requireParamTypes": true
                }
            }
        },
        csslint: {
            strict: {
                src: [
                    "src/stylesheets/css/**/*.css"
                ],
                options: {
                    "ids": false,
                    "overqualified-elements": false,
                    "important": false,
                    "adjoining-classes": false,
                    "known-properties": false,
                    "box-sizing": false,
                    "box-model": false,
                    "display-property-grouping": false,
                    "bulletproof-font-face": false,
                    "compatible-vendor-prefixes": false,
                    "regex-selectors": false,
                    "errors": false,
                    "duplicate-background-images": false,
                    "duplicate-properties": false,
                    "empty-rules": false,
                    "selector-max-approaching": false,
                    "gradients": false,
                    "fallback-colors": false,
                    "font-sizes": false,
                    "font-faces": false,
                    "floats": false,
                    "star-property-hack": false,
                    "outline-none": false,
                    "import": false,
                    "underscore-property-hack": false,
                    "rules-count": false,
                    "qualified-headings": false,
                    "selector-max": false,
                    "shorthand": false,
                    "text-indent": false,
                    "unique-headings": false,
                    "universal-selector": false,
                    "unqualified-attributes": false,
                    "vendor-prefix": true,
                    "zero-units": false
                }
            }
        },
        htmlhint: {
            Root_HTML_Files: {
                options: {
                    "tag-pair": true,
                    "tagname-lowercase": true,
                    "attr-lowercase": true,
                    "attr-value-double-quotes": true,
                    "attr-value-not-empty": true,
                    "doctype-first": true,
                    "tag-self-close": true,
                    "spec-char-escape": true,
                    "id-unique": true,
                    "head-script-disabled": true,
                    "img-alt-require": true,
                    "doctype-html5": true,
                    "id-class-value": true
                },
                src: [
                    "src/*.html"
                ]
            },
            Templates: {
                options: {
                    "tagname-lowercase": true,
                    "attr-lowercase": true,
                    "attr-value-double-quotes": true,
                    "attr-value-not-empty": true,
                    "tag-self-close": false,
                    "spec-char-escape": true,
                    "id-unique": true,
                    "head-script-disabled": true,
                    "img-alt-require": true,
                    "id-class-value": true,
                    "style-disabled": true
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
        }
    });

    // Load NPM task
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs-checker");
    grunt.loadNpmTasks("grunt-contrib-csslint");
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-qunit-istanbul");
    grunt.loadNpmTasks("grunt-strip");

    // Load Default Task.
    grunt.registerTask("default", ["jshint", "jscs", "htmlhint", "less:readyMade", "less:customMade", "csslint"]);

    // Load Build Task;
    grunt.registerTask("build", ["clean", "jshint", "jscs", "htmlhint", "less:prod", "csslint", "shell", "strip"]);
};