const fs = require('fs')

module.exports = function (grunt) {
	// Load the plugins
	require('load-grunt-tasks')(grunt)
	grunt.initConfig({
		exec: {
			lint: { cmd: 'npx eslint src ' },
			release: { cmd: './release.sh' },
			to_develop: { cmd: './to_develop.sh' }
		},
		clean: {
			dist: ['dist']
		},
		copy: {
			api: { expand: true, cwd: 'src/api', src: '**', dest: 'dist/' },
			readme: { expand: true, src: './README.md', dest: 'dist/' },
			license: { expand: true, src: './LICENSE', dest: 'dist/' }
		}
	})
	grunt.registerTask('create-package', 'create package.json for dist', function () {
		const data = require('./package.json')
		delete data.devDependencies
		delete data.private
		delete data.scripts
		delete data.nodemonConfig
		data.scripts = {
			start: 'node index.js'
		}
		data.main = 'index.js'
		fs.writeFileSync('dist/package.json', JSON.stringify(data, null, 2), 'utf8')
	})
	grunt.registerTask('dist', ['clean:dist', 'copy:api', 'copy:readme', 'copy:license', 'create-package'])
	grunt.registerTask('release', ['dist', 'exec:release'])
	grunt.registerTask('to_develop', ['dist', 'exec:to_develop'])
	grunt.registerTask('default', [])
}
