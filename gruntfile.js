module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        "merge-json": {
            default: {
                files: {
                    "ab.json": ["a.json", "b.json"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-merge-json');
    grunt.registerTask('default', ['merge-json']);
}
