module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    jasmine_node: {
      specNameMatcher: "spec",
      projectRoot: ".",
      requirejs: false,
      forceExit: true
    },
    lint: {
      all: ["grunt.js", "lib/*.js"]
    },
    jshint: {
      options: {
        browser: true,
        curly: true,
        eqeqeq: true,
        newcap: true,
        undef: true,
        eqnull: true,
        node: true,
        strict: false
      },
      globals: {
        exports: true,
        Ext: false,
        console: false,
        alert: false,
        prompt: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-check-modules');

  grunt.registerTask('default', ['lint','check-modules','jasmine_node']);
};
