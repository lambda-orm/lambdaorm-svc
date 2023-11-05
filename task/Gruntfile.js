const fs = require('fs')

module.exports = function (grunt) {
	// Load the plugins
	require('load-grunt-tasks')(grunt)
	grunt.initConfig({
		exec: {
			lint: { cmd: 'npx eslint src ' },
			tsc: { cmd: 'npx tsc ' },
			test: { cmd: 'npx jest --config jest-config.json' },
			doc: { cmd: 'npx typedoc --plugin typedoc-plugin-markdown --out doc/source src/lib/doc.index.ts' },
			release: { cmd: './task/release.sh' },
			to_develop: { cmd: './task/to_develop.sh' }
		},
		clean: {
			build: ['build'],
			dist: ['dist']
		},
		copy: {
			swagger: { expand: true, cwd: './src/lib/infrastructure', src: './swagger.yaml', dest: 'build/infrastructure' },
			lib: { expand: true, cwd: 'build/', src: '**', dest: 'dist/' },
			readme: { expand: true, src: './README.md', dest: 'dist/' },
			license: { expand: true, src: './LICENSE', dest: 'dist/' },
			jest: { expand: true, src: './jest-config.json', dest: 'dist/' }
		}
	})
	grunt.registerTask('create-package', 'create package.json for dist', function () {
		const data = require('../package.json')
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

	grunt.registerTask('lint', ['exec:lint'])
	grunt.registerTask('build', ['lint', 'clean:build', 'exec:tsc', 'copy:swagger'])
	grunt.registerTask('test', ['build', 'exec:test'])
	grunt.registerTask('doc', ['exec:doc'])
	grunt.registerTask('dist', ['test', 'clean:dist', 'copy:lib', 'copy:readme', 'copy:license', 'create-package'])
	grunt.registerTask('to-develop', ['test', 'exec:to_develop'])
	grunt.registerTask('release', ['dist', 'doc', 'exec:release'])
	grunt.registerTask('default', [])
}
