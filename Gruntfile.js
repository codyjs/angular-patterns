// Generated on 2013-07-16 using generator-angular 0.3.0
'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    express: {
      server: {
        options:{
            server: './server.js',
            bases: './'
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.registerTask('default', ['express', 'express-keepalive']);


};
