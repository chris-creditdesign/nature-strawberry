module.exports = function(grunt){

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  var autoprefixer = require('autoprefixer-core');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	sass: {
	  build: {
		options: {
			style: 'expanded',
		},
		files: {
		  'css/main.css': 'sass/main.scss'
		}
	  }
	},

	postcss: {
	  options: {
		processors: [
		  autoprefixer({ browsers: ['> 1%'] }).postcss
		]
	  },
	  dist: { src: 'css/*.css' }
	},

	jshint: {
	  files: {
		src : 'scripts/*.js'
	  },
	},

	watch: {
		css: {
			files: ['sass/*.scss'],
			tasks: ['buildcss']
		},
		js: {
			files: ['site/scripts/*.js'],
			tasks: ['jshint']
		}
	},

	browserSync: {
		dev: {
			bsFiles: {
				src : [
					'css/*.css',
					'scripts/*.js',
					'*.html'
				]
			},
			options: {
				watchTask: true,
				server: './'
			}
		}
	}

	});

	grunt.registerTask('default', ['browserSync','watch']);
	// use build css for the final dist css
	grunt.registerTask('buildcss',  ['sass', 'postcss']);

};