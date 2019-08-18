import { Tree } from '@angular-devkit/schematics';
import { addPackage } from './package-config';
import { Schema } from './schema';

const VERSION = require('../package.json').version;

/** Add dependencies to package.json */
export function addCdkToPackageJson(host: Tree) {
  addPackage(host, '@angular/cdk@0.0.0-PLACEHOLDER');
  addPackage(host, `ng-matero@~${VERSION}`);
}

/** Add dependencies to package.json */
export function addPackagesToPackageJson(host: Tree, options: Schema) {
  // TODO:
  addPackage(host, '@angular/material@0.0.0-PLACEHOLDER');
  addPackage(host, '@angular/flex-layout@0.0.0-PLACEHOLDER');

  if (options.gestures) {
    addPackage(host, 'hammerjs@0.0.0-PLACEHOLDER');
  }

  // 3rd lib
  addPackage(host, '@ngx-formly/core@0.0.0-PLACEHOLDER');
  addPackage(host, '@ngx-formly/material@0.0.0-PLACEHOLDER');
  addPackage(host, '@ngx-progressbar/core@0.0.0-PLACEHOLDER');
  addPackage(host, '@ngx-progressbar/router@0.0.0-PLACEHOLDER');
  addPackage(host, '@ngx-translate/core@0.0.0-PLACEHOLDER');
  addPackage(host, '@ngx-translate/http-loader@0.0.0-PLACEHOLDER');
  addPackage(host, '@ng-select/ng-select@0.0.0-PLACEHOLDER');
  addPackage(host, 'ngx-toastr@0.0.0-PLACEHOLDER');
  addPackage(host, 'screenfull@0.0.0-PLACEHOLDER');

  // Dev
  addPackage(host, '@angularclass/hmr@0.0.0-PLACEHOLDER', 'dev');
  addPackage(host, 'husky@0.0.0-PLACEHOLDER', 'dev');
  addPackage(host, 'prettier@0.0.0-PLACEHOLDER', 'dev');
  addPackage(host, 'prettier-stylelint@0.0.0-PLACEHOLDER', 'dev');
  addPackage(host, 'stylelint@0.0.0-PLACEHOLDER', 'dev');
  addPackage(host, 'stylelint-config-recommended-scss@0.0.0-PLACEHOLDER', 'dev');
  addPackage(host, 'stylelint-config-standard@0.0.0-PLACEHOLDER', 'dev');
  addPackage(host, 'stylelint-scss@0.0.0-PLACEHOLDER', 'dev');
}
