module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	htmllint: {
        all: ['*.html']
    },
	
	bootlint: {
    options: {
      stoponerror: false,
      relaxerror: []
    },
		files: ['*.html']
	}

  });

  // Load the plugin that provides the "html validation" task.
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-bootlint');

  // Default task(s).
  grunt.registerTask('default', ['htmllint', 'bootlint']);

};