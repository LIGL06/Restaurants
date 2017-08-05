'use strict'
var gulp = require('gulp')
var minify = require('gulp-minify')
var rename = require('gulp-rename')

gulp.task('compress', function(){
    gulp.src('public/javascripts/app.js')
    gulp.src('node_modules/materialize-css/dist/js/materialize.min.js')
    gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(minify({
        ext: {
            sec: '-debug.js',
            min: '.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['combo.js','-min.js']
    }))
    .pipe(gulp.dest('public/javascripts'))
})