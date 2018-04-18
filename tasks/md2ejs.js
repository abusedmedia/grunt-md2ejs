/*
 * grunt-json-templating
 * https://github.com/abused/grunt-json-templating
 *
 * Copyright (c) 2015 abusedmedia
 * Licensed under the MIT license.
 */

'use strict'

// read md list
// convert to html blob
// read frontmatter

module.exports = function (grunt) {
  var path = require('path')
  var fs = require('fs')
  var _ = require('lodash')
  const fm = require('front-matter')
  const md = require('marked')

  grunt.registerMultiTask('md2ejs', '', function () {
    this.files.forEach(function (f) {
      var srcfile = grunt.file.read(f.src[0])
      var cnt = fm(srcfile)
      cnt.html = md(cnt.body)

      console.log(cnt)

      var par = path.dirname(f.src[0])
      var templ = path.join(par, '_template.ejs')
      var alt_templ = (cnt.template) ? path.join(par, cnt.template) : null

      if (grunt.file.exists(templ)) {
        var newejs = path.join(f.src[0].replace('.md', '.ejs'))
        grunt.file.copy(templ, newejs)
        // var file = grunt.file.read(newejs)
        // var updated = file.replace('<% body %>', cnt.html)
        var newejson = path.join(f.src[0].replace('.md', '.json'))
        grunt.file.write(newejson, JSON.stringify(cnt))
      }

      // find folder

      // try to get template

      // duplicate the template
      // inject the
    })
  })
}
