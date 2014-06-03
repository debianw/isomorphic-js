/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({displayName: 'exports',

  /**
   *
   */

  render: function () {
    return (
      React.DOM.div( {className:"page"}, 
        React.DOM.header(null, 
          React.DOM.img( {src:"/images/node-js-logo.png"} )
        ),

        React.DOM.nav(null, 
          React.DOM.ul(null, 
            React.DOM.li(null,  " ", React.DOM.a( {href:"/"}, "Home"), " " ),
            React.DOM.li(null,  " ", React.DOM.a( {href:"/about-us"}, "About us"), " " )
          )
        ),

        React.DOM.div( {id:"content"},  " ", this.props.children, " " )
      )
    );
  }

});