const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function convertSass(done){
    gulp.src('./src/sass/**/*.scss')
    .pipe(sass.sync().on('error',sass.logError))
    .pipe(gulp.dest('./public/assets/css'))

    done();
}

function watchChanges(){
    gulp.watch('./src/sass/**/*.scss',convertSass);
}

exports.default = watchChanges;