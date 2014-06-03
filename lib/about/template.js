/** @jsx React.DOM */

var React = require('React')
  , Layout = require('../layout/template');

module.exports = React.createClass({displayName: 'exports',

  render: function () {
    return (
      Layout(null, 
        React.DOM.h1(null, "About page view")
      )
    );
  }

});
