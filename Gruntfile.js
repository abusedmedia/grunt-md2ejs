'use strict'

module.exports = function (grunt) {
  grunt.initConfig({

    md2ejs: {
      test: {
        options: {
        },
        files: [{
          expand: true,
          cwd: 'test/',
          src: ['*.md']
        }]
      }
    }

  })

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks')

  grunt.registerTask('default', ['md2ejs'])
}
