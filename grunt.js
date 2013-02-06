module.exports = function(grunt) {
  grunt.initConfig({
    jasmine_node: {
      specNameMatcher: "spec",
      projectRoot: ".",
      requirejs: false,
      forceExit: true
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('default', 'jasmine_node');
}
