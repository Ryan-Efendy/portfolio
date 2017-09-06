module.exports = function(grunt) {
  grunt.initConfig({
    uncss: {
      dist: {
        'src/styles/min.css': ['index.html', 'src/styles/main.css']
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default tasks.
  grunt.registerTask('default', ['uncss']);
};
