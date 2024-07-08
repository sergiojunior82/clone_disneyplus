const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
  return gulp.src('./src/images/**/*', { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

// Define tarefas que podem ser executadas em paralelo
exports.default = gulp.parallel(styles, images);

// Define a função de watch
exports.watch = function() {
  // Adiciona tanto styles quanto images ao watch
  gulp.watch('./src/styles/*.scss', styles); // Corrigido para apenas 'styles' como argumento
  gulp.watch('./src/images/**/*', images); // Adiciona o watch para imagens
}