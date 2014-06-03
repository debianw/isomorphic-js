/**
 *
 */

var _h = require('../helper')
  , React = require('react')
  , fs = require('fs')
  , template = require('./template')
  , indexHtml;

/**
 * Expose
 */

module.exports = function (router) {
  
  /**
   * @route /
   */

  // server handler
  if (_h.isServer()) {
    indexHtml = fs.readFileSync(__dirname+'/../layout/index.html', {encoding: 'utf8'});

    router.get('/', function (req, res) {
      var markup = React.renderComponentToString(template())
        , response = indexHtml.replace('{bodyContent}', markup);

      console.log('rendering home in the server :)');
      res.send(response);
    });
  }

  // client handler
  else {
    router('/', function (ctx) {
      console.log('rendering home in the client :)');
      React.renderComponent(template(null), document.querySelector('body'));
    });
  }

};