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
		  'shared_resources/css/tool.css': 'shared_resources/sass/tool.scss',
		  'shared_resources/css/voice.css': 'shared_resources/sass/voice.scss'
		}
	  }
	},

	postcss: {
	  options: {
		processors: [
		  autoprefixer({ browsers: ['> 1%'] }).postcss
		]
	  },
	  dist: { src: 'shared_resources/css/*.css' }
	},

	jshint: {
	  files: {
		src : 'shared_resources/scripts/*.js'
	  },
	},

	watch: {
		css: {
			files: ['shared_resources/sass/*.scss','shared_resources/sass/*/*.scss'],
			tasks: ['buildcss']
		},
		js: {
			files: ['shared_resources/scripts/*.js'],
			tasks: ['jshint']
		}
	},

	browserSync: {
		dev: {
			bsFiles: {
				src : [
					'shared_resources/css/*.css',
					'shared_resources/scripts/*.js',
					'voice/*.html',
					'tool/*.html'
				]
			},
			options: {
				watchTask: true,
				server: '../'
			}
		}
	}

	});

	grunt.registerTask('default', ['browserSync','watch']);
	// use build css for the final dist css
	grunt.registerTask('buildcss',  ['sass', 'postcss']);

};