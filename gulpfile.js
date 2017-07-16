'use strict'
var gulp = require('gulp')
var minify = require('gulp-minify')
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

function compile(watch){
    var bundle = browserify('./src/index.js', {debug:false})
    if (watch) {
        bundle = watchify(bundle)
        bundle.on('update', function(){
            rebundle()
        })
    }
    function rebundle(){
        bundle
            .transform(babel, {presets:['es2015'], plugins: ['syntax-async-functions','transform-regenerator']})
            .bundle().on('error',function(error){console.log(error); this.emit('end')})
            .pipe(source('index.js')).pipe(rename('app.js')).pipe(gulp.dest('public/javascripts'))
    }
    rebundle()
}

gulp.task('build', function(){
    return compile()
})

gulp.task('watch', function(){
    return compile(true)
})

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