module.exports = function(grunt) {
	// Load the NPM tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-watch');

	// Register the default task
	grunt.registerTask('default', ['sass', 'uglify']);

	// Initialize config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			target: {
				files: {
					'public/js/min/main.min.js': 'public/js/main.js'
				}
			},
			options: {
				sourceMap: false
			}
		},
		sass: { // Task
			dist: { // Target
				options: {
					style: 'compressed'
				},
				files: [{
					'public/css/style.css': 'sass/style.scss'
				}]
			}
		},
	}); // Initlize config end
}