
(function(global) {

  // 1. the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',

    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs'
  };

  // 2. System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };



  // 3. ngPackage
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // 4. Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    // Bundled (~40 requests):
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js',
                                      defaultExtension: 'js' };
    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });



    // 5. system config
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);

})(this);
