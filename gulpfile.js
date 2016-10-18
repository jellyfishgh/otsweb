const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('default', () => {
    return gulp.src('src').pipe(babel({
        'presets': ['react', 'es2015']
    })).pipe(gulp.dest('lib'));
});

gulp.task('scripts', () => {
    gulp.src('lib/app.js').pipe(browserify({
        insertGlobals: true,
        debug: !gulp.env.production
    })).pipe(gulp.dest('public/dist/bundle.js'));
});

gulp.task('compress', (cb) => {
    pump([gulp.src('lib/*.js'), uglify(), gulp.dest('dist')], cb);
});