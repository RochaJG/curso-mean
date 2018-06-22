const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {
  watch('app/**/*.html', () => gulp.start('app.html')) // Adiciona um observador para analisar se houve alguma alteração
  watch('app/**/*.css', () => gulp.start('app.css'))   // em qualquer arquivo e em qualquer pasta, das especificadas
  watch('app/**/*.js', () => gulp.start('app.js'))
  watch('assets/**/*.*', () => gulp.start('app.assets'))
})

gulp.task('server', ['watch'], () => {
  return gulp.src('public').pipe(webserver({ // Chama o webserver caso hajam alterações analisadas pelo Watcher
    livereload: true,
    port: 3000,
    open: true // Manda abrir o browser
  }))
})