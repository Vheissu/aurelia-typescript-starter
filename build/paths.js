var appRoot = 'src/';
var outputRoot = 'dist/';
var exporSrvtRoot = 'export/'

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  font: appRoot + 'assets/fonts/**/*',
  fontOutput: 'dist/assets/fonts',
  style: ['assets/styles/**/*.scss', 'assets/styles/**/*.css'],
  styleOutput: outputRoot + 'assets/styles',
  image: appRoot + 'assets/images/**/*',
  imageOutput: outputRoot + 'assets/images',
  output: outputRoot,
  exportSrv: exporSrvtRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/*.ts',
  e2eSpecsDist: 'test/e2e/dist/',
  dtsSrc: [
    './typings/browser/**/*.d.ts',
    './custom_typings/**/*.d.ts',
    './jspm_packages/**/*.d.ts'
  ]
}
