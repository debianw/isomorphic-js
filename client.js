/**
 *
 */

var page = require('page')
  , Home = require('./lib/home')
  , About = require('./lib/about');

console.log('init client');

// routes
Home(page);
About(page);

// start page
page();