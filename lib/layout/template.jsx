/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  /**
   *
   */

  render: function () {
    return (
      <div className="page">
        <header>
          <img src="/images/node-js-logo.png" />
        </header>

        <nav>
          <ul>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/about-us">About us</a> </li>
          </ul>
        </nav>

        <div id="content"> {this.props.children} </div>
      </div>
    );
  }

});