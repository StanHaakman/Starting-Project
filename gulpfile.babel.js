import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

import plumber from 'gulp-plumber';
import babel from 'gulp-babel';

import uglify from 'gulp-uglify';
import jshint from 'gulp-jshint';
import stylish from 'jshint-stylish';
import concat from 'gulp-concat';


// COMPILE SASS INTO CSS
function style()
{
    // STEPS
    // 1. Where is my SASS?
    // 2. Pass that file through SASS compiler
    // 3. Where do i save the compiled SASS
    // 4. stream changes to all browser

    // 1.
    return gulp.src('./src/sass/*.scss')
    // 2.
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    // 3.
    .pipe(gulp.dest('./dist/css'))
    // 4.
    .pipe(browserSync.stream());
}

function scripts()
{
    // STEPS
    // 1. Where is my JS?
    // 2. where do is save my JS
    // 3. stream changes to all browser

    // 1.
    return gulp.src('./src/js/*.js')
    // 2.
        .pipe(babel())
        .pipe(plumber())
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish))
        .pipe(uglify())
        .pipe(concat('build.min.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
}

function watch()
{
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/sass/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/*.js', scripts);
}


exports.style = style;
exports.watch = watch;