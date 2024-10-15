/** Why we need npm
 * 
 */

/** What is NPM
 * Main package manager for node.js
 * Huge repository of open source software which is used by any one.
 * Npm is provide prebuild code of other so we don't need to write from scratch and save our time.
 */

/** How to install
  * We want to use that package we can install it using CLI.
 * We have small package to large size library also.
 * We need node to install npm
 */

/** Local and global
 * We can install package in two way locally and globally
 * Locally we install in particular project folder and globally we install  package which accesible by any directory in our computer
 * locally : npm install package name 
 * globally : npm install -g packahe name
 */

/** Package.json
 * If we use multiple package it will store information of every package, project detail also.
 * It will usefull fo anyone want to clone our project so get the exact package of project.
 * If we clone or we have package.json file and we run "npm install" it will install all the packages which listed inside package.json file
 * to create package.json run command "npm init" and give some detail
 */

/** npm package dependencies
 * When we install package we see in package.json file that package install as dependenices mean our package will use that package.
 * But when we open our node modules we will see mulitple file which we not installed beause which package we install it dependent on other package also.
 * Inside module folder we go inside our install package folder package.json file we can see that oter packages as dependencies.
 * "npm list" quicky display all the packages 
 */

/** package version
 * Like software npm package also have version
 * "npm view package-name version" for current version
 * "npm view package-name versions" for all version list
 * Each version three digit with seprated by don ex. 12.43.214
 * first digit is major version, user for big chages, not backward-compatible(old version), will probably break old code.
 * second digit is minor version, backward-compatible features, won't break older builds(ideally).
 * thir digit is small bug fixes, won't break older builds.
 * When we install packages npm will install newes packages.
 * But when we update the package npm will care about it so our package won't break code before our package version we see "^"(caret) symbol which mean npm will update lated minor or patch version not major version
 * If we want to update latest major version we need to manually do it through "npm intall package@latest"
 * we can specify the specif version also "npm intall package@No.of package"
 * npm install packageName@~2(minor).3(patch)
 */

/** Package-lock.json
 * This file record the actual specific version of package
 * This file exists because of compatibility issue
 *  when we clone the project and using package.json file we install the packages npm will install current minor or patch version of package which can create compatiblity issue.
 * If project have package.json file it will install the exact same version which project have
 */