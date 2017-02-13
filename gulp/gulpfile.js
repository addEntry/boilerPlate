//gulp-app

// tell project that we will use gulp-app
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')(); // autoload plugins
var browserSync = require('browser-sync').create();
/*
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
*/

// css task
gulp.task('css', function() {
    //compile sass
    // output file to a /dist folder
    return gulp.src(['./src/sass/main.scss'])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.cssmin())
        .pipe(plugins.autoprefixer())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
})

// javascript task
gulp.task('js', function() {
    return gulp.src([
            './node_modules/jquery/dist/jquery.min.js',
            './src/js/magic.js',
            './src/js/admin.js'
        ])
        .pipe(plugins.concat('allMyJs.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

// watch for file changes and run task
gulp.task('watch', function() {
    gulp.watch(['./src/sass/*.scss'], ['css']);
    gulp.watch(['./src/js/*.js'], ['js']);
})

// serve app throught browser-sync
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['css', 'js', 'watch', 'serve']);
