var gulp = require('gulp'),
    terser = require('gulp-terser'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require("gulp-autoprefixer"),
    cssnano = require("gulp-cssnano"),
    eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();


gulp.task('scripts', function(){
  return gulp.src('./js/*.js')
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('sass', function(){
    return gulp
        .src("./sass/style.scss")
        .pipe(sass())
        .pipe(
        autoprefixer({
            browsers: ["last 2 versions"]
        })
        )
        .pipe(cssnano())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("./build/css"));

})
gulp.task('lint', function() {
    return gulp.src('./js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
gulp.task('reload', function(done) {
    browserSync.reload();
    done();
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});




gulp.task("watch", function() {
    gulp.watch("./js/*.js", gulp.series("lint", "scripts", "reload" ));
    gulp.watch("./sass/*.scss", gulp.series("sass", "reload" ));
    gulp.watch("index.html", gulp.series("reload"));
  });

gulp.task('default', gulp.parallel('browser-sync', 'watch', 'scripts', 'sass'))

