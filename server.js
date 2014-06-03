/**
 *
 */

var express = require('express')
  , app = express()
  , port = process.env.PORT || 4001
  , env = process.env.NODE_ENV || 'development'
  , Home = require('./lib/home')
  , About = require('./lib/about');

// routes
Home(app);
About(app);

// middlewares
app.use(express.static(__dirname + '/build/'+env));

// start app
app.listen(port, function () {
  console.log('[%s] Propertify listening on port %d', env, port);
});
