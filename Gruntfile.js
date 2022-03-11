const fs = require('fs')

module.exports = function (grunt) {
	// Load the plugins
	require('load-grunt-tasks')(grunt)
	grunt.initConfig({
		exec: {
			lint: { cmd: 'npx eslint src ' },
			tsc: { cmd: 'npx tsc ' },
			typedoc: { cmd: 'npx typedoc ' },
			swagger: { cmd: 'tsoa spec' }
		},
		clean: {
			build: ['build'],
			dist: ['dist']
		},
		copy: {
			api: { expand: true, cwd: 'build/api', src: '**', dest: 'dist/' },
			public: { expand: true, cwd: 'public', src: '**', dest: 'dist/public' },
			// workspace: { expand: true, cwd: 'src/api/workspace', src: '**', dest: 'dist/workspace' },
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
		data.types = 'index.d.ts'
		fs.writeFileSync('dist/package.json', JSON.stringify(data, null, 2), 'utf8')
	})

	grunt.registerTask('build', ['clean:build', 'exec:swagger', 'exec:tsc'])
	grunt.registerTask('lint', ['exec:lint'])
	grunt.registerTask('doc', ['exec:typedoc'])
	grunt.registerTask('dist', ['clean:dist', 'build', 'copy:api', 'copy:public', 'copy:license', 'create-package'])
	grunt.registerTask('default', [])
}
