'use strict'

var gulp = require('gulp')
var minify = require('gulp-minify')

gulp.task('compress', function() {
    gulp.src('node_modules/materialize-css/dist/js/materialize.min.js')
    .pipe(minify({
        ext: {
            sec:'-debug.js',
            min: '.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['combo.js','-min.js']
    }))
    .pipe(gulp.dest('public/js'))
})